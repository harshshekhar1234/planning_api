<?php

namespace App\Http\Controllers\Migrate;

use App\Http\Controllers\Controller;
use App\Models\MigOutcomeIndicator;
use App\Models\MigOutcomeIndicatorTarget;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Exception;

class MigOutcomeIndicatorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $outcomes = DB::table('mig_outcome_indicators')->where('outcome_id', $id)->get();
        return response()->json($outcomes, 200);
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
     * @param  MigOutcomeIndicator  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(MigOutcomeIndicator $id)
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
            'outcomeindicator.*.targetYear' => 'required|digits:4|integer|min:1900|max:' . (date('Y') + 10),
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
                    $outcomeindicator = new MigOutcomeIndicator();
                    $outcomeindicator->name = $value['name'];
                    $outcomeindicator->outcome_id = $request->outcome['id'];
                    $outcomeindicator->subscheme_id = $request->outcome['subscheme_id'];
                    $outcomeindicator->scheme_id = $request->outcome['scheme_id'];
                    $outcomeindicator->division_id = $request->outcome['division_id'];
                    $outcomeindicator->department_id = $request->outcome['department_id'];
                    $outcomeindicator->save();

                    $targetOutcome = new MigOutcomeIndicatorTarget();
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
        return response()->json([
            'status' => 200
        ]);
    }

    public function outcomeindicator_target($id)
    {
        $outcomeindicator = MigOutcomeIndicator::find($id);
        if (is_null($outcomeindicator)) {
            return response()->json([
                'status' => 404,
                'message' => 'Outcome Indicator not found'
            ]);
        } else {
            $outcometarget = DB::table('mig_outcome_indicator_targets')->where('outcomeindicator_id', $id)->get();
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
            'outcometarget.year' => 'required|digits:4|integer|min:1900|max:' . (date('Y') + 10),
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
                    'mig_outcome_indicators'
                )
                    ->where('id', $request->outcomeindicator['id'])
                    ->update(array('name' => $request->outcomeindicator['name']));

                $targetOutcome = DB::table(
                    'mig_outcome_indicator_targets'
                )
                    ->where('id', $request->outcometarget['id'])
                    ->update(array(
                        'value' => $request->outcometarget['value'],
                        'year' => $request->outcometarget['year'],
                        'measurement' => $request->outcometarget['measurement'],
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
            'message' => 'Outcome Indicator updated successfully.'
        ]);
    }
}
