<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Models\SubScheme;
use App\Models\Output;
use App\Models\OutputIndicator;
use App\Models\TargetOutcome;

class TargetOutcomeController extends Controller
{
    public function index($id)
    {
        $outcometargets = DB::table('target_outcomes')->where('outcome_id', $id)->get();
        return response()->json($outcometargets, 200);
    }

    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'value' => 'required',
            'year' => 'required',
            'measurement' => 'required|string|max:255',
            'outcomeindicator_id' => 'required|numeric|min:1',
            'outcome_id' => 'required|numeric|min:1',
            'subscheme_id' => 'required|numeric',
            'scheme_id' => 'required|numeric|min:1',
            'division_id' => 'required|numeric|min:1',
            'department_id' => 'required|numeric|min:1|max:13',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
            ]);
        }

        $outcometarget = new TargetOutcome;
        $outcometarget->value = $request->value;
        $outcometarget->year = $request->year;
        $outcometarget->measurement = $request->measurement;
        $outcometarget->outcomeindicator_id = $request->outcomeindicator_id;
        $outcometarget->outcome_id = $request->outcome_id;
        $outcometarget->subscheme_id = $request->subscheme_id;
        $outcometarget->scheme_id = $request->scheme_id;
        $outcometarget->division_id = $request->division_id;
        $outcometarget->department_id = $request->department_id;
        $outcometarget->save();

        return response()->json([
            'status' => 200,
            'message' => 'success'
        ]);
    }

}
