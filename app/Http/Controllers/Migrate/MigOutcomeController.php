<?php

namespace App\Http\Controllers\Migrate;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Models\MigOutcome;
use App\Models\MigOutcomeIndicator;
use App\Models\MigOutcomeIndicatorTarget;
use Exception;

class MigOutcomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $outcomes = DB::table('mig_outcomes')->where('subscheme_id', $id)->get();
        return response()->json($outcomes, 200);
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
            'name' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
            ]);
        }

        $outcome = MigOutcome::find($id);
        if (is_null($outcome)) {
            return response()->json([
                'status' => 404,
                'message' => 'Outcome not found'
            ]);
        }
        $outcome->name = $request->name;
        $outcome->save();

        return response()->json([
            'status' => 200,
            'message' => 'Outcome updated successfully.'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  MigOutcome  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(MigOutcome $id)
    {
        try {
            $id->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Outcome Deleted Successfully.'
            ]);
        } catch (Exception $e) {
            return response()->json([
                'status' => 404,
                'message' => $e
            ]);
        }
    }

    public function outcome_store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'outcome.name' => 'required|string',
            'outcome.subscheme_id' => 'required|numeric',
            'outcome.scheme_id' => 'required|numeric|min:1',
            'outcome.division_id' => 'required|numeric|min:1',
            'outcome.department_id' => 'required|numeric|min:1|max:13',
            'outcomeindicator.*.name' => 'required|string',
            'outcomeindicator.*.targetValue' => 'required|numeric',
            'outcomeindicator.*.targetYear' => 'required|digits:4|integer|min:1900|max:' . (date('Y') + 10),
            'outcomeindicator.*.targetMeasurement' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
            ]);
        }
        try {
            DB::transaction(function () use ($request) {
                $outcome = new MigOutcome;
                $outcome->name = $request->outcome['name'];
                $outcome->subscheme_id = $request->outcome['subscheme_id'];
                $outcome->scheme_id = $request->outcome['scheme_id'];
                $outcome->division_id = $request->outcome['division_id'];
                $outcome->department_id = $request->outcome['department_id'];
                $outcome->save();

                foreach ($request->outcomeindicator as $key => $value) {
                    $outcomeindicator = new MigOutcomeIndicator;
                    $outcomeindicator->name = $value['name'];
                    $outcomeindicator->outcome_id = $outcome->id;
                    $outcomeindicator->subscheme_id = $outcome->subscheme_id;
                    $outcomeindicator->scheme_id = $outcome->scheme_id;
                    $outcomeindicator->division_id = $outcome->division_id;
                    $outcomeindicator->department_id = $outcome->department_id;
                    $outcomeindicator->save();

                    $targetOutcome = new MigOutcomeIndicatorTarget();
                    $targetOutcome->value = $value['targetValue'];
                    $targetOutcome->outcome_id = $outcome->id;
                    $targetOutcome->outcomeindicator_id = $outcomeindicator->id;
                    $targetOutcome->subscheme_id = $outcome->subscheme_id;
                    $targetOutcome->scheme_id = $outcome->scheme_id;
                    $targetOutcome->division_id = $outcome->division_id;
                    $targetOutcome->department_id = $outcome->department_id;
                    $targetOutcome->year = $value['targetYear'];
                    $targetOutcome->measurement = $value['targetMeasurement'];
                    $targetOutcome->save();
                }
            });
        } catch (\Throwable $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e
            ]);
        }
        $outcomes = DB::table('mig_outcomes')->where('subscheme_id', $request->outcome['subscheme_id'])->get();

        return response()->json([
            'status' => 200,
            'outcomes' => $outcomes
        ]);
    }
}
