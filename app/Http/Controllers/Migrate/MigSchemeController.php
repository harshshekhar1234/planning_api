<?php

namespace App\Http\Controllers\Migrate;

use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Support\Facades\DB;
use App\Models\MigFinancialOutlay;
use App\Models\MigOutcome;
use App\Models\MigOutcomeIndicator;
use App\Models\MigOutcomeIndicatorTarget;
use App\Models\MigOutput;
use App\Models\MigOutputIndicator;
use App\Models\MigOutputIndicatorTarget;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\MigScheme;
use App\Models\MigSubScheme;
use App\Models\MigSubSchemeGender;
use App\Models\MigSubSchemeSdg;
use App\Models\MigSubSchemeSocial;

class MigSchemeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $schemes = DB::table('mig_schemes')->where('division_id', $id)->orderBy('state_name')->get();
        return response()->json($schemes, 200);
    }

    public function indexdept($id)
    {
        $schemes = MigScheme::select('id', 'state_code', 'state_name', 'center_code', 'center_name')->where('division_id', $id)->orderBy('state_name')->get();
        return response()->json($schemes, 200);
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
        if ($request->state_code == null && $request->center_code == null) {
            return response()->json([
                'status' => 401,
                'message' => 'Enter at least one: state or center scheme details'
            ]);
        }
        if ($request->has('state_code') && !$request->has('center_code')) {
            $validator = Validator::make($request->all(), [
                'state_code' => 'required|string|size:4',
                'state_name' => 'required|string',
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'status' => 401,
                    'message' => $validator->errors()
                ]);
            }
            $state_name = $request->state_name;
            $state_code = $request->state_code;
            $center_name = 'NAPL';
            $center_code = 'NAPL';
        }
        if ($request->has('center_code') && !$request->has('state_code')) {
            $validator = Validator::make($request->all(), [
                'center_code' => 'required|string|size:4',
                'center_name' => 'required|string',
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'status' => 401,
                    'message' => $validator->errors()
                ]);
            }
            $state_name = '0000';
            $state_code = '0000';
            $center_name = $request->center_name;
            $center_code = $request->center_code;
        }
        if ($request->has('state_code') && $request->has('center_code')) {
            $validator = Validator::make($request->all(), [
                'state_code' => 'required|string|size:4',
                'state_name' => 'required|string',
                'center_code' => 'required|string|size:4',
                'center_name' => 'required|string',
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'status' => 401,
                    'message' => $validator->errors()
                ]);
            }
            $state_name = $request->state_name;
            $state_code = $request->state_code;
            $center_name = $request->center_name;
            $center_code = $request->center_code;
        }
        $scheme = MigScheme::find($id);
        if (is_null($scheme)) {
            return response()->json([
                'status' => 404,
                'message' => 'Scheme not found'
            ]);
        }
        $scheme->state_name = $state_name;
        $scheme->state_code = $state_code;
        $scheme->center_name = $center_name;
        $scheme->center_code = $center_code;
        $scheme->save();

        return response()->json([
            'status' => 200,
            'message' => 'Scheme updated successfully.'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  MigScheme  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(MigScheme $id)
    {
        try {
            $id->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Scheme Deleted Successfully.'
            ]);
        } catch (Exception $e) {
            return response()->json([
                'status' => 404,
                'message' => $e
            ]);
        }
    }

    public function create_scheme(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'department' => 'required|numeric|min:1',
            'division' => 'required|numeric|min:1',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
            ]);
        }
        if ($request->schemeStateCode == null && $request->schemeCenterCode == null) {
            return response()->json([
                'status' => 401,
                'message' => 'Enter at least one: state or center scheme details'
            ]);
        }
        if ($request->schemeStateCode != null && $request->schemeCenterCode == null) {
            $validator = Validator::make($request->all(), [
                'schemeStateCode' => 'required|string|size:4',
                'schemeStateName' => 'required|string',
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'status' => 401,
                    'message' => $validator->errors()
                ]);
            }
            $state_name = $request->schemeStateName;
            $state_code = $request->schemeStateCode;
            $center_name = 'NAPL';
            $center_code = 'NAPL';
        }
        if ($request->schemeStateCode == null && $request->schemeCenterCode != null) {
            $validator = Validator::make($request->all(), [
                'schemeCenterCode' => 'required|string|size:4',
                'schemeCenterName' => 'required|string',
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'status' => 401,
                    'message' => $validator->errors()
                ]);
            }
            $state_name = '0000';
            $state_code = '0000';
            $center_name = $request->schemeCenterName;
            $center_code = $request->schemeCenterCode;
        }
        if ($request->schemeStateCode != null && $request->schemeCenterCode != null) {
            $validator = Validator::make($request->all(), [
                'schemeStateCode' => 'required|string|size:4',
                'schemeStateName' => 'required|string',
                'schemeCenterCode' => 'required|string|size:4',
                'schemeCenterName' => 'required|string',
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'status' => 401,
                    'message' => $validator->errors()
                ]);
            }
            $state_name = $request->schemeStateName;
            $state_code = $request->schemeStateCode;
            $center_name = $request->schemeCenterName;
            $center_code = $request->schemeCenterCode;
        }

        // if ($request->subSchemeStateShare == null && $request->subSchemeCenterShare == null) {
        //     return response()->json([
        //         'status' => 401,
        //         'message' => 'Budget Estimate for a sub-scheme cannot be zero.'
        //     ]);
        // }

        $scheme = MigScheme::where('state_code', $state_code)
            ->where('center_code', $center_code)
            ->get();
        if ($scheme->isNotEmpty()) {
            return response()->json([
                'status' => 409,
                'message' => 'Scheme Already Exists',
                'scheme' => $scheme,
            ]);
        }

        $validator = Validator::make($request->all(), [
            'subSchemeName' => 'required|string',
            'subSchemeCode' => 'required|numeric|digits:8',
            'subSchemeStateShare' => 'required|numeric',
            'subSchemeCenterShare' => 'required|numeric',
            'subSchemeSDG' => 'required|numeric',
            'outputs.*.name' => 'required|string',
            'outputs.*.outputIndicators.*.name' => 'required|string',
            'outputs.*.outputIndicators.*.targetValue' => 'required|numeric',
            'outputs.*.outputIndicators.*.targetYear' => 'required|digits:4|integer|min:1900',
            'outputs.*.outputIndicators.*.targetMeasurement' => 'required|string|max:255',
            'outcomes.*.name' => 'required|string',
            'outcomes.*.outcomeIndicators.*.name' => 'required|string',
            'outcomes.*.outcomeIndicators.*.targetValue' => 'required|numeric',
            'outcomes.*.outcomeIndicators.*.targetYear' => 'required|digits:4|integer|min:1900',
            'outcomes.*.outcomeIndicators.*.targetMeasurement' => 'required|string|max:255',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
            ]);
        }

        $subscheme = MigSubScheme::where('subscheme_code', $request->subSchemeCode)
            ->get();
        if ($subscheme->isNotEmpty()) {
            return response()->json([
                'status' => 409,
                'message' => 'SubScheme Already Exists',
                'subscheme' => $subscheme,
            ]);
        }

        $social = collect($request->social);
        $filteredSocial = $social->where('selected', true)->values();

        $gender = collect($request->gender);
        $filteredGender = $gender->where('selected', true)->values();

        try {
            DB::transaction(function () use ($request, $state_name, $state_code, $center_name, $center_code, $filteredSocial, $filteredGender) {
                $scheme = new MigScheme;
                $scheme->state_name = $state_name;
                $scheme->state_code = $state_code;
                $scheme->center_name = $center_name;
                $scheme->center_code = $center_code;
                $scheme->division_id = $request->division;
                $scheme->department_id = $request->department;
                $scheme->save();

                $subScheme = new MigSubScheme;
                $subScheme->name = $request->subSchemeName;
                $subScheme->subscheme_code = $request->subSchemeCode;
                $subScheme->scheme_id = $scheme->id;
                $subScheme->division_id = $request->division;
                $subScheme->department_id = $request->department;
                $subScheme->risk_remarks = $request->riskremarks;
                $subScheme->initial_remarks = $request->riskremarks;
                $subScheme->save();

                $financialOutlay = new MigFinancialOutlay;
                $financialOutlay->state_share = $request->subSchemeStateShare;
                $financialOutlay->center_share = $request->subSchemeCenterShare;
                $financialOutlay->department_id = $request->department;
                $financialOutlay->division_id = $request->division;
                $financialOutlay->scheme_id = $scheme->id;
                $financialOutlay->subscheme_id = $subScheme->id;
                $financialOutlay->save();

                foreach ($filteredSocial as $social) {
                    $dataSocial[] = [
                        'subscheme_id' => $subScheme->id,
                        'social_id' => $social['id'],
                        'created_at' => new \dateTime,
                        'updated_at' => new \dateTime
                    ];
                }
                MigSubSchemeSocial::insert($dataSocial);

                foreach ($filteredGender as $gender) {
                    $dataGender[] = [
                        'subscheme_id' => $subScheme->id,
                        'gender_id' => $gender['id'],
                        'created_at' => new \dateTime,
                        'updated_at' => new \dateTime
                    ];
                }
                MigSubSchemeGender::insert($dataGender);

                $subschemeSdg = new MigSubSchemeSdg;
                $subschemeSdg->subscheme_id = $subScheme->id;
                $subschemeSdg->sdg_id = $request->subSchemeSDG;
                $subschemeSdg->save();

                foreach ($request->outcomes as $outcome_key => $outcome_value) {
                    $outcome = new MigOutcome;
                    $outcome->name = $outcome_value['name'];
                    $outcome->subscheme_id = $subScheme->id;
                    $outcome->scheme_id = $scheme->id;
                    $outcome->division_id = $request->division;
                    $outcome->department_id = $request->department;
                    $outcome->save();

                    foreach ($outcome_value['outcomeIndicators'] as $outcomeIndicator_key => $outcomeIndicator_value) {
                        $outcomeindicator = new MigOutcomeIndicator;
                        $outcomeindicator->name = $outcomeIndicator_value['name'];
                        $outcomeindicator->outcome_id = $outcome->id;
                        $outcomeindicator->subscheme_id = $subScheme->id;
                        $outcomeindicator->scheme_id = $scheme->id;
                        $outcomeindicator->division_id = $request->division;
                        $outcomeindicator->department_id = $request->department;
                        $outcomeindicator->save();

                        $targetOutcome = new MigOutcomeIndicatorTarget;
                        $targetOutcome->value = $outcomeIndicator_value['targetValue'];
                        $targetOutcome->outcome_id = $outcome->id;
                        $targetOutcome->outcomeindicator_id = $outcomeindicator->id;
                        $targetOutcome->subscheme_id = $subScheme->id;
                        $targetOutcome->scheme_id = $scheme->id;
                        $targetOutcome->division_id = $request->division;
                        $targetOutcome->department_id = $request->department;
                        $targetOutcome->year = $outcomeIndicator_value['targetYear'];
                        $targetOutcome->measurement = $outcomeIndicator_value['targetMeasurement'];
                        $targetOutcome->save();
                    }
                }

                foreach ($request->outputs as $output_key => $output_value) {
                    $output = new MigOutput;
                    $output->name = $output_value['name'];
                    $output->subscheme_id = $subScheme->id;
                    $output->scheme_id = $scheme->id;
                    $output->division_id = $request->division;
                    $output->department_id = $request->department;
                    $output->save();

                    foreach ($output_value['outputIndicators'] as $outputIndicator_key => $outputIndicator_value) {
                        $outputindicator = new MigOutputIndicator();
                        $outputindicator->name = $outputIndicator_value['name'];
                        $outputindicator->output_id = $output->id;
                        $outputindicator->subscheme_id = $subScheme->id;
                        $outputindicator->scheme_id = $scheme->id;
                        $outputindicator->division_id = $request->division;
                        $outputindicator->department_id = $request->department;
                        $outputindicator->save();

                        $targetOutput = new MigOutputIndicatorTarget();
                        $targetOutput->value = $outputIndicator_value['targetValue'];
                        $targetOutput->output_id = $output->id;
                        $targetOutput->outputindicator_id = $outputindicator->id;
                        $targetOutput->subscheme_id = $subScheme->id;
                        $targetOutput->scheme_id = $scheme->id;
                        $targetOutput->division_id = $request->division;
                        $targetOutput->department_id = $request->department;
                        $targetOutput->year = $outputIndicator_value['targetYear'];
                        $targetOutput->measurement = $outputIndicator_value['targetMeasurement'];
                        $targetOutput->save();
                    }
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
}
