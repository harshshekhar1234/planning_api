<?php

namespace App\Http\Controllers\Migrate;

use App\Http\Controllers\Controller;
use App\Models\MigSubSchemeSdg;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class MigSubSchemeSdgController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $sdg = DB::table('mig_sub_scheme_sdgs AS ssdg')
            ->join('sdg_goals AS sdg', 'sdg.id', '=', 'ssdg.sdg_id')
            ->select(
                "ssdg.*",
                "sdg.id as GoalId",
                "sdg.goal_name as GoalName"
            )
            ->where('ssdg.subscheme_id', $id)
            ->orderby('ssdg.id')->first();

        return response()->json([
            'status' => 200,
            'id' => $sdg->GoalId,
            'name' => $sdg->GoalName
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
            'sdg_id' => 'required|numeric',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
            ]);
        }
        $subschemeSdg = MigSubSchemeSdg::where('subscheme_id', $id)->first();
        if (is_null($subschemeSdg)) {
            return response()->json([
                'status' => 404,
                'message' => 'SubScheme SDG Details not found.'
            ]);
        }
        try {
            $subschemeSdg->sdg_id = $request->sdg_id;
            $subschemeSdg->save();
            return response()->json([
                'status' => 200,
                'message' => 'success'
            ]);
        } catch (\Throwable $e) {
            return response()->json([
                'status' => 400,
                'message' => 'Something went wrong'
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
