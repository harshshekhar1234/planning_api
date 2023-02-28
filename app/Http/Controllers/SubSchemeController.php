<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\Models\SubScheme;
use App\Models\FinancialOutlay;
use App\Models\SubSchemeExpenditure;
use App\Models\SubschemeSdg;
use App\Models\RiskRemark;
use App\Models\VerifiedReport;
use App\Models\AorSubSchemeExpenditure;
use App\Models\AorVerifiedReport;
use App\Models\AorRiskRemark;
use App\Models\Outcome;
use App\Models\OutcomeIndicator;
use App\Models\Output;
use App\Models\OutputIndicator;
use App\Models\TargetOutcome;
use App\Models\TargetOutput;
use App\Models\SubschemeSocial;
use App\Models\SubschemeGender;
use Exception;


class SubSchemeController extends Controller
{
    public function index($id, $fin_year)
    {
        $subschemes = DB::table('sub_schemes')->where(['scheme_id' => $id, 'fin_year' => $fin_year])->orderBy('id')->get();
        return response()->json($subschemes, 200);
    }

    public function indexdept($id)
    {
        $subschemes = DB::table('sub_schemes')->select('id', 'name', 'subscheme_code')->where('scheme_id', $id)->orderBy('id')->get();
        return response()->json($subschemes, 200);
    }

