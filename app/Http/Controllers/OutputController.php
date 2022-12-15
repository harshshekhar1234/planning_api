<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Models\SubScheme;
use App\Models\Output;
use App\Models\OutputIndicator;
use App\Models\TargetOutput;

class OutputController extends Controller
{
    public function index($id)
    {
        $outputs = DB::table('outputs')->where('subscheme_id', $id)->get();
        return response()->json($outputs, 200);
    }

    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
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

        $output = new Output;
        $output->name = $request->name;
        $output->subscheme_id = $request->subscheme_id;
        $output->scheme_id = $request->scheme_id;
        $output->division_id = $request->division_id;
        $output->department_id = $request->department_id;
        $output->save();

        return response()->json([
            'status' => 200,
            'message' => 'success'
        ]);
    }

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

        $output = Output::find($id);
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
                $output = new Output;
                $output->name = $request->output['name'];
                $output->subscheme_id = $request->output['subscheme_id'];
                $output->scheme_id = $request->output['scheme_id'];
                $output->division_id = $request->output['division_id'];
                $output->department_id = $request->output['department_id'];
                $output->save();

                foreach ($request->outputindicator as $key => $value) {
                    $outputindicator = new OutputIndicator;
                    $outputindicator->name = $value['name'];
                    $outputindicator->output_id = $output->id;
                    $outputindicator->subscheme_id = $output->subscheme_id;
                    $outputindicator->scheme_id = $output->scheme_id;
                    $outputindicator->division_id = $output->division_id;
                    $outputindicator->department_id = $output->department_id;
                    $outputindicator->save();

                    $targetOutput = new TargetOutput;
                    $targetOutput->value = $value['targetValue'];
                    $targetOutput->output_id = $output->id;
                    //$targetOutput->output_id = 'abc';
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
        $outputs = DB::table('outputs')->where('subscheme_id', $request->output['subscheme_id'])->get();

        return response()->json([
            'status' => 200,
            'outputs' => $outputs
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Output $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Output $id)
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
}
