<?php

namespace App\Http\Controllers\Migrate;

use App\Http\Controllers\Controller;
use App\Models\MigSubScheme;
use App\Models\MigOutcome;
use App\Models\MigOutput;
use App\Models\MigOutcomeIndicator;
use App\Models\MigOutputIndicator;
use App\Models\MigOutcomeIndicatorTarget;
use App\Models\MigOutputIndicatorTarget;
use App\Models\MigFinancialOutlay;
use App\Models\MigSubSchemeGender;
use App\Models\MigSubSchemeSocial;
use App\Models\MigSubSchemeSdg;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class MigSubSchemeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $subschemes = DB::table('mig_sub_schemes')->where('scheme_id', $id)->orderBy('id')->get();
        return response()->json($subschemes, 200);
    }

    public function indexdept($id)
    {
        $subschemes = DB::table('mig_sub_schemes')->select('id', 'name', 'subscheme_code')->where('scheme_id', $id)->orderBy('id')->get();
        return response()->json($subschemes, 200);
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
            'subscheme_code' => 'required|numeric|digits:8',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
            ]);
        }

        $subscheme = MigSubScheme::find($id);
        if (is_null($subscheme)) {
            return response()->json([
                'status' => 404,
                'message' => 'Sub-scheme not found'
            ]);
        }
        $subscheme->name = $request->name;
        $subscheme->subscheme_code = $request->subscheme_code;
        $subscheme->save();

        return response()->json([
            'status' => 200,
            'message' => 'Sub Scheme updated successfully.'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  MigSubScheme  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(MigSubScheme $id)
    {
        try {
            $id->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Sub-Scheme Deleted Successfully.'
            ]);
        } catch (Exception $e) {
            return response()->json([
                'status' => 404,
                'message' => $e
            ]);
        }
    }

    public function create_sub_scheme(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'department' => 'required|numeric|min:1',
            'division' => 'required|numeric|min:1',
            'schemeId' => 'required|numeric|min:1',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
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
                'scheme' => $subscheme,
            ]);
        }

        $social = collect($request->social);
        $filteredSocial = $social->where('selected', true)->values();

        $gender = collect($request->gender);
        $filteredGender = $gender->where('selected', true)->values();

        try {
            DB::transaction(function () use ($request, $filteredSocial, $filteredGender) {
                $subScheme = new MigSubScheme();
                $subScheme->name = $request->subSchemeName;
                $subScheme->subscheme_code = $request->subSchemeCode;
                $subScheme->scheme_id = $request->schemeId;
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
                $financialOutlay->scheme_id = $request->schemeId;
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
                MigSubschemeSocial::insert($dataSocial);

                foreach ($filteredGender as $gender) {
                    $dataGender[] = [
                        'subscheme_id' => $subScheme->id,
                        'gender_id' => $gender['id'],
                        'created_at' => new \dateTime,
                        'updated_at' => new \dateTime
                    ];
                }
                MigSubschemeGender::insert($dataGender);

                $subschemeSdg = new MigSubschemeSdg;
                $subschemeSdg->subscheme_id = $subScheme->id;
                $subschemeSdg->sdg_id = $request->subSchemeSDG;
                $subschemeSdg->save();

                foreach ($request->outcomes as $outcome_key => $outcome_value) {
                    $outcome = new MigOutcome;
                    $outcome->name = $outcome_value['name'];
                    $outcome->subscheme_id = $subScheme->id;
                    $outcome->scheme_id = $request->schemeId;
                    $outcome->division_id = $request->division;
                    $outcome->department_id = $request->department;
                    $outcome->save();

                    foreach ($outcome_value['outcomeIndicators'] as $outcomeIndicator_key => $outcomeIndicator_value) {
                        $outcomeindicator = new MigOutcomeIndicator;
                        $outcomeindicator->name = $outcomeIndicator_value['name'];
                        $outcomeindicator->outcome_id = $outcome->id;
                        $outcomeindicator->subscheme_id = $subScheme->id;
                        $outcomeindicator->scheme_id = $request->schemeId;
                        $outcomeindicator->division_id = $request->division;
                        $outcomeindicator->department_id = $request->department;
                        $outcomeindicator->save();

                        $targetOutcome = new MigOutcomeIndicatorTarget();
                        $targetOutcome->value = $outcomeIndicator_value['targetValue'];
                        $targetOutcome->outcome_id = $outcome->id;
                        $targetOutcome->outcomeindicator_id = $outcomeindicator->id;
                        $targetOutcome->subscheme_id = $subScheme->id;
                        $targetOutcome->scheme_id = $request->schemeId;
                        $targetOutcome->division_id = $request->division;
                        $targetOutcome->department_id = $request->department;
                        $targetOutcome->year = $outcomeIndicator_value['targetYear'];
                        $targetOutcome->measurement = $outcomeIndicator_value['targetMeasurement'];
                        $targetOutcome->save();
                    }
                }

                foreach ($request->outputs as $output_key => $output_value) {
                    $output = new MigOutput();
                    $output->name = $output_value['name'];
                    $output->subscheme_id = $subScheme->id;
                    $output->scheme_id = $request->schemeId;
                    $output->division_id = $request->division;
                    $output->department_id = $request->department;
                    $output->save();

                    foreach ($output_value['outputIndicators'] as $outputIndicator_key => $outputIndicator_value) {
                        $outputindicator = new MigOutputIndicator();
                        $outputindicator->name = $outputIndicator_value['name'];
                        $outputindicator->output_id = $output->id;
                        $outputindicator->subscheme_id = $subScheme->id;
                        $outputindicator->scheme_id = $request->schemeId;
                        $outputindicator->division_id = $request->division;
                        $outputindicator->department_id = $request->department;
                        $outputindicator->save();

                        $targetOutput = new MigOutputIndicatorTarget();
                        $targetOutput->value = $outputIndicator_value['targetValue'];
                        $targetOutput->output_id = $output->id;
                        $targetOutput->outputindicator_id = $outputindicator->id;
                        $targetOutput->subscheme_id = $subScheme->id;
                        $targetOutput->scheme_id = $request->schemeId;
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

    public function subscheme_header($id)
    {
        $sub_scheme = DB::table('mig_sub_schemes AS ss')
            ->select(
                'ss.*',
                's.id',
                's.state_name',
                's.state_code',
                's.center_name',
                's.center_code',
                'dept.id as dept_id',
                'dept.name as dept_name',
                'div.id as div_id',
                'div.name as div_name',
                'div.demand_no'
            )
            ->join('mig_schemes AS s', 's.id', '=', 'ss.scheme_id')
            ->join('departments AS dept', 'dept.id', '=', 'ss.department_id')
            ->join('divisions AS div', 'div.id', '=', 'ss.division_id')
            ->where('ss.id', $id)->get();

        return response()->json([
            'status' => 200,
            'sub_scheme' => $sub_scheme,
            'sanction' => 0,
            'allotment' => 0,
            'expenditure' => 0
        ]);
    }

    public function report_subscheme_division($id)
    {
        $schemes = DB::table('mig_schemes')->where('division_id', $id)->orderBy('id')->get();
        foreach ($schemes as $scheme) {
            $state_share = MigFinancialOutlay::where('scheme_id', $scheme->id)->sum('state_share');
            $centre_share = MigFinancialOutlay::where('scheme_id', $scheme->id)->sum('center_share');
            $scheme->financial_outlay = $state_share + $centre_share;
            $scheme->subschemes = DB::table('mig_sub_schemes')->where('scheme_id', $scheme->id)->orderBy('id')->get();
            foreach ($scheme->subschemes as $subscheme) {
                $sub_scheme = DB::table('mig_sub_schemes AS ss')
                    ->select(
                        'ss.*',
                        's.id',
                        's.state_name',
                        's.state_code',
                        's.center_name',
                        's.center_code',
                        'dept.id as dept_id',
                        'dept.name as dept_name',
                        'div.id as div_id',
                        'div.name as div_name',
                        'div.demand_no'
                    )
                    ->join('mig_schemes AS s', 's.id', '=', 'ss.scheme_id')
                    ->join('departments AS dept', 'dept.id', '=', 'ss.department_id')
                    ->join('divisions AS div', 'div.id', '=', 'ss.division_id')
                    ->where('ss.id', $subscheme->id)->get();

                $sanction = 0;
                $allotment = 0;
                $expenditure = 0;

                $outputs = DB::table('mig_outputs')->where('subscheme_id', $subscheme->id)->orderBy('id')->get();
                if (sizeof($outputs) == 0) {
                    return response()->json([
                        'status' => 404,
                        'message' => 'No Output Found'
                    ]);
                }
                $outputindicators = DB::table('mig_output_indicators')->where('subscheme_id', $subscheme->id)->orderBy('id')->get();
                if (sizeof($outputindicators) == 0) {
                    return response()->json([
                        'status' => 404,
                        'message' => 'No Output Indicators Found'
                    ]);
                }
                $outcomes = DB::table('mig_outcomes')->where('subscheme_id', $subscheme->id)->orderBy('id')->get();
                if (sizeof($outcomes) == 0) {
                    return response()->json([
                        'status' => 404,
                        'message' => 'No Outcome Found'
                    ]);
                }
                $outcomeindicators = DB::table('mig_outcome_indicators')->where('subscheme_id', $subscheme->id)->orderBy('id')->get();
                if (sizeof($outcomeindicators) == 0) {
                    return response()->json([
                        'status' => 404,
                        'message' => 'No Output Indicators Found'
                    ]);
                }
                $target_outputs = DB::table('mig_output_indicator_targets')->where('subscheme_id', $subscheme->id)->orderBy('id')->get();
                if (sizeof($target_outputs) == 0) {
                    return response()->json([
                        'status' => 404,
                        'message' => 'No Output Indicator Targets Found'
                    ]);
                }
                $target_outcomes = DB::table('mig_outcome_indicator_targets')->where('subscheme_id', $subscheme->id)->orderBy('id')->get();
                if (sizeof($target_outcomes) == 0) {
                    return response()->json([
                        'status' => 404,
                        'message' => 'No Outcome Indicator Targets Found'
                    ]);
                }

                $achievement_outputs = [];
                $achievement_outcomes = [];

                foreach ($outputs as $output) {
                    $output->outputindicatorscount = DB::table('mig_output_indicators')->where('output_id', $output->id)->count();
                }
                foreach ($outcomes as $outcome) {
                    $outcome->outcomeindicatorscount = DB::table('mig_outcome_indicators')->where('outcome_id', $outcome->id)->count();
                }

                $genders = DB::table('genders AS g')
                    ->select('g.name')
                    ->join('mig_sub_scheme_genders AS sg', 'sg.gender_id', '=', 'g.id')
                    ->where('sg.subscheme_id', $subscheme->id)->get();

                $socials = DB::table('socials AS s')
                    ->select('s.name')
                    ->join('mig_sub_scheme_socials AS ss', 'ss.social_id', '=', 's.id')
                    ->where('ss.subscheme_id', $subscheme->id)->get();

                $financial_outlay = MigFinancialOutlay::select('state_share', 'center_share')->where('subscheme_id', $subscheme->id)->get();

                $sdg = DB::table('sdg_goals AS s')
                    ->select('s.goal_name', 's.goal_number')
                    ->join('mig_sub_scheme_sdgs AS ss', 'ss.sdg_id', '=', 's.id')
                    ->where('ss.subscheme_id', $subscheme->id)->get();

                $risk_remarks = "";

                $subscheme->status = 200;
                $subscheme->outputs = $outputs;
                $subscheme->outcomes = $outcomes;
                $subscheme->outputindicators = $outputindicators;
                $subscheme->outcomeindicators = $outcomeindicators;
                $subscheme->target_outputs = $target_outputs;
                $subscheme->target_outcomes = $target_outcomes;
                $subscheme->achievement_outputs = $achievement_outputs;
                $subscheme->achievement_outcomes = $achievement_outcomes;
                $subscheme->genders = $genders;
                $subscheme->socials = $socials;
                $subscheme->financial_outlay = $financial_outlay[0]->state_share + $financial_outlay[0]->center_share;
                $subscheme->sub_scheme = $sub_scheme;
                $subscheme->sdg = $sdg;
                $subscheme->sanction = $sanction;
                $subscheme->allotment = $allotment;
                $subscheme->expenditure = $expenditure;
                $subscheme->remark = $risk_remarks;
            }
        }

        return response()->json([
            'status' => 200,
            'schemes' => $schemes,

        ]);
    }

    public function report_subscheme($id)
    {
        $user = Auth::user();
        $subscheme = MigSubScheme::find($id);

        if ($user->role == 'admin' || $user->division_id == $subscheme->division_id) {
            $outputs = DB::table('mig_outputs')->where('subscheme_id', $id)->orderBy('id')->get();
            if (sizeof($outputs) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Found'
                ]);
            }
            $outputindicators = DB::table('mig_output_indicators')->where('subscheme_id', $id)->orderBy('id')->get();
            if (sizeof($outputindicators) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Indicators Found'
                ]);
            }
            $outcomes = DB::table('mig_outcomes')->where('subscheme_id', $id)->orderBy('id')->get();
            if (sizeof($outcomes) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Outcome Found'
                ]);
            }
            $outcomeindicators = DB::table('mig_outcome_indicators')->where('subscheme_id', $id)->orderBy('id')->get();
            if (sizeof($outcomeindicators) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Indicators Found'
                ]);
            }
            $target_outputs = DB::table('mig_output_indicator_targets')->where('subscheme_id', $id)->orderBy('id')->get();
            if (sizeof($target_outputs) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Indicator Targets Found'
                ]);
            }
            $target_outcomes = DB::table('mig_outcome_indicator_targets')->where('subscheme_id', $id)->orderBy('id')->get();
            if (sizeof($target_outcomes) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Outcome Indicator Targets Found'
                ]);
            }

            $achievement_outputs = [];
            $achievement_outcomes = [];

            foreach ($outputs as $output) {
                $output->outputindicatorscount = DB::table('mig_output_indicators')->where('output_id', $output->id)->count();
            }
            foreach ($outcomes as $outcome) {
                $outcome->outcomeindicatorscount = DB::table('mig_outcome_indicators')->where('outcome_id', $outcome->id)->count();
            }

            $genders = DB::table('genders AS g')
                ->select('g.name')
                ->join('mig_sub_scheme_genders AS sg', 'sg.gender_id', '=', 'g.id')
                ->where('sg.subscheme_id', $id)->get();

            $socials = DB::table('socials AS s')
                ->select('s.name')
                ->join('mig_sub_scheme_socials AS ss', 'ss.social_id', '=', 's.id')
                ->where('ss.subscheme_id', $id)->get();

            //$financial_outlay = MigFinancialOutlay::select('state_share', 'center_share')->where('subscheme_id', $id)->get();
            $response = Http::acceptJson()->get('https://fantastic-bat-tux.cyclic.app/getstatecentersharebysubschemecode/' . $subscheme->subscheme_code . '/2023-24');
            $api_subscheme = $response->json();

            $sdg = DB::table('sdg_goals AS s')
                ->select('s.goal_name', 's.goal_number')
                ->join('mig_sub_scheme_sdgs AS ss', 'ss.sdg_id', '=', 's.id')
                ->where('ss.subscheme_id', $id)->get();

            $risk_remarks =  "";

            return response()->json([
                'status' => 200,
                'outputs' => $outputs,
                'outcomes' => $outcomes,
                'outputindicators' => $outputindicators,
                'outcomeindicators' => $outcomeindicators,
                'target_outputs' => $target_outputs,
                'target_outcomes' => $target_outcomes,
                'achievement_outputs' => $achievement_outputs,
                'achievement_outcomes' => $achievement_outcomes,
                'genders' => $genders,
                'socials' => $socials,
                //'financial_outlay' => $financial_outlay[0]->state_share + $financial_outlay[0]->center_share,
                'financial_outlay' => $api_subscheme['state_share'] + $api_subscheme['center_share'],
                'sdg' => $sdg,
                'remark' => $risk_remarks,
                'subscheme' => $subscheme
            ]);
        } else {
            return response()->json(['error' => 'Unauthorized.'], 403);
        }
    }

    public function update_risk_remark(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'risk_remarks' => 'max:2000',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
            ]);
        }
        $subscheme = MigSubScheme::find($id);
        if (is_null($subscheme)) {
            return response()->json([
                'status' => 404,
                'message' => 'SubScheme not found.'
            ]);
        }
        try {
            $subscheme->risk_remarks = $request->risk_remarks;
            $subscheme->initial_remarks = $request->risk_remarks;
            $subscheme->save();
            $risk_remarks = MigSubScheme::select('initial_remarks')->where('id', $id)->get();
            return response()->json([
                'status' => 200,
                'message' => 'success',
                'risk_remark' => $risk_remarks
            ]);
        } catch (Exception $e) {
            return response()->json([
                'status' => 400,
                'message' => $e
            ]);
        }
    }

    public function fetch_risk_remark($id)
    {
        try {
            $risk_remarks = MigSubScheme::select('initial_remarks')->where('id', $id)->get();
            return response()->json([
                'status' => 200,
                'message' => 'success',
                'risk_remark' => $risk_remarks
            ]);
        } catch (Exception $e) {
            return response()->json([
                'status' => 400,
                'message' => $e
            ]);
        }
    }
}
