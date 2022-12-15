<?php

namespace App\Http\Controllers\Migrate;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MigSubSchemeGenderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $collection = collect($request->gender);
        $filteredCollection = $collection->where('selected', true)->values();

        foreach ($filteredCollection as $item) {
            $data[] = [
                'subscheme_id' => $id,
                'gender_id' => $item['id']
            ];
        }

        try {
            DB::transaction(function () use ($id, $data) {
                DB::table('mig_sub_scheme_genders')->where('subscheme_id', $id)->delete();
                DB::table('mig_sub_scheme_genders')->insert($data);
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function subscheme_gender($id)
    {
        $subscheme_genders = DB::table('mig_sub_scheme_genders AS sg')
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
}
