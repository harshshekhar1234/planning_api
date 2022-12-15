<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Models\SubScheme;
use App\Models\Output;
use App\Models\OutputIndicator;
use App\Models\TargetOutput;

class TargetOutputController extends Controller
{
    public function index($id)
    {
        $outputtargets = DB::table('target_outputs')->where('output_id', $id)->get();
        return response()->json($outputtargets, 200);
    }

    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'value' => 'required',
            'year' => 'required',
            'measurement' => 'required|string|max:255',
            'outputindicator_id' => 'required|numeric|min:1',
            'output_id' => 'required|numeric|min:1',
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

        $outputtarget = new TargetOutput;
        $outputtarget->value = $request->value;
        $outputtarget->year = $request->year;
        $outputtarget->measurement = $request->measurement;
        $outputtarget->outputindicator_id = $request->outputindicator_id;
        $outputtarget->output_id = $request->output_id;
        $outputtarget->subscheme_id = $request->subscheme_id;
        $outputtarget->scheme_id = $request->scheme_id;
        $outputtarget->division_id = $request->division_id;
        $outputtarget->department_id = $request->department_id;
        $outputtarget->save();

        return response()->json([
            'status' => 200,
            'message' => 'success'
        ]);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'output_id' => 'required|numeric|min:1',
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

        $outputindicator = OutputIndicator::find($id);
        if (is_null($outputindicator)) {
            return response()->json([
                'status' => 404,
                'message' => 'Output Indicator not found'
            ]);
        }
        $outputindicator->name = $request->name;
        $outputindicator->output_id = $request->output_id;
        $outputindicator->subscheme_id = $request->subscheme_id;
        $outputindicator->scheme_id = $request->scheme_id;
        $outputindicator->division_id = $request->division_id;
        $outputindicator->department_id = $request->department_id;
        $outputindicator->save();

        return response()->json([
            'status' => 200,
            'message' => 'Output Indicator updated successfully.'
        ]);
    }

    public function show($id)
    {
        $outputindicator = OutputIndicator::find($id);
        if (is_null($outputindicator)) {
            return $this->sendError('Output Indicator not found.');
        }
        return response()->json($outputindicator, 200);
    }
}
