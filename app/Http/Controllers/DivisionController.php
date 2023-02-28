<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Division;
use App\Models\Scheme;
use App\Models\SubScheme;
use App\Models\Output;
use App\Models\Outcome;
use App\Models\OutcomeIndicator;
use App\Models\OutputIndicator;
use App\Models\FinancialOutlay;
use App\Models\MigScheme;
use App\Models\MigSubScheme;
use App\Models\MigOutput;
use App\Models\MigOutcome;
use App\Models\MigOutcomeIndicator;
use App\Models\MigOutputIndicator;
use App\Models\MigFinancialOutlay;
use Illuminate\Support\Facades\DB;

class DivisionController extends Controller
{
    public function index($id)
    {
        $divisions = DB::table('divisions')->where('department_id', $id)->orderBy('name')->get();
        return response()->json($divisions, 200);
    }

    public function division_all()
    {
        $divisions = DB::table('divisions')->orderBy('department_id', 'asc')->orderBy('name')->get();
        return response()->json([
            'status' => 200,
            'divisions' => $divisions
        ]);
    }

    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'department_id' => 'required|numeric|min:1|max:13'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
            ]);
        }

        $division = new Division;
        $division->name = $request->name;
        $division->department_id = $request->department_id;
        $division->save();

        return response()->json([
            'status' => 200,
            'message' => 'success'
        ]);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'department_id' => 'required|numeric|min:1|max:13'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
            ]);
        }

        $division = Division::find($id);
        if (is_null($division)) {
            return response()->json([
                'status' => 404,
                'message' => 'Division not found'
            ]);
        }
        $division->name = $request->name;
        $division->department_id = $request->department_id;
        $division->save();

        return response()->json([
            'status' => 200,
            'message' => 'Division updated successfully.'
        ]);
    }

    public function show($id)
    {
        $division = Division::find($id);
        if (is_null($division)) {
            return $this->sendError('Division not found.');
        }
        return response()->json($division, 200);
    }

    public function div_dashboard($id, $fin_year)
    {
        $divisions = Division::where('department_id', $id)->orderBy('name')->get();
        foreach ($divisions as $division) {
            $state_share = FinancialOutlay::where(['division_id' => $division->id, 'fin_year' => $fin_year])->sum('state_share');
            $center_share = FinancialOutlay::where(['division_id' => $division->id, 'fin_year' => $fin_year])->sum('center_share');
            $division->outlay = ($state_share + $center_share) / 100;
            $division->scheme = Scheme::where(['division_id' => $division->id, 'fin_year' => $fin_year])->count();
            $division->subscheme = SubScheme::where(['division_id' => $division->id, 'fin_year' => $fin_year])->count();
            $division->output = Output::where(['division_id' => $division->id, 'fin_year' => $fin_year])->count();
            $division->outcome = Outcome::where(['division_id' => $division->id, 'fin_year' => $fin_year])->count();
            $division->output_indicator = OutputIndicator::where(['division_id' => $division->id, 'fin_year' => $fin_year])->count();
            $division->outcome_indicator = OutcomeIndicator::where(['division_id' => $division->id, 'fin_year' => $fin_year])->count();
        }
        return response()->json($divisions, 200);
    }

    public function mig_div_dashboard($id)
    {
        $divisions = Division::where('department_id', $id)->orderBy('name')->get();
        foreach ($divisions as $division) {
            $state_share = MigFinancialOutlay::where('division_id', $division->id)->sum('state_share');
            $center_share = MigFinancialOutlay::where('division_id', $division->id)->sum('center_share');
            $division->outlay = ($state_share + $center_share) / 100;
            $division->scheme = MigScheme::where('division_id', $division->id)->count();
            $division->subscheme = MigSubScheme::where('division_id', $division->id)->count();
            $division->output = MigOutput::where('division_id', $division->id)->count();
            $division->outcome = MigOutcome::where('division_id', $division->id)->count();
            $division->output_indicator = MigOutputIndicator::where('division_id', $division->id)->count();
            $division->outcome_indicator = MigOutcomeIndicator::where('division_id', $division->id)->count();
        }
        return response()->json($divisions, 200);
    }
}
