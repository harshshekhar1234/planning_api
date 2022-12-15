<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Models\SubschemeSdg;

class SubschemeSdgController extends Controller
{

    public function index($id)
    {
        $sdg = DB::table('subscheme_sdgs AS ssdg')
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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'subscheme_id' => 'required|numeric|min:1',
            'sdg_id' => 'required|numeric',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
            ]);
        }
        if (SubschemeSdg::where('subscheme_id', $request->subscheme_id)->exists()) {
            return response()->json([
                'status' => 400,
                'message' => 'SDG Goal already set for Subscheme'
            ]);
        }
        try {
            $subschemeSdg = new SubschemeSdg;
            $subschemeSdg->subscheme_id = $request->subscheme_id;
            $subschemeSdg->sdg_id = $request->sdg_id;
            $subschemeSdg->save();
            return response()->json([
                'status' => 200,
                'message' => 'success'
            ]);
        } catch (\Throwable $e) {
            return response()->json([
                'status' => 404,
                'message' => 'Something went wrong'
                //'message' => $e
            ]);
        }
    }

    /**
     * SDG Details on the basis of Subscheme Code.
     *
     * @param  \App\Models\SubScheme  $code
     * @return \Illuminate\Http\Response
     */
    public function detailbycode($code)
    {
        $sdg_detail = DB::table('subscheme_sdgs AS ssdg')
            ->join('sdg_goals AS sdg', 'sdg.id', '=', 'ssdg.sdg_id')
            ->join('sub_schemes AS ss', 'ss.id', '=', 'ssdg.subscheme_id')
            ->select(
                "ssdg.*",
                "sdg.goal_name as GoalName",
                "ss.subscheme_code as subCode",
                "ss.name as subName"
            )
            ->where('ss.subscheme_code', $code)
            ->orderby('ssdg.id')->get();

        return response()->json([
            'status' => 200,
            'result' => $sdg_detail
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SubScheme  $id
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
        $subschemeSdg = SubschemeSdg::where('subscheme_id', $id)->first();
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
     * @param  \App\Models\SubschemeSdg  $subschemeSdg
     * @return \Illuminate\Http\Response
     */
    public function destroy(SubschemeSdg $id)
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
}
