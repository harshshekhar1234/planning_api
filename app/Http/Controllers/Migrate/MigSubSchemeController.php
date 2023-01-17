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
use App\Models\Division;
use App\Models\MigScheme;

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
        $division = Division::find($id);
        $demand_no = $division->demand_no;
        $demand_no = sprintf("%02d", $demand_no);
        $response = Http::acceptJson()->get('http://jkuberuat.jharkhand.gov.in/outcomebudget/OutcomeScheme.svc/getOutcomeBudgetOutlay?demand=' . $demand_no . '&finyear=2223&statecode=&central=');
        $api_schemes = json_decode($response);
        $api_schemes = json_decode($api_schemes->getOutcomeBudgetOutlayResult);
        if($api_schemes == null)
        {
            return response()->json([
                'status' => 404,
                'error' => "Connection Error",
            ]);
        }
        $data = [];
        $map = collect($api_schemes)->map(function ($items) use ($data) {
            $data['state_name'] = ($items->STATESCHEMENAME == null) ? $items->STATESCHEMECODE : $items->STATESCHEMENAME;
            $data['center_name'] = ($items->GOISCHEMENAME == null) ? $items->CPSMSSCHEME_CODE : $items->GOISCHEMENAME;
            $data['state_code'] = $items->STATESCHEMECODE;
            $data['center_code'] = $items->CPSMSSCHEME_CODE;
            $data['subscheme_code'] = $items->SUB_SCHEMECODE;
            $data['name'] = $items->SUB_SCHEMEENAME;
            $data['state_share'] = $items->S_BE / 100000;
            $data['center_share'] = $items->C_BE / 100000;
            return $data;
        });

        $api_schemes_unique = collect($map)->unique(function ($item) {
            return $item['state_code'] . $item['center_code'];
        });

        $api_schemes_unique = $api_schemes_unique->map(function ($item, $key) use ($map) {
            $item = collect($item)->forget('subscheme_code')->forget('name');
            $item['state_share'] = 0;
            $item['center_share'] = 0;

            $subschemes = collect($map)->filter(function ($value, $skey) use ($item) {
                return ($value['state_code'] == $item['state_code'] &&  $value['center_code'] == $item['center_code']);
            });

            $subschemes = collect($subschemes)->map(function ($sitem, $key) use ($item) {
                $sitem = collect($sitem)->forget('state_name')->forget('center_name')->forget('state_code')->forget('center_code');
                $item['state_share'] += $sitem['state_share'];
                $item['center_share'] += $sitem['center_share'];
                return $sitem;
            });

            $item['subschemes'] = $subschemes->values()->all();

            return $item;
        });

        $local_schemes = MigScheme::where('division_id', $id)->get();
        $local_subschemes = MigSubScheme::where('division_id', $id)->get();

        $migrated_schemes = collect($api_schemes_unique)->filter(function ($value, $key) use ($local_schemes) {
            return $local_schemes->contains(function ($lvalue, $lkey) use ($value, $key) {
                return ($lvalue['state_code'] == $value['state_code'] &&  $lvalue['center_code'] == $value['center_code']);
            });
        });

        $migrated_schemes = $migrated_schemes->map(function ($item, $key) use ($local_schemes, $local_subschemes) {
            $scheme = $local_schemes->where('state_code', $item['state_code'])->where('center_code', $item['center_code'])->first();
            $item['id'] = $scheme->id;
            $item['department_id'] = $scheme->department_id;
            $item['division_id'] = $scheme->division_id;
            $item['financial_outlay'] = $item['state_share'] + $item['center_share'];

            $item['subschemes'] = collect($item['subschemes'])->map(function ($sitem, $skey) use ($local_schemes, $local_subschemes, $scheme) {
                $subscheme_exists = $local_subschemes->where('subscheme_code', $sitem['subscheme_code'])->first();
                if ($subscheme_exists) {
                    $sitem['isSubscheme'] = true;
                    $sitem['id'] = $subscheme_exists->id;
                    $sitem['scheme_id'] = $subscheme_exists->scheme_id;
                    $sitem['division_id'] = $subscheme_exists->division_id;
                    $sitem['department_id'] = $subscheme_exists->department_id;
                    $sitem['risk_remarks'] = $subscheme_exists->risk_remarks;
                    $sitem['initial_remarks'] = $subscheme_exists->initial_remarks;
                    $sitem['status'] = 200;
                    $sitem['achievement_outputs'] = [];
                    $sitem['achievement_outcomes'] = [];
                    $sitem['sanction'] = 0;
                    $sitem['allotment'] = 0;
                    $sitem['expenditure'] = 0;
                    $sitem['remark'] = 0;
                    $sitem['financial_outlay'] = $sitem['state_share'] + $sitem['center_share'];

                    $outputs = DB::table('mig_outputs')->where('subscheme_id', $subscheme_exists->id)->orderBy('id')->get();
                    if (sizeof($outputs) == 0) {
                        return response()->json([
                            'status' => 404,
                            'message' => 'No Output Found'
                        ]);
                    }
                    $outputindicators = DB::table('mig_output_indicators')->where('subscheme_id', $subscheme_exists->id)->orderBy('id')->get();
                    if (sizeof($outputindicators) == 0) {
                        return response()->json([
                            'status' => 404,
                            'message' => 'No Output Indicators Found'
                        ]);
                    }
                    $outcomes = DB::table('mig_outcomes')->where('subscheme_id', $subscheme_exists->id)->orderBy('id')->get();
                    if (sizeof($outcomes) == 0) {
                        return response()->json([
                            'status' => 404,
                            'message' => 'No Outcome Found'
                        ]);
                    }
                    $outcomeindicators = DB::table('mig_outcome_indicators')->where('subscheme_id', $subscheme_exists->id)->orderBy('id')->get();
                    if (sizeof($outcomeindicators) == 0) {
                        return response()->json([
                            'status' => 404,
                            'message' => 'No Output Indicators Found'
                        ]);
                    }
                    $target_outputs = DB::table('mig_output_indicator_targets')->where('subscheme_id', $subscheme_exists->id)->orderBy('id')->get();
                    if (sizeof($target_outputs) == 0) {
                        return response()->json([
                            'status' => 404,
                            'message' => 'No Output Indicator Targets Found'
                        ]);
                    }
                    $target_outcomes = DB::table('mig_outcome_indicator_targets')->where('subscheme_id', $subscheme_exists->id)->orderBy('id')->get();
                    if (sizeof($target_outcomes) == 0) {
                        return response()->json([
                            'status' => 404,
                            'message' => 'No Outcome Indicator Targets Found'
                        ]);
                    }

                    foreach ($outputs as $output) {
                        $output->outputindicatorscount = DB::table('mig_output_indicators')->where('output_id', $output->id)->count();
                    }
                    foreach ($outcomes as $outcome) {
                        $outcome->outcomeindicatorscount = DB::table('mig_outcome_indicators')->where('outcome_id', $outcome->id)->count();
                    }

                    $genders = DB::table('genders AS g')
                        ->select('g.name')
                        ->join('mig_sub_scheme_genders AS sg', 'sg.gender_id', '=', 'g.id')
                        ->where('sg.subscheme_id', $subscheme_exists->id)->get();

                    $socials = DB::table('socials AS s')
                        ->select('s.name')
                        ->join('mig_sub_scheme_socials AS ss', 'ss.social_id', '=', 's.id')
                        ->where('ss.subscheme_id', $subscheme_exists->id)->get();

                    $sdg = DB::table('sdg_goals AS s')
                        ->select('s.goal_name', 's.goal_number')
                        ->join('mig_sub_scheme_sdgs AS ss', 'ss.sdg_id', '=', 's.id')
                        ->where('ss.subscheme_id', $subscheme_exists->id)->get();

                    $sitem['outputs'] = $outputs;
                    $sitem['outcomes'] = $outcomes;
                    $sitem['outputindicators'] = $outputindicators;
                    $sitem['outcomeindicators'] = $outcomeindicators;
                    $sitem['target_outputs'] = $target_outputs;
                    $sitem['target_outcomes'] = $target_outcomes;
                    $sitem['genders'] = $genders;
                    $sitem['socials'] = $socials;
                    $sitem['sdg'] = $sdg;

                    $sub_scheme = DB::table('mig_sub_schemes AS ss')
                        ->select(
                            'ss.id',
                            'ss.subscheme_code',
                            'ss.division_id',
                            'ss.department_id',
                            'ss.risk_remarks',
                            'ss.initial_remarks',
                            'dept.id as dept_id',
                            'dept.name as dept_name',
                            'div.id as div_id',
                            'div.name as div_name',
                            'div.demand_no'
                        )
                        ->join('departments AS dept', 'dept.id', '=', 'ss.department_id')
                        ->join('divisions AS div', 'div.id', '=', 'ss.division_id')
                        ->where('ss.id', $subscheme_exists->id)->get();

                    $sitem['sub_scheme'] = $sub_scheme;
                } else {
                    $sub_scheme = DB::table('mig_schemes AS ss')
                        ->select(
                            'ss.id',
                            'ss.division_id',
                            'ss.department_id',
                            'dept.id as dept_id',
                            'dept.name as dept_name',
                            'div.id as div_id',
                            'div.name as div_name',
                            'div.demand_no'
                        )
                        ->join('departments AS dept', 'dept.id', '=', 'ss.department_id')
                        ->join('divisions AS div', 'div.id', '=', 'ss.division_id')
                        ->where('ss.id', $scheme->id)->get();

                    $sitem['sub_scheme'] = $sub_scheme;
                    $sitem['isSubscheme'] = false;
                }
                return $sitem;
            });
            return $item;
        });

        return response()->json([
            'status' => 200,
            'schemes' => $migrated_schemes->values()->all(),

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
            // $response = Http::acceptJson()->get('https://fantastic-bat-tux.cyclic.app/getstatecentersharebysubschemecode/' . $subscheme->subscheme_code . '/2023-24');
            // $api_subscheme = $response->json();
            $response = Http::acceptJson()->get('http://jkuberuat.jharkhand.gov.in/outcomebudget/OutcomeScheme.svc/getSubschemeWiseOutcomeBudgetOutlay?demand=&finyear=2223&subscheme=' . $subscheme->subscheme_code);
            $api_subscheme = json_decode($response);
            $api_subscheme = json_decode($api_subscheme->getSubschemeWiseOutcomeBudgetOutlayResult);
            if($api_subscheme == null)
            {
                return response()->json([
                    'status' => 404,
                    'error' => "Connection Error",
                ]);
            }
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
                //'financial_outlay' => $api_subscheme['state_share'] + $api_subscheme['center_share'],
                'financial_outlay' => ($api_subscheme[0]->S_BE + $api_subscheme[0]->C_BE) / 100000,
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
