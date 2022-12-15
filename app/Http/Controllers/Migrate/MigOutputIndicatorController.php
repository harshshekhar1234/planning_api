<?php

namespace App\Http\Controllers\Migrate;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\MigOutputIndicator;
use App\Models\MigOutputIndicatorTarget;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Exception;

class MigOutputIndicatorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $outputindicators = DB::table('mig_output_indicators')->where('output_id', $id)->get();
        return response()->json($outputindicators, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  MigOutputIndicator  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(MigOutputIndicator $id)
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
                    $outputindicator = new MigOutputIndicator;
                    $outputindicator->name = $value['name'];
                    $outputindicator->output_id = $request->output['id'];
                    $outputindicator->subscheme_id = $request->output['subscheme_id'];
                    $outputindicator->scheme_id = $request->output['scheme_id'];
                    $outputindicator->division_id = $request->output['division_id'];
                    $outputindicator->department_id = $request->output['department_id'];
                    $outputindicator->save();

                    $targetOutput = new MigOutputIndicatorTarget;
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
        } catch (Exception $e) {
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
        $outputindicator = MigOutputIndicator::find($id);
        if (is_null($outputindicator)) {
            return response()->json([
                'status' => 404,
                'message' => 'Output Indicator not found'
            ]);
        } else {
            $outputtarget = DB::table('mig_output_indicator_targets')->where('outputindicator_id', $id)->get();
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
                    'mig_output_indicators'
                )
                    ->where('id', $request->outputindicator['id'])
                    ->update(array('name' => $request->outputindicator['name']));

                $targetOutput = DB::table(
                    'mig_output_indicator_targets'
                )
                    ->where('id', $request->outputtarget['id'])
                    ->update(array(
                        'value' => $request->outputtarget['value'],
                        'year' => $request->outputtarget['year'],
                        'measurement' => $request->outputtarget['measurement'],
                    ));
            });
        } catch (Exception $e) {
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
}
