<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Models\AchievementOutcome;
use App\Models\OutcomeIndicator;
use App\Models\AorAchievementOutcome;

class AchievementOutcomeController extends Controller
{
    public function index($id)
    {
        $achievementOutcome = DB::table('achievement_outcomes AS ao')
        ->leftJoin('verified_reports AS report', 'report.id', '=', 'ao.report_id')
        ->select(
            "ao.*",
            "report.name as reportName",
            "report.year as reportYear",
            "report.verified_btn_flag as reportVerified",
        )
        ->where('ao.subscheme_id', $id)->orderBy('ao.created_at', 'desc')->get();

        return response()->json([
            'status' => 200,
            'result' => $achievementOutcome
        ]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'value' => 'required',
            'outcome_id' => 'required|numeric|min:1',
            'outcomeindicator_id' => 'required|numeric|min:1',
            'subscheme_id' => 'required|numeric|min:1',
            'scheme_id' => 'required|numeric|min:1',
            'division_id' => 'required|numeric|min:1',
            'department_id' => 'required|numeric|min:1|max:13',
            'time' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
            ]);
        }
        $outcomeIndicator = OutcomeIndicator::find($request->outcomeindicator_id);
        if ($outcomeIndicator && $outcomeIndicator->add_btn_flag) {
            try {
                DB::transaction(function () use ($request) {
                    $achievementOutcome = new AchievementOutcome;
                    $achievementOutcome->value = $request->value;
                    $achievementOutcome->outcome_id = $request->outcome_id;
                    $achievementOutcome->outcomeindicator_id = $request->outcomeindicator_id;
                    $achievementOutcome->subscheme_id = $request->subscheme_id;
                    $achievementOutcome->scheme_id = $request->scheme_id;
                    $achievementOutcome->division_id = $request->division_id;
                    $achievementOutcome->department_id = $request->department_id;
                    $achievementOutcome->time = $request->time;
                    $achievementOutcome->save();
                    $outcomeIndicator = OutcomeIndicator::find($request->outcomeindicator_id);
                    $outcomeIndicator->add_btn_flag = false;
                    $outcomeIndicator->save();
                });
            } catch (\Throwable $e) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Something went wrong'
                ]);
            }
            return response()->json([
                'status' => 200,
                'message' => 'success'
            ]);
        } else {
            return response()->json([
                'status' => 403,
                'message' => 'Forbidden'
            ]);
        }
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'value' => 'required',
            'outcome_id' => 'required|numeric|min:1',
            'outcomeindicator_id' => 'required|numeric|min:1',
            'subscheme_id' => 'required|numeric|min:1',
            'scheme_id' => 'required|numeric|min:1',
            'division_id' => 'required|numeric|min:1',
            'department_id' => 'required|numeric|min:1|max:13',
            'year' => 'required|digits:4|integer|min:1900|max:' . (date('Y') + 3),
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
            ]);
        }

        $achievementOutcome = AchievementOutcome::find($id);
        if (is_null($achievementOutcome)) {
            return response()->json([
                'status' => 404,
                'message' => 'Outcome Achievement not found'
            ]);
        }
        $achievementOutcome->value = $request->value;
        $achievementOutcome->outcome_id = $request->outcome_id;
        $achievementOutcome->outcomeindicator_id = $request->outcomeindicator_id;
        $achievementOutcome->subscheme_id = $request->subscheme_id;
        $achievementOutcome->scheme_id = $request->scheme_id;
        $achievementOutcome->division_id = $request->division_id;
        $achievementOutcome->department_id = $request->department_id;
        $achievementOutcome->year = $request->year;
        $achievementOutcome->save();

        return response()->json([
            'status' => 200,
            'message' => 'Outcome Achievement updated successfully.'
        ]);
    }

    public function show($id)
    {
        $achievementOutcome = AchievementOutcome::find($id);
        if (is_null($achievementOutcome)) {
            return $this->sendError('Outcome Achievement not found.');
        }
        return response()->json($achievementOutcome, 200);
    }

    public function ss_outcome_achievement($code)
    {
        $achievementOutcome = DB::table('achievement_outcomes AS ao')
            ->join('divisions AS div', 'div.id', '=', 'ao.division_id')
            ->join('departments AS dept', 'dept.id', '=', 'ao.department_id')
            ->join('sub_schemes AS ss', 'ss.id', '=', 'ao.subscheme_id')
            ->join('outcomes AS out', 'out.id', '=', 'ao.outcome_id')
            ->join('outcome_indicators AS out_i', 'out_i.id', '=', 'ao.outcomeindicator_id')
            ->select(
                "ao.*",
                "div.name as divName",
                "dept.name as deptName",
                "ss.subscheme_code as subCode",
                "ss.name as subName",
                "out.name as outcome",
                "out_i.name as outcome_Indicator"
            )
            ->where('ss.subscheme_code', $code)
            ->orderby('ao.id')->get();

        return response()->json([
            'status' => 200,
            'result' => $achievementOutcome
        ]);
    }

    public function update_outcome_achi_value(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'value' => 'required',
            'time' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
            ]);
        }

        $achievementOutcome = AchievementOutcome::find($id);
        if (is_null($achievementOutcome)) {
            return response()->json([
                'status' => 404,
                'message' => 'Outcome Achievement not found'
            ]);
        }
        if (($achievementOutcome->submitted_status == 'N' && $achievementOutcome->verified_status == 'N') || ($achievementOutcome->submitted_status == 'S' && $achievementOutcome->verified_status == 'R')) {
            $achievementOutcome->value = $request->value;
            $achievementOutcome->time = $request->time;
            $achievementOutcome->save();

            return response()->json([
                'status' => 200,
                'message' => 'Outcome Achievement updated successfully.'
            ]);
        } else {
            return response()->json([
                'status' => 403,
                'message' => 'Forbidden'
            ]);
        }
    }

    public function achievement_outcome_seed()
    {
        $achievementOutcome = AchievementOutcome::orderby('id')->get();

        return response()->json([
            'status' => 200,
            'result' => $achievementOutcome
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\AchievementOutcome  $achievementoutcome
     * @return \Illuminate\Http\Response
     */
    public function destroy(AchievementOutcome $id)
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

    /*---------- Functions for AS ON DATE repoprts -----------*/
    public function aor_index($id)
    {
        $achievementOutcome = DB::table('aor_achievement_outcomes AS ao')
        ->leftJoin('aor_verified_reports AS report', 'report.id', '=', 'ao.report_id')
        ->select(
            "ao.*",
            "report.from_date as reportFromDate",
            "report.to_date as reportToDate",
            "report.year as reportYear",
            "report.verified_btn_flag as reportVerified",
        )
        ->where('ao.subscheme_id', $id)->orderBy('ao.created_at', 'desc')->get();

        return response()->json([
            'status' => 200,
            'result' => $achievementOutcome
        ]);
    }

    public function aor_store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'value' => 'required',
            'outcome_id' => 'required|numeric|min:1',
            'outcomeindicator_id' => 'required|numeric|min:1',
            'subscheme_id' => 'required|numeric|min:1',
            'scheme_id' => 'required|numeric|min:1',
            'division_id' => 'required|numeric|min:1',
            'department_id' => 'required|numeric|min:1|max:13',
            'time' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
            ]);
        }
        $outcomeIndicator = OutcomeIndicator::find($request->outcomeindicator_id);
        if ($outcomeIndicator && $outcomeIndicator->aor_add_btn_flag) {
            try {
                DB::transaction(function () use ($request) {
                    $achievementOutcome = new AorAchievementOutcome;
                    $achievementOutcome->value = $request->value;
                    $achievementOutcome->outcome_id = $request->outcome_id;
                    $achievementOutcome->outcomeindicator_id = $request->outcomeindicator_id;
                    $achievementOutcome->subscheme_id = $request->subscheme_id;
                    $achievementOutcome->scheme_id = $request->scheme_id;
                    $achievementOutcome->division_id = $request->division_id;
                    $achievementOutcome->department_id = $request->department_id;
                    $achievementOutcome->time = $request->time;
                    $achievementOutcome->save();
                    $outcomeIndicator = OutcomeIndicator::find($request->outcomeindicator_id);
                    $outcomeIndicator->aor_add_btn_flag = false;
                    $outcomeIndicator->save();
                });
            } catch (\Throwable $e) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Something went wrong'
                ]);
            }
            return response()->json([
                'status' => 200,
                'message' => 'success'
            ]);
        } else {
            return response()->json([
                'status' => 403,
                'message' => 'Forbidden'
            ]);
        }
    }

    public function aor_update_outcome_achi_value(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'value' => 'required',
            'time' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
            ]);
        }

        $achievementOutcome = AorAchievementOutcome::find($id);
        if (is_null($achievementOutcome)) {
            return response()->json([
                'status' => 404,
                'message' => 'Outcome Achievement not found'
            ]);
        }
        if (($achievementOutcome->submitted_status == 'N' && $achievementOutcome->verified_status == 'N') || ($achievementOutcome->submitted_status == 'S' && $achievementOutcome->verified_status == 'R')) {
            $achievementOutcome->value = $request->value;
            $achievementOutcome->time = $request->time;
            $achievementOutcome->save();

            return response()->json([
                'status' => 200,
                'message' => 'Outcome Achievement updated successfully.'
            ]);
        } else {
            return response()->json([
                'status' => 403,
                'message' => 'Forbidden'
            ]);
        }
    }
}
