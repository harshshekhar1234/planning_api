<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Models\Gender;
use App\Models\SubschemeGender;

class GenderController extends Controller
{
    public function index()
    {
        $genders = Gender::all();
        return response()->json($genders, 200);
    }

    public function gender_select()
    {
        $genders = DB::table('genders')
            ->Select(
                'id',
                'name'
            );
        $genders = $genders->addSelect(DB::raw("false as selected"));
        $genders = $genders->orderBy('id')->get();
        return response()->json($genders, 200);
    }

    public function subscheme_gender($id)
    {
        $subscheme_genders = DB::table('subscheme_gender AS sg')
            ->select(
                'sg.gender_id',
                'sg.subscheme_id'
            )
            ->where('sg.subscheme_id', $id);

        $genders = DB::table('genders AS g')
            ->leftjoinSub(
                $subscheme_genders,
                'sg',
                function ($join) {
                    $join->on('g.id', '=', 'sg.gender_id');
                }
            )
            ->select(
                'g.id',
                'g.name',
                'sg.gender_id',
                'sg.subscheme_id',
                DB::raw('(case when (g.id = sg.gender_id) then true else false end) as selected')

            );
        $genders = $genders->orderBy('g.id')->get();
        return response()->json($genders, 200);
    }

    /**
     * Gender Category Details on the basis of Subscheme Code.
     *
     * @param  \App\Models\SubScheme  $code
     * @return \Illuminate\Http\Response
     */
    public function detailbycode($code)
    {
        $gender = DB::table('subscheme_gender AS ssg')
            ->join('sub_schemes AS ss', 'ss.id', '=', 'ssg.subscheme_id')
            ->join('genders AS g', 'g.id', '=', 'ssg.gender_id')
            ->select(
                "ssg.*",
                'g.name as gender',
                "ss.subscheme_code as subCode",
                "ss.name as subName"
            )
            ->where('ss.subscheme_code', $code)
            ->orderby('ssg.id')->get();

        return response()->json([
            'status' => 200,
            'result' => $gender
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
            'gender_id' => 'required|numeric',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
            ]);
        }
        try {
            $subschemeGender = new SubschemeGender;
            $subschemeGender->subscheme_id = $request->subscheme_id;
            $subschemeGender->gender_id = $request->gender_id;
            $subschemeGender->save();
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
     * @param  \App\Models\SubschemeGender  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $collection = collect($request->gender);
        $filteredCollection = $collection->where('selected', true)->values();

        foreach($filteredCollection as $item) {
            $data[] =[
                'subscheme_id' => $id,
                'gender_id' => $item['id'],
                'created_at' => new \dateTime,
                'updated_at' => new \dateTime
            ];
        }

        try {
            DB::transaction(function () use ($id, $data) {
                DB::table('subscheme_gender')->where('subscheme_id', $id)->delete();
                DB::table('subscheme_gender')->insert($data);
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
     * @param  \App\Models\SubschemeGender  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(SubschemeGender $id)
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
