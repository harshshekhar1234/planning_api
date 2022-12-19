<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Models\Social;
use App\Models\SubschemeSocial;

class SocialController extends Controller
{
    public function index()
    {
        $socials = Social::all();
        return response()->json($socials, 200);
    }

    public function social_select()
    {
        $socials = DB::table('socials')
            ->Select(
                'id',
                'name'
            );
        $socials = $socials->addSelect(DB::raw("false as selected"));
        $socials = $socials->orderBy('id')->get();
        return response()->json($socials, 200);
    }

    public function subscheme_social($id)
    {
        $subscheme_socials = DB::table('subscheme_social AS ss')
            ->select(
                'ss.social_id',
                'ss.subscheme_id'
            )
            ->where('ss.subscheme_id', $id);

        $socials = DB::table('socials AS s')
            ->leftjoinSub(
                $subscheme_socials,
                'ss',
                function ($join) {
                    $join->on('s.id', '=', 'ss.social_id');
                }
            )
            ->select(
                's.id',
                's.name',
                'ss.social_id',
                'ss.subscheme_id',
                DB::raw('(case when (s.id = ss.social_id) then true else false end) as selected')

            );
        $socials = $socials->orderBy('s.id')->get();
        return response()->json($socials, 200);
    }

    /**
     * Social Category Details on the basis of Subscheme Code.
     *
     * @param  \App\Models\SubScheme  $code
     * @return \Illuminate\Http\Response
     */
    public function detailbycode($code)
    {
        $social = DB::table('subscheme_social AS sss')
            ->join('sub_schemes AS ss', 'ss.id', '=', 'sss.subscheme_id')
            ->join('socials AS s', 's.id', '=', 'sss.social_id')
            ->select(
                "sss.*",
                's.name as socialCategory',
                "ss.subscheme_code as subCode",
                "ss.name as subName"
            )
            ->where('ss.subscheme_code', $code)
            ->orderby('sss.id')->get();

        return response()->json([
            'status' => 200,
            'result' => $social
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
            'subscheme_id' => 'required|numeric',
            'social_id' => 'required|numeric',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
            ]);
        }
        try {
            $subschemeSocial = new SubschemeSocial;
            $subschemeSocial->subscheme_id = $request->subscheme_id;
            $subschemeSocial->social_id = $request->social_id;
            $subschemeSocial->save();
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
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SubschemeSocial  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $collection = collect($request->social);
        $filteredCollection = $collection->where('selected', true)->values();

        foreach($filteredCollection as $item) {
            $data[] =[
                'subscheme_id' => $id,
                'social_id' => $item['id'],
                'created_at' => new \dateTime,
                'updated_at' => new \dateTime
            ];
        }

        try {
            DB::transaction(function () use ($id, $data) {
                DB::table('subscheme_social')->where('subscheme_id', $id)->delete();
                DB::table('subscheme_social')->insert($data);
            });
        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e
            ]);
        }

        return response()->json([
            'status' => 200,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SubschemeSocial  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(SubschemeSocial $id)
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