    public function all_subscheme()
    {
        $subschemes = SubScheme::all()->sortBy('id');
        return response()->json($subschemes, 200);
    }
    public function fill_achievements($id)
    {
        $outputs = DB::table('outputs')->where('subscheme_id', $id)->orderBy('id')->get();
        if (sizeof($outputs) == 0) {
            return response()->json([
                'status' => 404,
                'message' => 'No Output Found'
            ]);
        }
        // echo "<pre>";
        // print_r($outputs);
        // exit;
        foreach ($outputs as $output) {
            $output->outputindicators = DB::table('output_indicators')->where('output_id', $output->id)->orderBy('id')->get();
            if (sizeof($output->outputindicators) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Indicator Found for Output'
                ]);
            }
            foreach ($output->outputindicators as $outputindicator) {
                $outputindicator->target_outputs = DB::table('target_outputs')->where('outputindicator_id', $outputindicator->id)->orderBy('id')->get();
                if (sizeof($outputindicator->target_outputs) == 0) {
                    return response()->json([
                        'status' => 404,
                        'message' => 'Target Not Set for Output Indicator'
                    ]);
                }
            }
        }

        $outcomes = DB::table('outcomes')->where('subscheme_id', $id)->orderBy('id')->get();
        if (sizeof($outcomes) == 0) {
            return response()->json([
                'status' => 404,
                'message' => 'No Outcome Found'
            ]);
        }
        foreach ($outcomes as $outcome) {
            $outcome->outcomeindicators = DB::table('outcome_indicators')->where('outcome_id', $outcome->id)->orderBy('id')->get();
            if (sizeof($outcome->outcomeindicators) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Outcome Indicator Found for Outcome'
                ]);
            }
            foreach ($outcome->outcomeindicators as $outcomeindicator) {
                $outcomeindicator->target_outcomes = DB::table('target_outcomes')->where('outcomeindicator_id', $outcomeindicator->id)->orderBy('id')->get();
                if (sizeof($outcomeindicator->target_outcomes) == 0) {
                    return response()->json([
                        'status' => 404,
                        'message' => 'Target Not Set for Outcome Indicator'
                    ]);
                }
            }
        }

        return response()->json([
            'status' => 200,
            'outputs' => $outputs,
            'outcomes' => $outcomes
        ]);

        //return response()->json($outputs, 200);
    }

    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'subscheme_code' => 'required|numeric',
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

        $subscheme = new SubScheme;
        $subscheme->name = $request->name;
        $subscheme->subscheme_code = $request->subscheme_code;
        $subscheme->scheme_id = $request->scheme_id;
        $subscheme->division_id = $request->division_id;
        $subscheme->department_id = $request->department_id;
        $subscheme->save();

        return response()->json([
            'status' => 200,
            'message' => 'success'
        ]);
    }

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

        $subscheme = SubScheme::find($id);
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

    public function report_subscheme($id)
    {
        $user = Auth::user();
        $subscheme = SubScheme::find($id);

        $rid = VerifiedReport::where('division_id', $subscheme->division_id)
            ->where('verified_btn_flag', true)
            ->pluck('id')->toArray();
        //->get();
        // if ($rid) {
        //     $rid = $rid->id;
        // }
        if ($user->role == 'admin' || $user->division_id == $subscheme->division_id) {
            $outputs = DB::table('outputs')->where('subscheme_id', $id)->orderBy('id')->get();
            if (sizeof($outputs) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Found'
                ]);
            }
            $outputindicators = DB::table('output_indicators')->where('subscheme_id', $id)->orderBy('id')->get();
            if (sizeof($outputindicators) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Indicators Found'
                ]);
            }
            $outcomes = DB::table('outcomes')->where('subscheme_id', $id)->orderBy('id')->get();
            if (sizeof($outcomes) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Outcome Found'
                ]);
            }
            $outcomeindicators = DB::table('outcome_indicators')->where('subscheme_id', $id)->orderBy('id')->get();
            if (sizeof($outcomeindicators) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Indicators Found'
                ]);
            }
            $target_outputs = DB::table('target_outputs')->where('subscheme_id', $id)->orderBy('id')->get();
            if (sizeof($target_outputs) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Indicators Found'
                ]);
            }
            $target_outcomes = DB::table('target_outcomes')->where('subscheme_id', $id)->orderBy('id')->get();
            if (sizeof($target_outcomes) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Indicators Found'
                ]);
            }

            //Achievement on the basis of cumulative sum
            $achievement_outputs = DB::table('achievement_outputs')
                ->select([
                    'outputindicator_id',
                    DB::raw('sum(value) as value'),
                    DB::raw('max(time) as updated_at'),
                ])
                ->where('subscheme_id', $id)
                ->where('verified_status', 'A')
                ->whereIn('report_id', $rid)
                ->groupBy('outputindicator_id')->get();

            $achievement_outcomes = DB::table('achievement_outcomes')
                ->select([
                    'outcomeindicator_id',
                    DB::raw('sum(value) as value'),
                    DB::raw('max(time) as updated_at'),
                ])
                ->where('subscheme_id', $id)
                ->where('verified_status', 'A')
                // ->whereNotNull('report_id')
                ->whereIn('report_id', $rid)
                ->groupBy('outcomeindicator_id')->get();

            /*
            //On the basis of latest value
            $achievement_outputs = DB::table('achievement_outputs')
                ->select('outputindicator_id', 'value', 'updated_at')
                ->where('subscheme_id', $id)
                ->where('verified_status', 'A')
                ->where('report_id', $rid)
                ->latest('updated_at')
                ->get()
                ->unique('outputindicator_id');
            $achievement_outputs = $achievement_outputs->values();

            $achievement_outcomes = DB::table('achievement_outcomes')
                ->select('outcomeindicator_id', 'value', 'updated_at')
                ->where('subscheme_id', $id)
                ->where('verified_status', 'A')
                ->where('report_id', $rid)
                ->latest('updated_at')
                ->get()
                ->unique('outcomeindicator_id');
            $achievement_outcomes = $achievement_outcomes->values();
            */
            foreach ($outputs as $output) {
                $output->outputindicatorscount = DB::table('output_indicators')->where('output_id', $output->id)->count();
            }
            foreach ($outcomes as $outcome) {
                $outcome->outcomeindicatorscount = DB::table('outcome_indicators')->where('outcome_id', $outcome->id)->count();
            }

            $genders = DB::table('genders AS g')
                ->select('g.name')
                ->join('subscheme_gender AS sg', 'sg.gender_id', '=', 'g.id')
                ->where('sg.subscheme_id', $id)->get();

            $socials = DB::table('socials AS s')
                ->select('s.name')
                ->join('subscheme_social AS ss', 'ss.social_id', '=', 's.id')
                ->where('ss.subscheme_id', $id)->get();

            $financial_outlay = FinancialOutlay::select('state_share', 'center_share')->where('subscheme_id', $id)->get();

            $sdg = DB::table('sdg_goals AS s')
                ->select('s.goal_name', 's.goal_number')
                ->join('subscheme_sdgs AS ss', 'ss.sdg_id', '=', 's.id')
                ->where('ss.subscheme_id', $id)->get();

            $risk_remarks = RiskRemark::where('subscheme_id', $subscheme->id)
                ->latest('updated_at')
                ->first();
            if ($risk_remarks) {
                $risk_remarks = $risk_remarks->remarks;
            } else {
                $risk_remarks = "";
            }

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
                'financial_outlay' => $financial_outlay[0]->state_share + $financial_outlay[0]->center_share,
                'sdg' => $sdg,
                'remark' => $risk_remarks,
                'subscheme' => $subscheme
            ]);
        } else {
            return response()->json(['error' => 'Unauthorized.'], 403);
        }
    }

    public function status_update()
    {
        $divisions = DB::table('divisions')
            ->select('divisions.*', 'd.name as dept_name')
            ->join('departments AS d', 'd.id', '=', 'divisions.department_id')
            ->orderBy('dept_name', 'asc')
            ->get();
        foreach ($divisions as $division) {
            $division->quater = DB::table('verified_reports')->where('division_id', $division->id)->where('verified_btn_flag', true)->latest('created_at')->first();
            if (!$division->quater) {
                $division->quater = '0';
            }
            $division->output_indicator = 0;
            $division->output_updated = 0;
            $division->outcome_indicator = 0;
            $division->outcome_updated = 0;
            $subschemes = DB::table('sub_schemes')->where('division_id', $division->id)->get();
            foreach ($subschemes as $subscheme) {
                $outputs = DB::table('outputs')->where('subscheme_id', $subscheme->id)->get();
                foreach ($outputs as $output) {
                    $outputindicators = DB::table('output_indicators')->where('output_id', $output->id)->get();
                    foreach ($outputindicators as $outputindicator) {
                        $division->output_indicator = $division->output_indicator + 1;
                        /* 
                        //Achievement on the basis of cumulative sum
                        $achievement_outputs = DB::table('achievement_outputs')->where('outputindicator_id', $outputindicator->id)->sum('value');
                        if ($achievement_outputs != 0) {
                            $division->output_updated = $division->output_updated + 1;
                        }
                        */
                        //On the basis of latest value
                        if ($subscheme->submitted_status == 'S') {
                            $division->output_updated = $division->output_updated + 1;
                        } else {
                            $achievement_outputs = DB::table('achievement_outputs')
                                ->where('outputindicator_id', $outputindicator->id)
                                ->where('submitted_status', '=', 'N')
                                ->latest('updated_at')
                                ->first();
                            if ($achievement_outputs) {
                                $division->output_updated = $division->output_updated + 1;
                            }
                        }
                    }
                }
                $outcomes = DB::table('outcomes')->where('subscheme_id', $subscheme->id)->get();
                foreach ($outcomes as $outcome) {
                    $outcomeindicators = DB::table('outcome_indicators')->where('outcome_id', $outcome->id)->get();
                    foreach ($outcomeindicators as $outcomeindicator) {
                        $division->outcome_indicator = $division->outcome_indicator + 1;
                        /* 
                        //Achievement on the basis of cumulative sum
                        $achievement_outcomes = DB::table('achievement_outcomes')->where('outcomeindicator_id', $outcomeindicator->id)->sum('value');
                        if ($achievement_outcomes != 0) {
                            $division->outcome_updated = $division->outcome_updated + 1;
                        }
                        */
                        //On the basis of latest value
                        if ($subscheme->submitted_status == 'S') {
                            $division->outcome_updated = $division->outcome_updated + 1;
                        } else {
                            $achievement_outcomes = DB::table('achievement_outcomes')
                                ->where('outcomeindicator_id', $outcomeindicator->id)
                                ->where('submitted_status', '=', 'N')
                                ->latest('updated_at')
                                ->first();
                            if ($achievement_outcomes) {
                                $division->outcome_updated = $division->outcome_updated + 1;
                            }
                        }
                    }
                }
            }
        }
        return response()->json($divisions, 200);
        //return view('status-update')->with(array('divisions' => $divisions));
    }

    public function subscheme_header($id)
    {
        $sub_scheme = DB::table('sub_schemes AS ss')
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
            ->join('schemes AS s', 's.id', '=', 'ss.scheme_id')
            ->join('departments AS dept', 'dept.id', '=', 'ss.department_id')
            ->join('divisions AS div', 'div.id', '=', 'ss.division_id')
            ->where('ss.id', $id)->get();
        /*
        $rid = VerifiedReport::select('id')->where('division_id', $sub_scheme[0]->div_id)
            ->where('verified_btn_flag', true)
            ->latest('updated_at')
            ->first();
        if ($rid) {
            $rid = $rid->id;
        }
        */
        $rid = VerifiedReport::where('division_id', $sub_scheme[0]->div_id)
            ->where('verified_btn_flag', true)
            ->pluck('id')->toArray();

        //On the basis of cumulative sum
        $SubschemeExpenditure = SubSchemeExpenditure::where('subscheme_id', $id)
            ->where('verified_status', 'A')
            ->whereIn('report_id', $rid)
            //->whereNotNull('report_id')
            ->get();
        $sanction = $SubschemeExpenditure->sum('sanction');
        $allotment = $SubschemeExpenditure->sum('allotment');
        $expenditure = $SubschemeExpenditure->sum('expenditure');
        /*
        //On the basis of latest value
        $SubschemeExpenditure = SubSchemeExpenditure::where('subscheme_id', $id)
            ->where('verified_status', 'A')
            ->where('report_id', $rid)
            ->latest('updated_at')
            ->first();
        if ($SubschemeExpenditure) {
            $sanction = $SubschemeExpenditure->sanction;
            $allotment = $SubschemeExpenditure->allotment;
            $expenditure = $SubschemeExpenditure->expenditure;
        } else {
            $sanction = 0;
            $allotment = 0;
            $expenditure = 0;
        }
        */
        return response()->json([
            'status' => 200,
            'sub_scheme' => $sub_scheme,
            'sanction' => $sanction,
            'allotment' => $allotment,
            'expenditure' => $expenditure
        ]);
    }

    public function div_status_update($id)
    {
        $subschemes = DB::table('sub_schemes')->where('division_id', $id)->get();
        foreach ($subschemes as $subscheme) {
            $subscheme->output_indicator = 0;
            $subscheme->output_updated = 0;
            $subscheme->outcome_indicator = 0;
            $subscheme->outcome_updated = 0;

            $outputs = DB::table('outputs')->where('subscheme_id', $subscheme->id)->get();
            foreach ($outputs as $output) {
                $outputindicators = DB::table('output_indicators')->where('output_id', $output->id)->get();
                foreach ($outputindicators as $outputindicator) {
                    $subscheme->output_indicator = $subscheme->output_indicator + 1;
                    /*
                    //On the basis of cumulative sum
                    $achievement_outputs = DB::table('achievement_outputs')->where('outputindicator_id', $outputindicator->id)->sum('value');
                    if ($achievement_outputs != 0) {
                        $subscheme->output_updated = $subscheme->output_updated + 1;
                    }
                    */
                    //On the basis of latest value
                    if ($subscheme->submitted_status == 'S') {
                        $subscheme->output_updated = $subscheme->output_updated + 1;
                    } else {
                        $achievement_outputs = DB::table('achievement_outputs')
                            ->where('outputindicator_id', $outputindicator->id)
                            ->where('submitted_status', '=', 'N')
                            ->latest('updated_at')
                            ->first();
                        if ($achievement_outputs) {
                            $subscheme->output_updated = $subscheme->output_updated + 1;
                        }
                    }
                }
            }
            $outcomes = DB::table('outcomes')->where('subscheme_id', $subscheme->id)->get();
            foreach ($outcomes as $outcome) {
                $outcomeindicators = DB::table('outcome_indicators')->where('outcome_id', $outcome->id)->get();
                foreach ($outcomeindicators as $outcomeindicator) {
                    $subscheme->outcome_indicator = $subscheme->outcome_indicator + 1;
                    /*
                    //On the basis of cumulative sum
                    $achievement_outcomes = DB::table('achievement_outcomes')->where('outcomeindicator_id', $outcomeindicator->id)->sum('value');
                    if ($achievement_outcomes != 0) {
                        $subscheme->outcome_updated = $subscheme->outcome_updated + 1;
                    }
                    */
                    //On the basis of latest value
                    if ($subscheme->submitted_status == 'S') {
                        $subscheme->outcome_updated = $subscheme->outcome_updated + 1;
                    } else {
                        $achievement_outcomes = DB::table('achievement_outcomes')
                            ->where('outcomeindicator_id', $outcomeindicator->id)
                            ->where('submitted_status', '=', 'N')
                            ->latest('updated_at')
                            ->first();
                        if ($achievement_outcomes) {
                            $subscheme->outcome_updated = $subscheme->outcome_updated + 1;
                        }
                    }
                }
            }
        }

        return response()->json($subschemes, 200);
        //return view('status-update')->with(array('divisions' => $divisions));
    }

    public function report_subscheme_division($id)
    {
        /*
        $rid = VerifiedReport::select('id')->where('division_id', $id)
            ->where('verified_btn_flag', true)
            ->latest('updated_at')
            ->first();
        if ($rid) {
            $rid = $rid->id;
        }
        */
        $rid = VerifiedReport::where('division_id', $id)
            ->where('verified_btn_flag', true)
            ->pluck('id')->toArray();

        $subschemes = DB::table('sub_schemes')->where('division_id', $id)->orderBy('id')->get();

        foreach ($subschemes as $subscheme) {
            $sub_scheme = DB::table('sub_schemes AS ss')
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
                ->join('schemes AS s', 's.id', '=', 'ss.scheme_id')
                ->join('departments AS dept', 'dept.id', '=', 'ss.department_id')
                ->join('divisions AS div', 'div.id', '=', 'ss.division_id')
                ->where('ss.id', $subscheme->id)->get();

            //On the basis of cumulative sum
            //$SubschemeExpenditure = SubSchemeExpenditure::where('subscheme_id', $subscheme->id)->get();
            $SubschemeExpenditure = SubSchemeExpenditure::where('subscheme_id', $subscheme->id)
                ->where('verified_status', 'A')
                //->whereNotNull('report_id')
                ->whereIn('report_id', $rid)
                ->get();
            $sanction = $SubschemeExpenditure->sum('sanction');
            $allotment = $SubschemeExpenditure->sum('allotment');
            $expenditure = $SubschemeExpenditure->sum('expenditure');
            /*
            //On the basis of latest value
            $subschemeExpenditure = SubSchemeExpenditure::where('subscheme_id', $subscheme->id)
                ->where('verified_status', 'A')
                ->where('report_id', $rid)
                ->first();
            if ($subschemeExpenditure) {
                $sanction = $subschemeExpenditure['sanction'];
                $allotment = $subschemeExpenditure['allotment'];
                $expenditure = $subschemeExpenditure['expenditure'];
            } else {
                $sanction = $allotment = $expenditure = 0;
            }
            */
            $outputs = DB::table('outputs')->where('subscheme_id', $subscheme->id)->orderBy('id')->get();
            if (sizeof($outputs) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Found'
                ]);
            }
            $outputindicators = DB::table('output_indicators')->where('subscheme_id', $subscheme->id)->orderBy('id')->get();
            if (sizeof($outputindicators) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Indicators Found'
                ]);
            }
            $outcomes = DB::table('outcomes')->where('subscheme_id', $subscheme->id)->orderBy('id')->get();
            if (sizeof($outcomes) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Outcome Found'
                ]);
            }
            $outcomeindicators = DB::table('outcome_indicators')->where('subscheme_id', $subscheme->id)->orderBy('id')->get();
            if (sizeof($outcomeindicators) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Indicators Found'
                ]);
            }
            $target_outputs = DB::table('target_outputs')->where('subscheme_id', $subscheme->id)->orderBy('id')->get();
            if (sizeof($target_outputs) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Indicators Found'
                ]);
            }
            $target_outcomes = DB::table('target_outcomes')->where('subscheme_id', $subscheme->id)->orderBy('id')->get();
            if (sizeof($target_outcomes) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Indicators Found'
                ]);
            }


            //On the basis of cumulative sum
            $achievement_outputs = DB::table('achievement_outputs')
                ->select([
                    'outputindicator_id',
                    DB::raw('sum(value) as value'),
                    DB::raw('max(time) as updated_at'),
                ])
                ->where('subscheme_id', $subscheme->id)
                ->where('verified_status', 'A')
                //->whereNotNull('report_id')
                ->whereIn('report_id', $rid)
                ->groupBy('outputindicator_id')->get();

            $achievement_outcomes = DB::table('achievement_outcomes')
                ->select([
                    'outcomeindicator_id',
                    DB::raw('sum(value) as value'),
                    DB::raw('max(time) as updated_at'),
                ])
                ->where('subscheme_id', $subscheme->id)
                ->where('verified_status', 'A')
                ->whereIn('report_id', $rid)
                //->whereNotNull('report_id')
                ->groupBy('outcomeindicator_id')->get();
            /*
            //On the basis of latest value
            $achievement_outputs = DB::table('achievement_outputs')
                ->select('outputindicator_id', 'value', 'updated_at')
                ->where('subscheme_id', $subscheme->id)
                ->where('verified_status', 'A')
                ->where('report_id', $rid)
                ->get()
                ->unique('outputindicator_id');
            $achievement_outputs = $achievement_outputs->values();

            $achievement_outcomes = DB::table('achievement_outcomes')
                ->select('outcomeindicator_id', 'value', 'updated_at')
                ->where('subscheme_id', $subscheme->id)
                ->where('verified_status', 'A')
                ->where('report_id', $rid)
                ->get()
                ->unique('outcomeindicator_id');
            $achievement_outcomes = $achievement_outcomes->values();
            */
            foreach ($outputs as $output) {
                $output->outputindicatorscount = DB::table('output_indicators')->where('output_id', $output->id)->count();
            }
            foreach ($outcomes as $outcome) {
                $outcome->outcomeindicatorscount = DB::table('outcome_indicators')->where('outcome_id', $outcome->id)->count();
            }

            $genders = DB::table('genders AS g')
                ->select('g.name')
                ->join('subscheme_gender AS sg', 'sg.gender_id', '=', 'g.id')
                ->where('sg.subscheme_id', $subscheme->id)->get();

            $socials = DB::table('socials AS s')
                ->select('s.name')
                ->join('subscheme_social AS ss', 'ss.social_id', '=', 's.id')
                ->where('ss.subscheme_id', $subscheme->id)->get();

            $financial_outlay = FinancialOutlay::select('state_share', 'center_share')->where('subscheme_id', $subscheme->id)->get();

            $sdg = DB::table('sdg_goals AS s')
                ->select('s.goal_name', 's.goal_number')
                ->join('subscheme_sdgs AS ss', 'ss.sdg_id', '=', 's.id')
                ->where('ss.subscheme_id', $subscheme->id)->get();

            $risk_remarks = RiskRemark::where('subscheme_id', $subscheme->id)
                ->latest('updated_at')
                //->whereNotNull('report_id')
                ->first();
            if ($risk_remarks) {
                $risk_remarks = $risk_remarks->remarks;
            } else {
                $risk_remarks = "";
            }

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

        return response()->json([
            'status' => 200,
            'subschemes' => $subschemes,

        ]);
    }

    public function report_subscheme_division_quater($id, $rid)
    {
        $subschemes = DB::table('sub_schemes')->where('division_id', $id)->orderBy('id')->get();

        foreach ($subschemes as $subscheme) {
            $sub_scheme = DB::table('sub_schemes AS ss')
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
                ->join('schemes AS s', 's.id', '=', 'ss.scheme_id')
                ->join('departments AS dept', 'dept.id', '=', 'ss.department_id')
                ->join('divisions AS div', 'div.id', '=', 'ss.division_id')
                ->where('ss.id', $subscheme->id)->get();
            /*
            //On the basis of cumulative sum
            $SubschemeExpenditure = SubSchemeExpenditure::where('subscheme_id', $subscheme->id)->get();
            $sanction = $SubschemeExpenditure->sum('sanction');
            $allotment = $SubschemeExpenditure->sum('allotment');
            $expenditure = $SubschemeExpenditure->sum('expenditure');
            */
            //On the basis of latest value
            $subschemeExpenditure = SubSchemeExpenditure::where('subscheme_id', $subscheme->id)
                ->where('report_id', $rid)
                ->first();
            if ($subschemeExpenditure) {
                $sanction = $subschemeExpenditure['sanction'];
                $allotment = $subschemeExpenditure['allotment'];
                $expenditure = $subschemeExpenditure['expenditure'];
            } else {
                $sanction = $allotment = $expenditure = 0;
            }
            $outputs = DB::table('outputs')->where('subscheme_id', $subscheme->id)->orderBy('id')->get();
            if (sizeof($outputs) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Found'
                ]);
            }
            $outputindicators = DB::table('output_indicators')->where('subscheme_id', $subscheme->id)->orderBy('id')->get();
            if (sizeof($outputindicators) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Indicators Found'
                ]);
            }
            $outcomes = DB::table('outcomes')->where('subscheme_id', $subscheme->id)->orderBy('id')->get();
            if (sizeof($outcomes) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Outcome Found'
                ]);
            }
            $outcomeindicators = DB::table('outcome_indicators')->where('subscheme_id', $subscheme->id)->orderBy('id')->get();
            if (sizeof($outcomeindicators) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Indicators Found'
                ]);
            }
            $target_outputs = DB::table('target_outputs')->where('subscheme_id', $subscheme->id)->orderBy('id')->get();
            if (sizeof($target_outputs) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Indicators Found'
                ]);
            }
            $target_outcomes = DB::table('target_outcomes')->where('subscheme_id', $subscheme->id)->orderBy('id')->get();
            if (sizeof($target_outcomes) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Indicators Found'
                ]);
            }

            /*
            //On the basis of cumulative sum
            $achievement_outputs = DB::table('achievement_outputs')
                ->select([
                    'outputindicator_id',
                    DB::raw('sum(value) as value'),
                    DB::raw('max(time) as updated_at'),
                ])
                ->where('subscheme_id', $subscheme->id)->groupBy('outputindicator_id')->get();

            $achievement_outcomes = DB::table('achievement_outcomes')
                ->select([
                    'outcomeindicator_id',
                    DB::raw('sum(value) as value'),
                    DB::raw('max(time) as updated_at'),
                ])
                ->where('subscheme_id', $subscheme->id)->groupBy('outcomeindicator_id')->get();
            */
            //On the basis of latest value
            $achievement_outputs = DB::table('achievement_outputs')
                ->select('outputindicator_id', 'value', 'updated_at')
                ->where('subscheme_id', $subscheme->id)
                ->where('report_id', $rid)
                ->get()
                ->unique('outputindicator_id');
            $achievement_outputs = $achievement_outputs->values();

            $achievement_outcomes = DB::table('achievement_outcomes')
                ->select('outcomeindicator_id', 'value', 'updated_at')
                ->where('subscheme_id', $subscheme->id)
                ->where('report_id', $rid)
                ->get()
                ->unique('outcomeindicator_id');
            $achievement_outcomes = $achievement_outcomes->values();

            foreach ($outputs as $output) {
                $output->outputindicatorscount = DB::table('output_indicators')->where('output_id', $output->id)->count();
            }
            foreach ($outcomes as $outcome) {
                $outcome->outcomeindicatorscount = DB::table('outcome_indicators')->where('outcome_id', $outcome->id)->count();
            }

            $genders = DB::table('genders AS g')
                ->select('g.name')
                ->join('subscheme_gender AS sg', 'sg.gender_id', '=', 'g.id')
                ->where('sg.subscheme_id', $subscheme->id)->get();

            $socials = DB::table('socials AS s')
                ->select('s.name')
                ->join('subscheme_social AS ss', 'ss.social_id', '=', 's.id')
                ->where('ss.subscheme_id', $subscheme->id)->get();

            $financial_outlay = FinancialOutlay::select('state_share', 'center_share')->where('subscheme_id', $subscheme->id)->get();

            $sdg = DB::table('sdg_goals AS s')
                ->select('s.goal_name', 's.goal_number')
                ->join('subscheme_sdgs AS ss', 'ss.sdg_id', '=', 's.id')
                ->where('ss.subscheme_id', $subscheme->id)->get();

            $risk_remarks = RiskRemark::where('subscheme_id', $subscheme->id)
                ->where('report_id', $rid)
                ->first();
            if ($risk_remarks) {
                $risk_remarks = $risk_remarks->remarks;
            } else {
                $risk_remarks = "";
            }

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


        return response()->json([
            'status' => 200,
            'subschemes' => $subschemes,

        ]);
    }


    public function report_for_dynmc_dashboard($fin_year)
    {
        $subschemes = DB::table('sub_schemes AS ss')
            ->join('divisions AS div', 'div.id', '=', 'ss.division_id')
            ->join('departments AS dept', 'dept.id', '=', 'ss.department_id')
            ->join('schemes AS s', 's.id', '=', 'ss.scheme_id')
            ->join('subscheme_sdgs AS ssdg', 'ssdg.subscheme_id', '=', 'ss.id')
            ->join('sdg_goals AS sdg', 'sdg.id', '=', 'ssdg.sdg_id')
            ->join('financial_outlays AS fin', 'fin.subscheme_id', '=', 'ss.id')
            ->select(
                "ss.*",
                "div.name as divName",
                "dept.name as deptName",
                "s.id as schemeId",
                "s.state_name as stateName",
                "s.state_code as stateCode",
                "s.center_name as CenterName",
                "s.center_code as Centercode",
                "ssdg.id as subscheme_sdgID",
                "sdg.id as sdgId",
                "sdg.goal_number as sdgGoalNumber",
                "sdg.goal_name as sdgGoalName",
                "fin.id as financialOutlayID",
                "fin.state_share as StateShare",
                "fin.center_share as CenterShare"
            )
            ->where('ss.fin_year', $fin_year)
            ->orderby('ss.id')->get();

        foreach ($subschemes as $subscheme) {
            $subscheme->gender = DB::table('subscheme_gender AS gender')
                ->join('genders AS g', 'g.id', '=', 'gender.gender_id')
                ->select(
                    "gender.id as subscheme_genderID",
                    "g.id as genderId",
                    "g.name as genderName"
                )
                ->where('gender.subscheme_id', $subscheme->id)->orderby('gender.id')->get();

            $subscheme->social = DB::table('subscheme_social AS social')
                ->join('socials AS soc', 'soc.id', '=', 'social.social_id')
                ->select(
                    "social.id as subscheme_socialID",
                    "soc.id as socialId",
                    "soc.name as socialName"
                )
                ->where('social.subscheme_id', $subscheme->id)->orderby('social.id')->get();

            //On the basis of cumulative sum
            $rid = VerifiedReport::where('division_id', $subscheme->division_id)
                ->where('verified_btn_flag', true)
                ->pluck('id')->toArray();

            //On the basis of cumulative sum
            $SubschemeExpenditure = SubSchemeExpenditure::where('subscheme_id', $subscheme->id)
                ->where('verified_status', 'A')
                ->whereIn('report_id', $rid)
                ->get();
            $subscheme->sanction = $SubschemeExpenditure->sum('sanction');
            $subscheme->allotment = $SubschemeExpenditure->sum('allotment');
            $subscheme->expenditure = $SubschemeExpenditure->sum('expenditure');
            // $subscheme->sanction = SubSchemeExpenditure::where('subscheme_id', $subscheme->id)->sum('sanction');
            // $subscheme->allotment = SubSchemeExpenditure::where('subscheme_id', $subscheme->id)->sum('allotment');
            // $subscheme->expenditure = SubSchemeExpenditure::where('subscheme_id', $subscheme->id)->sum('expenditure');
            /*
            //On the basis of latest value
            $subschemeExpenditure = SubSchemeExpenditure::where('subscheme_id', $subscheme->id)
                ->where('verified_status', 'A')
                ->latest('updated_at')
                ->first();
            if ($subschemeExpenditure) {
                $subscheme->sanction = $subschemeExpenditure->sanction;
                $subscheme->allotment = $subschemeExpenditure->allotment;
                $subscheme->expenditure = $subschemeExpenditure->expenditure;
            } else {
                $subscheme->sanction = 0;
                $subscheme->allotment = 0;
                $subscheme->expenditure = 0;
            }
            */
        }
        return response()->json([
            'status' => 200,
            'result' => $subschemes
        ]);
    }

    /**
     * Update the risk/remark for a subscheme.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SubScheme  $id
     * @return \Illuminate\Http\Response
     */
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
        $subscheme = SubScheme::find($id);
        if (is_null($subscheme)) {
            return response()->json([
                'status' => 404,
                'message' => 'SubScheme not found.'
            ]);
        }
        try {
            $subscheme->risk_remarks = $request->risk_remarks;
            $subscheme->save();
            $risk_remarks = SubScheme::select('risk_remarks')->where('id', $id)->get();
            return response()->json([
                'status' => 200,
                'message' => 'success',
                'risk_remark' => $risk_remarks
            ]);
        } catch (\Throwable $e) {
            return response()->json([
                'status' => 400,
                'message' => 'Something went wrong'
                //'message' => $e
            ]);
        }
    }

    /**
     * Fetch the risk/remark for a subscheme.
     *
     * @param  \App\Models\SubScheme  $id
     * @return \Illuminate\Http\Response
     */
    public function fetch_risk_remark($id)
    {
        try {
            $risk_remarks = SubScheme::select('risk_remarks')->where('id', $id)->get();
            return response()->json([
                'status' => 200,
                'message' => 'success',
                'risk_remark' => $risk_remarks
            ]);
        } catch (\Throwable $e) {
            return response()->json([
                'status' => 400,
                'message' => 'Something went wrong'
                //'message' => $e
            ]);
        }
    }

    public function verifier_report_subscheme($id)
    {
        $user = Auth::user();
        $subscheme = SubScheme::find($id);

        if ($user->role == 'admin' || $user->division_id == $subscheme->division_id) {
            $outputs = DB::table('outputs')->where('subscheme_id', $id)->orderBy('id')->get();
            if (sizeof($outputs) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Found'
                ]);
            }
            $outputindicators = DB::table('output_indicators')->where('subscheme_id', $id)->orderBy('id')->get();
            if (sizeof($outputindicators) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Indicators Found'
                ]);
            }
            $outcomes = DB::table('outcomes')->where('subscheme_id', $id)->orderBy('id')->get();
            if (sizeof($outcomes) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Outcome Found'
                ]);
            }
            $outcomeindicators = DB::table('outcome_indicators')->where('subscheme_id', $id)->orderBy('id')->get();
            if (sizeof($outcomeindicators) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Indicators Found'
                ]);
            }
            $target_outputs = DB::table('target_outputs')->where('subscheme_id', $id)->orderBy('id')->get();
            if (sizeof($target_outputs) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Indicators Found'
                ]);
            }
            $target_outcomes = DB::table('target_outcomes')->where('subscheme_id', $id)->orderBy('id')->get();
            if (sizeof($target_outcomes) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Indicators Found'
                ]);
            }
            //On the basis of latest value
            $achievement_outputs = DB::table('achievement_outputs')
                ->select('outputindicator_id', 'value', 'updated_at')
                ->where('subscheme_id', $id)
                ->latest('updated_at')
                ->get()
                ->unique('outputindicator_id');
            $achievement_outputs = $achievement_outputs->values();

            $achievement_outcomes = DB::table('achievement_outcomes')
                ->select('outcomeindicator_id', 'value', 'updated_at')
                ->where('subscheme_id', $id)
                ->latest('updated_at')
                ->get()
                ->unique('outcomeindicator_id');
            $achievement_outcomes = $achievement_outcomes->values();

            foreach ($outputs as $output) {
                $output->outputindicatorscount = DB::table('output_indicators')->where('output_id', $output->id)->count();
            }
            foreach ($outcomes as $outcome) {
                $outcome->outcomeindicatorscount = DB::table('outcome_indicators')->where('outcome_id', $outcome->id)->count();
            }

            $genders = DB::table('genders AS g')
                ->select('g.name')
                ->join('subscheme_gender AS sg', 'sg.gender_id', '=', 'g.id')
                ->where('sg.subscheme_id', $id)->get();

            $socials = DB::table('socials AS s')
                ->select('s.name')
                ->join('subscheme_social AS ss', 'ss.social_id', '=', 's.id')
                ->where('ss.subscheme_id', $id)->get();

            $financial_outlay = FinancialOutlay::select('state_share', 'center_share')->where('subscheme_id', $id)->get();

            $sdg = DB::table('sdg_goals AS s')
                ->select('s.goal_name', 's.goal_number')
                ->join('subscheme_sdgs AS ss', 'ss.sdg_id', '=', 's.id')
                ->where('ss.subscheme_id', $id)->get();

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
                'financial_outlay' => $financial_outlay[0]->state_share + $financial_outlay[0]->center_share,
                'sdg' => $sdg,
                'subscheme' => $subscheme
            ]);
        } else {
            return response()->json(['error' => 'Unauthorized.'], 403);
        }
    }

    public function verifier_subscheme_header($id)
    {
        $sub_scheme = DB::table('sub_schemes AS ss')
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
            ->join('schemes AS s', 's.id', '=', 'ss.scheme_id')
            ->join('departments AS dept', 'dept.id', '=', 'ss.department_id')
            ->join('divisions AS div', 'div.id', '=', 'ss.division_id')
            ->where('ss.id', $id)->get();

        $SubschemeExpenditure = SubSchemeExpenditure::where('subscheme_id', $id)
            ->latest('updated_at')
            ->first();
        if ($SubschemeExpenditure) {
            $sanction = $SubschemeExpenditure->sanction;
            $allotment = $SubschemeExpenditure->allotment;
            $expenditure = $SubschemeExpenditure->expenditure;
        } else {
            $sanction = 0;
            $allotment = 0;
            $expenditure = 0;
        }

        return response()->json([
            'status' => 200,
            'sub_scheme' => $sub_scheme,
            'sanction' => $sanction,
            'allotment' => $allotment,
            'expenditure' => $expenditure
        ]);
    }

    /*---------- Functions for AS ON DATE repoprts -----------*/
    public function aor_subscheme_header($id)
    {
        $sub_scheme = DB::table('sub_schemes AS ss')
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
            ->join('schemes AS s', 's.id', '=', 'ss.scheme_id')
            ->join('departments AS dept', 'dept.id', '=', 'ss.department_id')
            ->join('divisions AS div', 'div.id', '=', 'ss.division_id')
            ->where('ss.id', $id)->get();
        //On the basis of latest value
        $rid = AorVerifiedReport::select('id')->where('division_id', $sub_scheme[0]->div_id)
            ->where('verified_btn_flag', true)
            ->latest('updated_at')
            ->first();
        if ($rid) {
            $rid = $rid->id;
        }
        $SubschemeExpenditure = AorSubSchemeExpenditure::where('subscheme_id', $id)
            ->where('verified_status', 'A')
            ->where('report_id', $rid)
            ->whereNotNull('report_id')
            ->latest('updated_at')
            ->first();
        if ($SubschemeExpenditure) {
            $sanction = $SubschemeExpenditure->sanction;
            $allotment = $SubschemeExpenditure->allotment;
            $expenditure = $SubschemeExpenditure->expenditure;
        } else {
            $sanction = 0;
            $allotment = 0;
            $expenditure = 0;
        }

        return response()->json([
            'status' => 200,
            'sub_scheme' => $sub_scheme,
            'sanction' => $sanction,
            'allotment' => $allotment,
            'expenditure' => $expenditure
        ]);
    }

    /**
     * Update the as on date risk/remark for a subscheme.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SubScheme  $id
     * @return \Illuminate\Http\Response
     */
    public function aor_update_risk_remark(Request $request, $id)
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
        $subscheme = SubScheme::find($id);
        if (is_null($subscheme)) {
            return response()->json([
                'status' => 404,
                'message' => 'SubScheme not found.'
            ]);
        }
        try {
            $subscheme->aor_risk_remarks = $request->risk_remarks;
            $subscheme->save();
            $risk_remarks = SubScheme::select('aor_risk_remarks')->where('id', $id)->get();
            return response()->json([
                'status' => 200,
                'message' => 'success',
                'risk_remark' => $risk_remarks
            ]);
        } catch (\Throwable $e) {
            return response()->json([
                'status' => 400,
                'message' => 'Something went wrong'
                //'message' => $e
            ]);
        }
    }

    /**
     * Fetch the as on date risk/remark for a subscheme.
     *
     * @param  \App\Models\SubScheme  $id
     * @return \Illuminate\Http\Response
     */
    public function aor_fetch_risk_remark($id)
    {
        try {
            $risk_remarks = SubScheme::select('aor_risk_remarks')->where('id', $id)->get();
            return response()->json([
                'status' => 200,
                'message' => 'success',
                'risk_remark' => $risk_remarks
            ]);
        } catch (\Throwable $e) {
            return response()->json([
                'status' => 400,
                'message' => 'Something went wrong'
                //'message' => $e
            ]);
        }
    }

    public function aor_report_subscheme_division_quater($id, $rid)
    {
        $subschemes = DB::table('sub_schemes')->where('division_id', $id)->orderBy('id')->get();

        foreach ($subschemes as $subscheme) {
            $sub_scheme = DB::table('sub_schemes AS ss')
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
                ->join('schemes AS s', 's.id', '=', 'ss.scheme_id')
                ->join('departments AS dept', 'dept.id', '=', 'ss.department_id')
                ->join('divisions AS div', 'div.id', '=', 'ss.division_id')
                ->where('ss.id', $subscheme->id)->get();

            $subschemeExpenditure = AorSubSchemeExpenditure::where('subscheme_id', $subscheme->id)
                ->where('report_id', $rid)
                ->first();
            if ($subschemeExpenditure) {
                $sanction = $subschemeExpenditure['sanction'];
                $allotment = $subschemeExpenditure['allotment'];
                $expenditure = $subschemeExpenditure['expenditure'];
            } else {
                $sanction = $allotment = $expenditure = 0;
            }
            $outputs = DB::table('outputs')->where('subscheme_id', $subscheme->id)->orderBy('id')->get();
            if (sizeof($outputs) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Found'
                ]);
            }
            $outputindicators = DB::table('output_indicators')->where('subscheme_id', $subscheme->id)->orderBy('id')->get();
            if (sizeof($outputindicators) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Indicators Found'
                ]);
            }
            $outcomes = DB::table('outcomes')->where('subscheme_id', $subscheme->id)->orderBy('id')->get();
            if (sizeof($outcomes) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Outcome Found'
                ]);
            }
            $outcomeindicators = DB::table('outcome_indicators')->where('subscheme_id', $subscheme->id)->orderBy('id')->get();
            if (sizeof($outcomeindicators) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Indicators Found'
                ]);
            }
            $target_outputs = DB::table('target_outputs')->where('subscheme_id', $subscheme->id)->orderBy('id')->get();
            if (sizeof($target_outputs) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Indicators Found'
                ]);
            }
            $target_outcomes = DB::table('target_outcomes')->where('subscheme_id', $subscheme->id)->orderBy('id')->get();
            if (sizeof($target_outcomes) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Indicators Found'
                ]);
            }

            $achievement_outputs = DB::table('aor_achievement_outputs')
                ->select('outputindicator_id', 'value', 'updated_at')
                ->where('subscheme_id', $subscheme->id)
                ->where('report_id', $rid)
                ->get()
                ->unique('outputindicator_id');
            $achievement_outputs = $achievement_outputs->values();

            $achievement_outcomes = DB::table('aor_achievement_outcomes')
                ->select('outcomeindicator_id', 'value', 'updated_at')
                ->where('subscheme_id', $subscheme->id)
                ->where('report_id', $rid)
                ->get()
                ->unique('outcomeindicator_id');
            $achievement_outcomes = $achievement_outcomes->values();

            foreach ($outputs as $output) {
                $output->outputindicatorscount = DB::table('output_indicators')->where('output_id', $output->id)->count();
            }
            foreach ($outcomes as $outcome) {
                $outcome->outcomeindicatorscount = DB::table('outcome_indicators')->where('outcome_id', $outcome->id)->count();
            }

            $genders = DB::table('genders AS g')
                ->select('g.name')
                ->join('subscheme_gender AS sg', 'sg.gender_id', '=', 'g.id')
                ->where('sg.subscheme_id', $subscheme->id)->get();

            $socials = DB::table('socials AS s')
                ->select('s.name')
                ->join('subscheme_social AS ss', 'ss.social_id', '=', 's.id')
                ->where('ss.subscheme_id', $subscheme->id)->get();

            $financial_outlay = FinancialOutlay::select('state_share', 'center_share')->where('subscheme_id', $subscheme->id)->get();

            $sdg = DB::table('sdg_goals AS s')
                ->select('s.goal_name', 's.goal_number')
                ->join('subscheme_sdgs AS ss', 'ss.sdg_id', '=', 's.id')
                ->where('ss.subscheme_id', $subscheme->id)->get();

            $risk_remarks = AorRiskRemark::where('subscheme_id', $subscheme->id)
                ->where('report_id', $rid)
                ->first();
            if ($risk_remarks) {
                $risk_remarks = $risk_remarks->remarks;
            } else {
                $risk_remarks = "";
            }

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
        return response()->json([
            'status' => 200,
            'subschemes' => $subschemes,
        ]);
    }

    public function aor_verifier_report_subscheme($id)
    {
        $user = Auth::user();
        $subscheme = SubScheme::find($id);

        if ($user->role == 'admin' || $user->division_id == $subscheme->division_id) {
            $outputs = DB::table('outputs')->where('subscheme_id', $id)->orderBy('id')->get();
            if (sizeof($outputs) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Found'
                ]);
            }
            $outputindicators = DB::table('output_indicators')->where('subscheme_id', $id)->orderBy('id')->get();
            if (sizeof($outputindicators) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Indicators Found'
                ]);
            }
            $outcomes = DB::table('outcomes')->where('subscheme_id', $id)->orderBy('id')->get();
            if (sizeof($outcomes) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Outcome Found'
                ]);
            }
            $outcomeindicators = DB::table('outcome_indicators')->where('subscheme_id', $id)->orderBy('id')->get();
            if (sizeof($outcomeindicators) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Indicators Found'
                ]);
            }
            $target_outputs = DB::table('target_outputs')->where('subscheme_id', $id)->orderBy('id')->get();
            if (sizeof($target_outputs) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Indicators Found'
                ]);
            }
            $target_outcomes = DB::table('target_outcomes')->where('subscheme_id', $id)->orderBy('id')->get();
            if (sizeof($target_outcomes) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Indicators Found'
                ]);
            }
            //On the basis of latest value
            $achievement_outputs = DB::table('aor_achievement_outputs')
                ->select('outputindicator_id', 'value', 'updated_at')
                ->where('subscheme_id', $id)
                ->latest('updated_at')
                ->get()
                ->unique('outputindicator_id');
            $achievement_outputs = $achievement_outputs->values();

            $achievement_outcomes = DB::table('aor_achievement_outcomes')
                ->select('outcomeindicator_id', 'value', 'updated_at')
                ->where('subscheme_id', $id)
                ->latest('updated_at')
                ->get()
                ->unique('outcomeindicator_id');
            $achievement_outcomes = $achievement_outcomes->values();

            foreach ($outputs as $output) {
                $output->outputindicatorscount = DB::table('output_indicators')->where('output_id', $output->id)->count();
            }
            foreach ($outcomes as $outcome) {
                $outcome->outcomeindicatorscount = DB::table('outcome_indicators')->where('outcome_id', $outcome->id)->count();
            }

            $genders = DB::table('genders AS g')
                ->select('g.name')
                ->join('subscheme_gender AS sg', 'sg.gender_id', '=', 'g.id')
                ->where('sg.subscheme_id', $id)->get();

            $socials = DB::table('socials AS s')
                ->select('s.name')
                ->join('subscheme_social AS ss', 'ss.social_id', '=', 's.id')
                ->where('ss.subscheme_id', $id)->get();

            $financial_outlay = FinancialOutlay::select('state_share', 'center_share')->where('subscheme_id', $id)->get();

            $sdg = DB::table('sdg_goals AS s')
                ->select('s.goal_name', 's.goal_number')
                ->join('subscheme_sdgs AS ss', 'ss.sdg_id', '=', 's.id')
                ->where('ss.subscheme_id', $id)->get();

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
                'financial_outlay' => $financial_outlay[0]->state_share + $financial_outlay[0]->center_share,
                'sdg' => $sdg,
                'subscheme' => $subscheme
            ]);
        } else {
            return response()->json(['error' => 'Unauthorized.'], 403);
        }
    }

    public function aor_verifier_subscheme_header($id)
    {
        $sub_scheme = DB::table('sub_schemes AS ss')
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
            ->join('schemes AS s', 's.id', '=', 'ss.scheme_id')
            ->join('departments AS dept', 'dept.id', '=', 'ss.department_id')
            ->join('divisions AS div', 'div.id', '=', 'ss.division_id')
            ->where('ss.id', $id)->get();

        $SubschemeExpenditure = AorSubSchemeExpenditure::where('subscheme_id', $id)
            ->latest('updated_at')
            ->first();
        if ($SubschemeExpenditure) {
            $sanction = $SubschemeExpenditure->sanction;
            $allotment = $SubschemeExpenditure->allotment;
            $expenditure = $SubschemeExpenditure->expenditure;
        } else {
            $sanction = 0;
            $allotment = 0;
            $expenditure = 0;
        }

        return response()->json([
            'status' => 200,
            'sub_scheme' => $sub_scheme,
            'sanction' => $sanction,
            'allotment' => $allotment,
            'expenditure' => $expenditure
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SubScheme  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(SubScheme $id)
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

        $subscheme = SubScheme::where('subscheme_code', $request->subSchemeCode)
        ->get();
        if($subscheme->isNotEmpty()){
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
                $subScheme = new SubScheme();
                $subScheme->name = $request->subSchemeName;
                $subScheme->subscheme_code = $request->subSchemeCode;
                $subScheme->scheme_id = $request->schemeId;
                $subScheme->division_id = $request->division;
                $subScheme->department_id = $request->department;
                $subScheme->risk_remarks = $request->riskremarks;
                $subScheme->initial_remarks = $request->riskremarks;
                $subScheme->save();

                $financialOutlay = new FinancialOutlay;
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
                SubschemeSocial::insert($dataSocial);

                foreach ($filteredGender as $gender) {
                    $dataGender[] = [
                        'subscheme_id' => $subScheme->id,
                        'gender_id' => $gender['id'],
                        'created_at' => new \dateTime,
                        'updated_at' => new \dateTime
                    ];
                }
                SubschemeGender::insert($dataGender);

                $subschemeSdg = new SubschemeSdg;
                $subschemeSdg->subscheme_id = $subScheme->id;
                $subschemeSdg->sdg_id = $request->subSchemeSDG;
                $subschemeSdg->save();

                foreach ($request->outcomes as $outcome_key => $outcome_value) {
                    $outcome = new Outcome;
                    $outcome->name = $outcome_value['name'];
                    $outcome->subscheme_id = $subScheme->id;
                    $outcome->scheme_id = $request->schemeId;
                    $outcome->division_id = $request->division;
                    $outcome->department_id = $request->department;
                    $outcome->save();

                    foreach ($outcome_value['outcomeIndicators'] as $outcomeIndicator_key => $outcomeIndicator_value) {
                        $outcomeindicator = new OutcomeIndicator;
                        $outcomeindicator->name = $outcomeIndicator_value['name'];
                        $outcomeindicator->outcome_id = $outcome->id;
                        $outcomeindicator->subscheme_id = $subScheme->id;
                        $outcomeindicator->scheme_id = $request->schemeId;
                        $outcomeindicator->division_id = $request->division;
                        $outcomeindicator->department_id = $request->department;
                        $outcomeindicator->save();

                        $targetOutcome = new TargetOutcome;
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
                    $output = new Output();
                    $output->name = $output_value['name'];
                    $output->subscheme_id = $subScheme->id;
                    $output->scheme_id = $request->schemeId;
                    $output->division_id = $request->division;
                    $output->department_id = $request->department;
                    $output->save();

                    foreach ($output_value['outputIndicators'] as $outputIndicator_key => $outputIndicator_value) {
                        $outputindicator = new OutputIndicator();
                        $outputindicator->name = $outputIndicator_value['name'];
                        $outputindicator->output_id = $output->id;
                        $outputindicator->subscheme_id = $subScheme->id;
                        $outputindicator->scheme_id = $request->schemeId;
                        $outputindicator->division_id = $request->division;
                        $outputindicator->department_id = $request->department;
                        $outputindicator->save();

                        $targetOutput = new TargetOutput();
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

    public function cur_subscheme_header($id)
    {
        $sub_scheme = DB::table('sub_schemes AS ss')
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
            ->join('schemes AS s', 's.id', '=', 'ss.scheme_id')
            ->join('departments AS dept', 'dept.id', '=', 'ss.department_id')
            ->join('divisions AS div', 'div.id', '=', 'ss.division_id')
            ->where('ss.id', $id)->get();

        $rid = VerifiedReport::where('division_id', $sub_scheme[0]->div_id)
            ->where('verified_btn_flag', true)
            ->pluck('id')->toArray();

        $sanction = 0;
        $allotment = 0;
        $expenditure = 0;

        return response()->json([
            'status' => 200,
            'sub_scheme' => $sub_scheme,
            'sanction' => $sanction,
            'allotment' => $allotment,
            'expenditure' => $expenditure
        ]);
    }

    public function cur_report_subscheme($id)
    {
        $user = Auth::user();
        $subscheme = SubScheme::find($id);

        if ($user->role == 'admin' || $user->division_id == $subscheme->division_id) {
            $outputs = DB::table('outputs')->where('subscheme_id', $id)->orderBy('id')->get();
            if (sizeof($outputs) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Found'
                ]);
            }
            $outputindicators = DB::table('output_indicators')->where('subscheme_id', $id)->orderBy('id')->get();
            if (sizeof($outputindicators) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Indicators Found'
                ]);
            }
            $outcomes = DB::table('outcomes')->where('subscheme_id', $id)->orderBy('id')->get();
            if (sizeof($outcomes) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Outcome Found'
                ]);
            }
            $outcomeindicators = DB::table('outcome_indicators')->where('subscheme_id', $id)->orderBy('id')->get();
            if (sizeof($outcomeindicators) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Indicators Found'
                ]);
            }
            $target_outputs = DB::table('target_outputs')->where('subscheme_id', $id)->orderBy('id')->get();
            if (sizeof($target_outputs) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Indicators Found'
                ]);
            }
            $target_outcomes = DB::table('target_outcomes')->where('subscheme_id', $id)->orderBy('id')->get();
            if (sizeof($target_outcomes) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Indicators Found'
                ]);
            }

            $achievement_outputs = [];
            $achievement_outcomes = [];

            foreach ($outputs as $output) {
                $output->outputindicatorscount = DB::table('output_indicators')->where('output_id', $output->id)->count();
            }
            foreach ($outcomes as $outcome) {
                $outcome->outcomeindicatorscount = DB::table('outcome_indicators')->where('outcome_id', $outcome->id)->count();
            }

            $genders = DB::table('genders AS g')
                ->select('g.name')
                ->join('subscheme_gender AS sg', 'sg.gender_id', '=', 'g.id')
                ->where('sg.subscheme_id', $id)->get();

            $socials = DB::table('socials AS s')
                ->select('s.name')
                ->join('subscheme_social AS ss', 'ss.social_id', '=', 's.id')
                ->where('ss.subscheme_id', $id)->get();

            $financial_outlay = FinancialOutlay::select('state_share', 'center_share')->where('subscheme_id', $id)->get();

            $sdg = DB::table('sdg_goals AS s')
                ->select('s.goal_name', 's.goal_number')
                ->join('subscheme_sdgs AS ss', 'ss.sdg_id', '=', 's.id')
                ->where('ss.subscheme_id', $id)->get();

                $risk_remarks = "";

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
                'financial_outlay' => $financial_outlay[0]->state_share + $financial_outlay[0]->center_share,
                'sdg' => $sdg,
                'remark' => $risk_remarks,
                'subscheme' => $subscheme
            ]);
        } else {
            return response()->json(['error' => 'Unauthorized.'], 403);
        }
    }

    public function cur_report_subscheme_division($id)
    {
        $subschemes = DB::table('sub_schemes')->where('division_id', $id)->orderBy('id')->get();

        foreach ($subschemes as $subscheme) {
            $sub_scheme = DB::table('sub_schemes AS ss')
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
                ->join('schemes AS s', 's.id', '=', 'ss.scheme_id')
                ->join('departments AS dept', 'dept.id', '=', 'ss.department_id')
                ->join('divisions AS div', 'div.id', '=', 'ss.division_id')
                ->where('ss.id', $subscheme->id)->get();

            $sanction = 0;
            $allotment = 0;
            $expenditure = 0;

            $outputs = DB::table('outputs')->where('subscheme_id', $subscheme->id)->orderBy('id')->get();
            if (sizeof($outputs) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Found'
                ]);
            }
            $outputindicators = DB::table('output_indicators')->where('subscheme_id', $subscheme->id)->orderBy('id')->get();
            if (sizeof($outputindicators) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Indicators Found'
                ]);
            }
            $outcomes = DB::table('outcomes')->where('subscheme_id', $subscheme->id)->orderBy('id')->get();
            if (sizeof($outcomes) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Outcome Found'
                ]);
            }
            $outcomeindicators = DB::table('outcome_indicators')->where('subscheme_id', $subscheme->id)->orderBy('id')->get();
            if (sizeof($outcomeindicators) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Indicators Found'
                ]);
            }
            $target_outputs = DB::table('target_outputs')->where('subscheme_id', $subscheme->id)->orderBy('id')->get();
            if (sizeof($target_outputs) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Indicators Found'
                ]);
            }
            $target_outcomes = DB::table('target_outcomes')->where('subscheme_id', $subscheme->id)->orderBy('id')->get();
            if (sizeof($target_outcomes) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Indicators Found'
                ]);
            }

            $achievement_outputs = [];

            $achievement_outcomes = [];

            foreach ($outputs as $output) {
                $output->outputindicatorscount = DB::table('output_indicators')->where('output_id', $output->id)->count();
            }
            foreach ($outcomes as $outcome) {
                $outcome->outcomeindicatorscount = DB::table('outcome_indicators')->where('outcome_id', $outcome->id)->count();
            }

            $genders = DB::table('genders AS g')
                ->select('g.name')
                ->join('subscheme_gender AS sg', 'sg.gender_id', '=', 'g.id')
                ->where('sg.subscheme_id', $subscheme->id)->get();

            $socials = DB::table('socials AS s')
                ->select('s.name')
                ->join('subscheme_social AS ss', 'ss.social_id', '=', 's.id')
                ->where('ss.subscheme_id', $subscheme->id)->get();

            $financial_outlay = FinancialOutlay::select('state_share', 'center_share')->where('subscheme_id', $subscheme->id)->get();

            $sdg = DB::table('sdg_goals AS s')
                ->select('s.goal_name', 's.goal_number')
                ->join('subscheme_sdgs AS ss', 'ss.sdg_id', '=', 's.id')
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

        return response()->json([
            'status' => 200,
            'subschemes' => $subschemes,

        ]);
    }
}
