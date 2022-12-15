<?php

namespace App\Http\Controllers\Migrate;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\MigOutput;
use App\Models\MigOutputIndicator;
use App\Models\MigOutputIndicatorTarget;
use Illuminate\Support\Facades\Validator;
use Exception;

class MigOutputController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $outputs = DB::table('mig_outputs')->where('subscheme_id', $id)->get();
        return response()->json($outputs, 200);
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
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
            ]);
        }

        $output = MigOutput::find($id);
        if (is_null($output)) {
            return response()->json([
                'status' => 404,
                'message' => 'Output not found'
            ]);
        }
        $output->name = $request->name;
        $output->save();

        return response()->json([
            'status' => 200,
            'message' => 'Output updated successfully.'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  MigOutput  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(MigOutput $id)
    {
        try {
            $id->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Output Deleted Successfully.'
            ]);
        } catch (Exception $e) {
            return response()->json([
                'status' => 404,
                'message' => $e
            ]);
        }
    }

    public function output_store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'output.name' => 'required|string',
            'output.subscheme_id' => 'required|numeric',
            'output.scheme_id' => 'required|numeric|min:1',
            'output.division_id' => 'required|numeric|min:1',
            'output.department_id' => 'required|numeric|min:1|max:13',
            'outputindicator.*.name' => 'required|string',
            'outputindicator.*.targetValue' => 'required|numeric',
            'outputindicator.*.targetYear' => 'required|digits:4|integer|min:1900|max:' . (date('Y') + 10),
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
                $output = new MigOutput;
                $output->name = $request->output['name'];
                $output->subscheme_id = $request->output['subscheme_id'];
                $output->scheme_id = $request->output['scheme_id'];
                $output->division_id = $request->output['division_id'];
                $output->department_id = $request->output['department_id'];
                $output->save();

                foreach ($request->outputindicator as $key => $value) {
                    $outputindicator = new MigOutputIndicator;
                    $outputindicator->name = $value['name'];
                    $outputindicator->output_id = $output->id;
                    $outputindicator->subscheme_id = $output->subscheme_id;
                    $outputindicator->scheme_id = $output->scheme_id;
                    $outputindicator->division_id = $output->division_id;
                    $outputindicator->department_id = $output->department_id;
                    $outputindicator->save();

                    $targetOutput = new MigOutputIndicatorTarget();
                    $targetOutput->value = $value['targetValue'];
                    $targetOutput->output_id = $output->id;
                    $targetOutput->outputindicator_id = $outputindicator->id;
                    $targetOutput->subscheme_id = $output->subscheme_id;
                    $targetOutput->scheme_id = $output->scheme_id;
                    $targetOutput->division_id = $output->division_id;
                    $targetOutput->department_id = $output->department_id;
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
        $outputs = DB::table('mig_outputs')->where('subscheme_id', $request->output['subscheme_id'])->get();

        return response()->json([
            'status' => 200,
            'outputs' => $outputs
        ]);
    }
}
