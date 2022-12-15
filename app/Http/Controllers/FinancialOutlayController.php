<?php

namespace App\Http\Controllers;

use App\Models\FinancialOutlay;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class FinancialOutlayController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $Financialoutlay = FinancialOutlay::where('subscheme_id', $id)->get();
        $SubschemeOutlay = $Financialoutlay[0]->state_share + $Financialoutlay[0]->center_share;
        return response()->json([
            'status' => 200,
            'result' => $SubschemeOutlay,
            'state_share' => $Financialoutlay[0]->state_share,
            'center_share' => $Financialoutlay[0]->center_share 
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
            'state_share' => 'required|numeric|min:1',
            'center_share' => 'required|numeric|min:1',
            'department_id' => 'required|numeric|min:1|max:13',
            'division_id' => 'required|numeric|min:1',
            'scheme_id' => 'required|numeric|min:1',
            'subscheme_id' => 'required|numeric',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
            ]);
        }
        try {
            $financialOutlay = new FinancialOutlay;
            $financialOutlay->state_share = $request->state_share;
            $financialOutlay->center_share = $request->center_share;
            $financialOutlay->department_id = $request->department_id;
            $financialOutlay->division_id = $request->division_id;
            $financialOutlay->scheme_id = $request->scheme_id;
            $financialOutlay->subscheme_id = $request->subscheme_id;
            $financialOutlay->save();
            return response()->json([
                'status' => 200,
                'message' => 'success'
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
     * Display the specified resource.
     *
     * @param  \App\Models\FinancialOutlay  $financialOutlay
     * @return \Illuminate\Http\Response
     */
    public function show(FinancialOutlay $financialOutlay)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\FinancialOutlay  $financialOutlay
     * @return \Illuminate\Http\Response
     */
    public function edit(FinancialOutlay $financialOutlay)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\FinancialOutlay  $financialOutlay
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'state_share' => 'required|numeric',
            'center_share' => 'required|numeric',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
            ]);
        }
        try {
            $financialOutlay = FinancialOutlay::where('subscheme_id', $id)->first();
            if (is_null($financialOutlay)) {
                return response()->json([
                    'status' => 404,
                    'message' => 'Financial Outlay not found.'
                ]);
            }
            $financialOutlay->state_share = $request->state_share;
            $financialOutlay->center_share = $request->center_share;
            $financialOutlay->save();
            return response()->json([
                'status' => 200,
                'state_share' => $financialOutlay->state_share,
                'center_share' => $financialOutlay->center_share
            ]);
        } catch (Exception $e) {
            return response()->json([
                'status' => 400,
                //'message' => 'Something went wrong'
                'message' => $e
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\FinancialOutlay  $financialOutlay
     * @return \Illuminate\Http\Response
     */
    public function destroy(FinancialOutlay $id)
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

    public function get_by_dept($id)
    {
        $state_share_outlay = FinancialOutlay::where('department_id', $id)->sum('state_share');
        $centre_share_outlay = FinancialOutlay::where('department_id', $id)->sum('center_share');
        $departmenteOutlay = ($state_share_outlay + $centre_share_outlay) / 100;
        return response()->json([
            'status' => 200,
            'result' => $departmenteOutlay
        ]);
    }

    public function get_by_division($id)
    {
        $state_share_outlay = FinancialOutlay::where('division_id', $id)->sum('state_share');
        $centre_share_outlay = FinancialOutlay::where('division_id', $id)->sum('center_share');
        $divisionOutlay = ($state_share_outlay + $centre_share_outlay) / 100;
        return response()->json([
            'status' => 200,
            'result' => $divisionOutlay
        ]);
    }

    /**
     * Financial Outlay Details on the basis of Subscheme Code.
     *
     * @param  \App\Models\SubScheme  $code
     * @return \Illuminate\Http\Response
     */
    public function detailbycode($code)
    {
        $financialOutlay = DB::table('financial_outlays AS fo')
            ->join('sub_schemes AS ss', 'ss.id', '=', 'fo.subscheme_id')
            ->select(
                "fo.*",
                "ss.subscheme_code as subCode",
                "ss.name as subName"
            )
            ->where('ss.subscheme_code', $code)
            ->orderby('fo.id')->get();

        return response()->json([
            'status' => 200,
            'result' => $financialOutlay
        ]);
    }
}
