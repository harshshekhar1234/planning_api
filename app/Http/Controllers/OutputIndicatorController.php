<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Models\SubScheme;
use App\Models\Output;
use App\Models\OutputIndicator;
use App\Models\TargetOutput;

class OutputIndicatorController extends Controller
{
    public function index($id)
    {
        $outputindicators = DB::table('output_indicators')->where('output_id', $id)->get();
        return response()->json($outputindicators, 200);
    }

    public function store(Request $request)
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

        $outputindicator = new OutputIndicator;
        $outputindicator->name = $request->name;
        $outputindicator->output_id = $request->output_id;
        $outputindicator->subscheme_id = $request->subscheme_id;
        $outputindicator->scheme_id = $request->scheme_id;
        $outputindicator->division_id = $request->division_id;
        $outputindicator->department_id = $request->department_id;
        $outputindicator->save();

        return response()->json([
            'status' => 200,
            'message' => 'success'
        ]);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'scheme_id' => 'required|numeric|min:1|max:13'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
            ]);
        }

        $subscheme = SubScheme::find($id);
        if (is_null($subscheme)) {
            return response()->json([
                'status' => 404,
                'message' => 'Division not found'
            ]);
        }
        $subscheme->name = $request->name;
        $subscheme->scheme_id = $request->scheme_id;
        $subscheme->save();

        return response()->json([
            'status' => 200,
            'message' => 'Sub Scheme updated successfully.'
        ]);
    }

    public function show($id)
    {
        $subscheme = SubScheme::find($id);
        if (is_null($subscheme)) {
            return $this->sendError('Sub Scheme not found.');
        }
        return response()->json($subscheme, 200);
    }

    function searchByName($name, $id)
    {
        $result = SubScheme::where('scheme_id', $id)->where('name', 'ilike', '%' . $name . '%')->limit(5)->get();
        if (count($result)) {
            return response()->json($result);
        } else {
            return response()->json(['result' => 'No Data not found'], 404);
        }
    }

    function searchByCode($code, $id)
    {
        $result = SubScheme::where('scheme_id', $id)->where('subscheme_code', $code)->limit(5)->get();
        if (count($result)) {
            return response()->json($result);
        } else {
            return response()->json(['result' => 'No Data not found'], 404);
        }
    }

    public function outputindicator_store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'output.id' => 'required|numeric|min:1',
            'output.subscheme_id' => 'required|numeric|min:1',
            'output.scheme_id' => 'required|numeric|min:1',
            'output.division_id' => 'required|numeric|min:1',
            'output.department_id' => 'required|numeric|min:1|max:13',
            'outputindicator.*.name' => 'required|string',
            'outputindicator.*.targetValue' => 'required|numeric',
            'outputindicator.*.targetYear' => 'required|digits:4|integer|min:1900|max:' . (date('Y') + 3),
            'outputindicator.*.targetMeasurement' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
            ]);
        }
        try {
            DB::transaction(function () use ($request) {

                foreach ($request->outputindicator as $key => $value) {
                    $outputindicator = new OutputIndicator;
                    $outputindicator->name = $value['name'];
                    $outputindicator->output_id = $request->output['id'];
                    $outputindicator->subscheme_id = $request->output['subscheme_id'];
                    $outputindicator->scheme_id = $request->output['scheme_id'];
                    $outputindicator->division_id = $request->output['division_id'];
                    $outputindicator->department_id = $request->output['department_id'];
                    $outputindicator->save();

                    $targetOutput = new TargetOutput;
                    $targetOutput->value = $value['targetValue'];
                    $targetOutput->output_id = $request->output['id'];
                    $targetOutput->outputindicator_id = $outputindicator->id;
                    $targetOutput->subscheme_id = $request->output['subscheme_id'];
                    $targetOutput->scheme_id = $request->output['scheme_id'];
                    $targetOutput->division_id = $request->output['division_id'];
                    $targetOutput->department_id = $request->output['department_id'];
                    $targetOutput->year = $value['targetYear'];
                    $targetOutput->measurement = $value['targetMeasurement'];
                    $targetOutput->save();
                }
            });
        } catch (\Throwable $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e
            ]);
        }

        return response()->json([
            'status' => 200
        ]);
    }

    public function outputindicator_target($id)
    {
        $outputindicator = OutputIndicator::find($id);
        if (is_null($outputindicator)) {
            return response()->json([
                'status' => 404,
                'message' => 'Output Indicator not found'
            ]);
        } else {
            $outputtarget = DB::table('target_outputs')->where('outputindicator_id', $id)->get();
        }
        return response()->json([
            'outputindicator' => $outputindicator,
            'outputtarget' => $outputtarget,
            'status' => 200
        ]);
    }

    public function update_outputindicator_and_target(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'outputindicator.name' => 'required|string',
            'outputtarget.value' => 'required|numeric',
            'outputtarget.year' => 'required|digits:4|integer|min:1900|max:' . (date('Y') + 3),
            'outputtarget.measurement' => 'required|string|max:255'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
            ]);
        }

        try {
            DB::transaction(function () use ($request) {
                $outputindicator = DB::table(
                    'output_indicators'
                )
                    ->where('id', $request->outputindicator['id'])
                    ->update(array('name' => $request->outputindicator['name']));

                $targetOutput = DB::table(
                    'target_outputs'
                )
                    ->where('id', $request->outputtarget['id'])
                    ->update(array(
                        'value' => $request->outputtarget['value'],
                        'year' => $request->outputtarget['year'],
                        'measurement' => $request->outputtarget['measurement'],
                    ));
            });
        } catch (\Throwable $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e
            ]);
        }
        return response()->json([
            'status' => 200,
            'message' => 'Output Indicator updated successfully.'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\OutputIndicator $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(OutputIndicator $id)
    {
        try {
            $id->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Output Indicator Deleted Successfully.'
            ]);
        } catch (Exception $e) {
            return response()->json([
                'status' => 404,
                'message' => $e
            ]);
        }
    }
}
