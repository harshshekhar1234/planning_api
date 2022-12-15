<?php

namespace App\Http\Controllers\Migrate;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\MigFinancialOutlay;
use Illuminate\Support\Facades\Validator;

class MigFinancialOutlayController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $Financialoutlay = MigFinancialOutlay::where('subscheme_id', $id)->get();
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
            $financialOutlay = MigFinancialOutlay::where('subscheme_id', $id)->first();
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
                'message' => $e
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
