<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Models\OutcomeIndicator;
use App\Models\TargetOutcome;

class OutcomeIndicatorController extends Controller
{
    public function index($id)
    {
        $outcomes = DB::table('outcome_indicators')->where('outcome_id', $id)->get();
        return response()->json($outcomes, 200);
    }

    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
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

        $outcomeindicator = new OutcomeIndicator;
        $outcomeindicator->name = $request->name;
        $outcomeindicator->outcome_id = $request->outcome_id;
        $outcomeindicator->subscheme_id = $request->subscheme_id;
        $outcomeindicator->scheme_id = $request->scheme_id;
        $outcomeindicator->division_id = $request->division_id;
        $outcomeindicator->department_id = $request->department_id;
        $outcomeindicator->save();

        return response()->json([
            'status' => 200,
            'message' => 'success'
        ]);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
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

        $outcomeindicator = OutcomeIndicator::find($id);
        if (is_null($outcomeindicator)) {
            return response()->json([
                'status' => 404,
                'message' => 'Outcome Indicator not found'
            ]);
        }
        $outcomeindicator->name = $request->name;
        $outcomeindicator->outcome_id = $request->outcome_id;
        $outcomeindicator->subscheme_id = $request->subscheme_id;
        $outcomeindicator->scheme_id = $request->scheme_id;
        $outcomeindicator->division_id = $request->division_id;
        $outcomeindicator->department_id = $request->department_id;
        $outcomeindicator->save();

        return response()->json([
            'status' => 200,
            'message' => 'Outcome Indicator updated successfully.'
        ]);
    }

    public function show($id)
    {
        $outcomeindicator = OutcomeIndicator::find($id);
        if (is_null($outcomeindicator)) {
            return $this->sendError('Outcome Indicator not found.');
        }
        return response()->json($outcomeindicator, 200);
    }

    public function outcomeindicator_store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'outcome.id' => 'required|numeric|min:1',
            'outcome.subscheme_id' => 'required|numeric|min:1',
            'outcome.scheme_id' => 'required|numeric|min:1',
            'outcome.division_id' => 'required|numeric|min:1',
            'outcome.department_id' => 'required|numeric|min:1|max:13',
            'outcomeindicator.*.name' => 'required|string',
            'outcomeindicator.*.targetValue' => 'required|numeric',
            'outcomeindicator.*.targetYear' => 'required|digits:4|integer|min:1900|max:' . (date('Y') + 3),
            'ououtcomeindicator.*.targetMeasurement' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
            ]);
        }
        try {
            DB::transaction(function () use ($request) {

                foreach ($request->outcomeindicator as $key => $value) {
                    $outcomeindicator = new OutcomeIndicator;
                    $outcomeindicator->name = $value['name'];
                    $outcomeindicator->outcome_id = $request->outcome['id'];
                    $outcomeindicator->subscheme_id = $request->outcome['subscheme_id'];
                    $outcomeindicator->scheme_id = $request->outcome['scheme_id'];
                    $outcomeindicator->division_id = $request->outcome['division_id'];
                    $outcomeindicator->department_id = $request->outcome['department_id'];
                    $outcomeindicator->save();

                    $targetOutcome = new TargetOutcome;
                    $targetOutcome->value = $value['targetValue'];
                    $targetOutcome->outcome_id = $request->outcome['id'];
                    $targetOutcome->outcomeindicator_id = $outcomeindicator->id;
                    $targetOutcome->subscheme_id = $request->outcome['subscheme_id'];
                    $targetOutcome->scheme_id = $request->outcome['scheme_id'];
                    $targetOutcome->division_id = $request->outcome['division_id'];
                    $targetOutcome->department_id = $request->outcome['department_id'];
                    $targetOutcome->year = $value['targetYear'];
                    $targetOutcome->measurement = $value['targetMeasurement'];
                    $targetOutcome->save();
                }
            });
        } catch (\Throwable $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e
            ]);
        }
        $outcomes = DB::table('outcomes')->where('subscheme_id', $request->outcome['subscheme_id'])->get();

        return response()->json([
            'status' => 200
        ]);
    }

    public function outcomeindicator_target($id)
    {
        $outcomeindicator = OutcomeIndicator::find($id);
        if (is_null($outcomeindicator)) {
            return response()->json([
                'status' => 404,
                'message' => 'Outcome Indicator not found'
            ]);
        } else {
            $outcometarget = DB::table('target_outcomes')->where('outcomeindicator_id', $id)->get();
        }
        return response()->json([
            'outcomeindicator' => $outcomeindicator,
            'outcometarget' => $outcometarget,
            'status' => 200
        ]);
    }

    public function update_outcomeindicator_and_target(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'outcomeindicator.name' => 'required|string',
            'outcometarget.value' => 'required|numeric',
            'outcometarget.year' => 'required|digits:4|integer|min:1900|max:' . (date('Y') + 3),
            'outcometarget.measurement' => 'required|string|max:255'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
            ]);
        }

        try {
            DB::transaction(function () use ($request) {
                $outcomeindicator = DB::table(
                    'outcome_indicators'
                )
                    ->where('id', $request->outcomeindicator['id'])
                    ->update(array('name' => $request->outcomeindicator['name']));

                $targetOutcome = DB::table(
                    'target_outcomes'
                )
                    ->where('id', $request->outcometarget['id'])
                    ->update(array(
                        'value' => $request->outcometarget['value'],
                        'year' => $request->outcometarget['year'],
                        'measurement' => $request->outcometarget['measurement'],
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
            'message' => 'Outcome Indicator updated successfully.'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\OutcomeIndicator $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(OutcomeIndicator $id)
    {
        try {
            $id->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Outcome Indicator Deleted Successfully.'
            ]);
        } catch (Exception $e) {
            return response()->json([
                'status' => 404,
                'message' => $e
            ]);
        }
    }
}
