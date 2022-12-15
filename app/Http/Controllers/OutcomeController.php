<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Models\Outcome;
use App\Models\OutcomeIndicator;
use App\Models\TargetOutcome;

class OutcomeController extends Controller
{
    public function index($id)
    {
        $outcomes = DB::table('outcomes')->where('subscheme_id', $id)->get();
        return response()->json($outcomes, 200);
    }

    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'subscheme_id' => 'required|numeric',
            'scheme_id' => 'required|numeric|min:1',
            'division_id' => 'required|numeric|min:1',
            'department_id' => 'required|numeric|min:1|max:13',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
            ]);
        }

        $outcome = new Outcome;
        $outcome->name = $request->name;
        $outcome->subscheme_id = $request->subscheme_id;
        $outcome->scheme_id = $request->scheme_id;
        $outcome->division_id = $request->division_id;
        $outcome->department_id = $request->department_id;
        $outcome->save();

        return response()->json([
            'status' => 200,
            'message' => 'success'
        ]);
    }

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

        $outcome = Outcome::find($id);
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

    public function show($id)
    {
        $outcome = Outcome::find($id);
        if (is_null($outcome)) {
            return $this->sendError('Outcome not found.');
        }
        return response()->json($outcome, 200);
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
            'outcomeindicator.*.targetYear' => 'required|digits:4|integer|min:1900|max:' . (date('Y') + 3),
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
                $outcome = new Outcome;
                $outcome->name = $request->outcome['name'];
                $outcome->subscheme_id = $request->outcome['subscheme_id'];
                $outcome->scheme_id = $request->outcome['scheme_id'];
                $outcome->division_id = $request->outcome['division_id'];
                $outcome->department_id = $request->outcome['department_id'];
                $outcome->save();

                foreach ($request->outcomeindicator as $key => $value) {
                    $outcomeindicator = new OutcomeIndicator;
                    $outcomeindicator->name = $value['name'];
                    $outcomeindicator->outcome_id = $outcome->id;
                    $outcomeindicator->subscheme_id = $outcome->subscheme_id;
                    $outcomeindicator->scheme_id = $outcome->scheme_id;
                    $outcomeindicator->division_id = $outcome->division_id;
                    $outcomeindicator->department_id = $outcome->department_id;
                    $outcomeindicator->save();

                    $targetOutcome = new TargetOutcome;
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
                'message' => 'Something went wrong'
            ]);
        }
        $outcomes = DB::table('outcomes')->where('subscheme_id', $request->outcome['subscheme_id'])->get();

        return response()->json([
            'status' => 200,
            'outcomes' => $outcomes
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Outcome $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Outcome $id)
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
}
