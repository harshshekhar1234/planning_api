<?php

namespace App\Http\Controllers;

use App\Models\SubSchemeExpenditure;
use App\Models\SubScheme;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Models\FinancialOutlay;
use App\Models\AorSubSchemeExpenditure;

class SubSchemeExpenditureController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $SubschemeExpenditure = DB::table('sub_scheme_expenditures AS sse')
            ->leftJoin('verified_reports AS report', 'report.id', '=', 'sse.report_id')
            ->select(
                "sse.*",
                "report.name as reportName",
                "report.year as reportYear",
                "report.verified_btn_flag as reportVerified",
            )
            ->where('sse.subscheme_id', $id)->orderBy('sse.created_at', 'desc')->get();
        return response()->json([
            'status' => 200,
            'result' => $SubschemeExpenditure
        ]);
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
        $validator = Validator::make($request->all(), [
            'sanction' => 'required|numeric',
            'allotment' => 'required|numeric',
            'expenditure' => 'required|numeric',
            'subscheme_id' => 'required|numeric|min:1',
            'time' => 'required|date',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
            ]);
        }
        /*
        $SubschemeExpenditure = SubSchemeExpenditure::where('subscheme_id', $request->subscheme_id)->get();
        $financialOutlay = FinancialOutlay::where('subscheme_id', $request->subscheme_id)->get();
        if (($SubschemeExpenditure->sum('sanction') + $request->sanction) > ($financialOutlay[0]->state_share + $financialOutlay[0]->center_share)) {
            return response()->json([
                'status' => 'error',
                'message' => 'Sanctioned amount cannot be greater than Budget Estimate'
            ]);
        }
        if (($SubschemeExpenditure->sum('allotment') + $request->allotment) > ($SubschemeExpenditure->sum('sanction') + $request->sanction)) {
            return response()->json([
                'status' => 'error',
                'message' => 'Alloted amount cannot be greater than Sanctioned'
            ]);
        }
        if (($SubschemeExpenditure->sum('expenditure') + $request->expenditure) > ($SubschemeExpenditure->sum('allotment') + $request->allotment)) {
            return response()->json([
                'status' => 'error',
                'message' => 'Expenditure cannot be greater than Alloted amount'
            ]);
        }
        */
        $subscheme = SubScheme::find($request->subscheme_id);
        if ($subscheme && $subscheme->fin_add_btn_flag) {
            try {
                DB::transaction(function () use ($request) {
                    $subscheme = SubScheme::find($request->subscheme_id);

                    $SubschemeExpenditure = new SubSchemeExpenditure;
                    $SubschemeExpenditure->sanction = $request->sanction;
                    $SubschemeExpenditure->allotment = $request->allotment;
                    $SubschemeExpenditure->expenditure = $request->expenditure;
                    $SubschemeExpenditure->time = $request->time;
                    $SubschemeExpenditure->subscheme_id = $request->subscheme_id;
                    $SubschemeExpenditure->scheme_id = $subscheme->scheme_id;
                    $SubschemeExpenditure->division_id = $subscheme->division_id;
                    $SubschemeExpenditure->department_id = $subscheme->department_id;
                    $SubschemeExpenditure->save();

                    $subscheme->fin_add_btn_flag = false;
                    $subscheme->save();
                });
            } catch (\Throwable $e) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Something went wrong'
                ]);
            }
            return response()->json([
                'status' => 200,
                'message' => 'success'
            ]);
        } else {
            return response()->json([
                'status' => 403,
                'message' => 'Forbidden'
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SubSchemeExpenditure  $subSchemeExpenditure
     * @return \Illuminate\Http\Response
     */
    public function show(SubSchemeExpenditure $subSchemeExpenditure)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SubSchemeExpenditure  $subSchemeExpenditure
     * @return \Illuminate\Http\Response
     */
    public function edit(SubSchemeExpenditure $subSchemeExpenditure)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SubSchemeExpenditure  $subSchemeExpenditure
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SubSchemeExpenditure $subSchemeExpenditure)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SubSchemeExpenditure  $subSchemeExpenditure
     * @return \Illuminate\Http\Response
     */
    public function destroy(SubSchemeExpenditure $id)
    {
        try {

            $id->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Deleted Successfully.'
            ]);
        } catch (\Throwable $e) {
            return response()->json([
                'status' => 404,
                'message' => 'Record not Found'
                //'message' => $e
            ]);
        }
    }

    public function subscheme_financial_seed()
    {
        $subSchemeExpenditure = SubSchemeExpenditure::orderby('id')->get();

        return response()->json([
            'status' => 200,
            'result' => $subSchemeExpenditure
        ]);
    }

    public function update_ss_fin_exp_value(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'sanction' => 'required|numeric',
            'allotment' => 'required|numeric',
            'expenditure' => 'required|numeric',
            'time' => 'required|date',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
            ]);
        }

        $subSchemeExpenditure = SubSchemeExpenditure::find($id);
        if (is_null($subSchemeExpenditure)) {
            return response()->json([
                'status' => 404,
                'message' => 'SubScheme Financial Details not found.'
            ]);
        }
        if (($subSchemeExpenditure->submitted_status == 'N' && $subSchemeExpenditure->verified_status == 'N') || ($subSchemeExpenditure->submitted_status == 'S' && $subSchemeExpenditure->verified_status == 'R')) {
            /*
            $ssExpenditure = SubSchemeExpenditure::where('subscheme_id', $subSchemeExpenditure->subscheme_id)->get();
            $financialOutlay = FinancialOutlay::where('subscheme_id', $subSchemeExpenditure->subscheme_id)->get();
            if (($ssExpenditure->sum('sanction') - $subSchemeExpenditure->sanction + $request->sanction) > ($financialOutlay[0]->state_share + $financialOutlay[0]->center_share)) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Sanctioned amount cannot be greater than Budget Estimate'
                ]);
            }
            if (($ssExpenditure->sum('allotment') - $subSchemeExpenditure->allotment + $request->allotment) > ($ssExpenditure->sum('sanction') - $subSchemeExpenditure->sanction + $request->sanction)) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Alloted amount cannot be greater than Sanctioned'
                ]);
            }
            if (($ssExpenditure->sum('expenditure') - $subSchemeExpenditure->expenditure + $request->expenditure) > ($ssExpenditure->sum('allotment') - $subSchemeExpenditure->allotment + $request->allotment)) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Expenditure cannot be greater than Alloted amount'
                ]);
            }
            */
            $subSchemeExpenditure->sanction = $request->sanction;
            $subSchemeExpenditure->allotment = $request->allotment;
            $subSchemeExpenditure->expenditure = $request->expenditure;
            $subSchemeExpenditure->time = $request->time;
            $subSchemeExpenditure->save();

            return response()->json([
                'status' => 200,
                'message' => 'success'
            ]);
        } else {
            return response()->json([
                'status' => 403,
                'message' => 'Forbidden'
            ]);
        }
    }

    public function ss_fin_exp($code)
    {
        $financial_detail = DB::table('sub_scheme_expenditures AS sse')
            ->join('divisions AS div', 'div.id', '=', 'sse.division_id')
            ->join('departments AS dept', 'dept.id', '=', 'sse.department_id')
            ->join('sub_schemes AS ss', 'ss.id', '=', 'sse.subscheme_id')
            ->select(
                "sse.*",
                "div.name as divName",
                "dept.name as deptName",
                "ss.subscheme_code as subCode",
                "ss.name as subName"
            )
            ->where('ss.subscheme_code', $code)
            ->orderby('sse.id')->get();

        return response()->json([
            'status' => 200,
            'result' => $financial_detail
        ]);
    }

    /*---------- Functions for AS ON DATE repoprts -----------*/
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function aor_index($id)
    {
        $SubschemeExpenditure = DB::table('aor_sub_scheme_expenditures AS sse')
            ->leftJoin('aor_verified_reports AS report', 'report.id', '=', 'sse.report_id')
            ->select(
                "sse.*",
                "report.from_date as reportFromDate",
                "report.to_date as reportToDate",
                "report.year as reportYear",
                "report.verified_btn_flag as reportVerified",
            )
            ->where('sse.subscheme_id', $id)->orderBy('sse.created_at', 'desc')->get();
        return response()->json([
            'status' => 200,
            'result' => $SubschemeExpenditure
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function aor_store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'sanction' => 'required|numeric',
            'allotment' => 'required|numeric',
            'expenditure' => 'required|numeric',
            'subscheme_id' => 'required|numeric|min:1',
            'time' => 'required|date',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
            ]);
        }
        /*
        $financialOutlay = FinancialOutlay::where('subscheme_id', $request->subscheme_id)->get();
        if (($request->sanction) > ($financialOutlay[0]->state_share + $financialOutlay[0]->center_share)) {
            return response()->json([
                'status' => 'error',
                'message' => 'Sanctioned amount cannot be greater than Budget Estimate'
            ]);
        }
        if ($request->allotment > $request->sanction) {
            return response()->json([
                'status' => 'error',
                'message' => 'Alloted amount cannot be greater than Sanctioned Amount'
            ]);
        }
        if ($request->expenditure > $request->allotment) {
            return response()->json([
                'status' => 'error',
                'message' => 'Expenditure cannot be greater than Alloted Amount'
            ]);
        }
        */
        $subscheme = SubScheme::find($request->subscheme_id);
        if ($subscheme && $subscheme->aor_fin_add_btn_flag) {
            try {
                DB::transaction(function () use ($request) {
                    $subscheme = SubScheme::find($request->subscheme_id);

                    $SubschemeExpenditure = new AorSubSchemeExpenditure;
                    $SubschemeExpenditure->sanction = $request->sanction;
                    $SubschemeExpenditure->allotment = $request->allotment;
                    $SubschemeExpenditure->expenditure = $request->expenditure;
                    $SubschemeExpenditure->time = $request->time;
                    $SubschemeExpenditure->subscheme_id = $request->subscheme_id;
                    $SubschemeExpenditure->scheme_id = $subscheme->scheme_id;
                    $SubschemeExpenditure->division_id = $subscheme->division_id;
                    $SubschemeExpenditure->department_id = $subscheme->department_id;
                    $SubschemeExpenditure->save();

                    $subscheme->aor_fin_add_btn_flag = false;
                    $subscheme->save();
                });
            } catch (\Throwable $e) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Something went wrong'
                ]);
            }
            return response()->json([
                'status' => 200,
                'message' => 'success'
            ]);
        } else {
            return response()->json([
                'status' => 403,
                'message' => 'Forbidden'
            ]);
        }
    }

    public function aor_update_ss_fin_exp_value(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'sanction' => 'required|numeric',
            'allotment' => 'required|numeric',
            'expenditure' => 'required|numeric',
            'time' => 'required|date',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
            ]);
        }

        $subSchemeExpenditure = AorSubSchemeExpenditure::find($id);
        if (is_null($subSchemeExpenditure)) {
            return response()->json([
                'status' => 404,
                'message' => 'SubScheme Financial Details not found.'
            ]);
        }
        if (($subSchemeExpenditure->submitted_status == 'N' && $subSchemeExpenditure->verified_status == 'N') || ($subSchemeExpenditure->submitted_status == 'S' && $subSchemeExpenditure->verified_status == 'R')) {
            /*
            $financialOutlay = FinancialOutlay::where('subscheme_id', $subSchemeExpenditure->subscheme_id)->get();
            if (($request->sanction) > ($financialOutlay[0]->state_share + $financialOutlay[0]->center_share)) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Sanctioned amount cannot be greater than Budget Estimate'
                ]);
            }
            if ($request->allotment > $request->sanction) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Alloted amount cannot be greater than Sanctioned Amount'
                ]);
            }
            if ($request->expenditure > $request->allotment) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Expenditure cannot be greater than Alloted Amount'
                ]);
            }
            */
            $subSchemeExpenditure->sanction = $request->sanction;
            $subSchemeExpenditure->allotment = $request->allotment;
            $subSchemeExpenditure->expenditure = $request->expenditure;
            $subSchemeExpenditure->time = $request->time;
            $subSchemeExpenditure->save();

            return response()->json([
                'status' => 200,
                'message' => 'success'
            ]);
        } else {
            return response()->json([
                'status' => 403,
                'message' => 'Forbidden'
            ]);
        }
    }
}
