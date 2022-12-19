<?php

namespace App\Http\Controllers\Migrate;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MigSubSchemeSocialController extends Controller
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
        $collection = collect($request->social);
        $filteredCollection = $collection->where('selected', true)->values();

        foreach ($filteredCollection as $item) {
            $data[] = [
                'subscheme_id' => $id,
                'social_id' => $item['id'],
                'created_at' => new \dateTime,
                'updated_at' => new \dateTime
            ];
        }

        try {
            DB::transaction(function () use ($id, $data) {
                DB::table('mig_sub_scheme_socials')->where('subscheme_id', $id)->delete();
                DB::table('mig_sub_scheme_socials')->insert($data);
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

    public function subscheme_social($id)
    {
        $subscheme_socials = DB::table('mig_sub_scheme_socials AS ss')
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
}
