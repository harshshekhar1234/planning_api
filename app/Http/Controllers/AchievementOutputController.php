<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Models\AchievementOutput;
use App\Models\OutputIndicator;
use App\Models\AorAchievementOutput;

class AchievementOutputController extends Controller
{
    public function index($id)
    {
        //$achievementOutput = DB::table('achievement_outputs')->where('subscheme_id', $id)->orderBy('created_at', 'desc')->get();
        $achievementOutput = DB::table('achievement_outputs AS aop')
        ->leftJoin('verified_reports AS report', 'report.id', '=', 'aop.report_id')
        ->select(
            "aop.*",
            "report.name as reportName",
            "report.year as reportYear",
            "report.verified_btn_flag as reportVerified",
        )
        ->where('aop.subscheme_id', $id)->orderBy('aop.created_at', 'desc')->get();
        return response()->json([
            'status' => 200,
            'result' => $achievementOutput
        ]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'value' => 'required',
            'output_id' => 'required|numeric|min:1',
            'outputindicator_id' => 'required|numeric|min:1',
            'subscheme_id' => 'required|numeric|min:1',
            'scheme_id' => 'required|numeric|min:1',
            'division_id' => 'required|numeric|min:1',
            'department_id' => 'required|numeric|min:1|max:13',
            'time' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
            ]);
        }
        $outputIndicator = OutputIndicator::find($request->outputindicator_id);
        if ($outputIndicator && $outputIndicator->add_btn_flag) {
            try {
                DB::transaction(function () use ($request) {
                    $achievementOutput = new AchievementOutput;
                    $achievementOutput->value = $request->value;
                    $achievementOutput->output_id = $request->output_id;
                    $achievementOutput->outputindicator_id = $request->outputindicator_id;
                    $achievementOutput->subscheme_id = $request->subscheme_id;
                    $achievementOutput->scheme_id = $request->scheme_id;
                    $achievementOutput->division_id = $request->division_id;
                    $achievementOutput->department_id = $request->department_id;
                    $achievementOutput->time = $request->time;
                    $achievementOutput->save();
                    $outputIndicator = OutputIndicator::find($request->outputindicator_id);
                    $outputIndicator->add_btn_flag = false;
                    $outputIndicator->save();
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
            'output_id' => 'required|numeric|min:1',
            'outputindicator_id' => 'required|numeric|min:1',
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

        $achievementOutput = AchievementOutput::find($id);
        if (is_null($achievementOutput)) {
            return response()->json([
                'status' => 404,
                'message' => 'Output Achievement not found'
            ]);
        }
        $achievementOutput->value = $request->value;
        $achievementOutput->output_id = $request->output_id;
        $achievementOutput->outputindicator_id = $request->outputindicator_id;
        $achievementOutput->subscheme_id = $request->subscheme_id;
        $achievementOutput->scheme_id = $request->scheme_id;
        $achievementOutput->division_id = $request->division_id;
        $achievementOutput->department_id = $request->department_id;
        $achievementOutput->year = $request->year;
        $achievementOutput->save();

        return response()->json([
            'status' => 200,
            'message' => 'Output Achievement updated successfully.'
        ]);
    }

    public function show($id)
    {
        $achievementOutput = AchievementOutput::find($id);
        if (is_null($achievementOutput)) {
            return $this->sendError('Output Achievement not found.');
        }
        return response()->json($achievementOutput, 200);
    }

    public function ss_output_achievement($code)
    {
        $achievementOutput = DB::table('achievement_outputs AS aop')
            ->join('divisions AS div', 'div.id', '=', 'aop.division_id')
            ->join('departments AS dept', 'dept.id', '=', 'aop.department_id')
            ->join('sub_schemes AS ss', 'ss.id', '=', 'aop.subscheme_id')
            ->join('outputs AS out', 'out.id', '=', 'aop.output_id')
            ->join('output_indicators AS out_i', 'out_i.id', '=', 'aop.outputindicator_id')
            ->select(
                "aop.*",
                "div.name as divName",
                "dept.name as deptName",
                "ss.subscheme_code as subCode",
                "ss.name as subName",
                "out.name as output",
                "out_i.name as output_Indicator"
            )
            ->where('ss.subscheme_code', $code)
            ->orderby('aop.id')->get();

        return response()->json([
            'status' => 200,
            'result' => $achievementOutput
        ]);
    }

    public function update_output_achi_value(Request $request, $id)
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

        $achievementOutput = AchievementOutput::find($id);
        if (is_null($achievementOutput)) {
            return response()->json([
                'status' => 404,
                'message' => 'Output Achievement not found'
            ]);
        }
        if (($achievementOutput->submitted_status == 'N' && $achievementOutput->verified_status == 'N') || ($achievementOutput->submitted_status == 'S' && $achievementOutput->verified_status == 'R')) {
            $achievementOutput->value = $request->value;
            $achievementOutput->time = $request->time;
            $achievementOutput->save();

            return response()->json([
                'status' => 200,
                'message' => 'Output Achievement updated successfully.'
            ]);
        } else {
            return response()->json([
                'status' => 403,
                'message' => 'Forbidden'
            ]);
        }
    }

    public function achievement_output_seed()
    {
        $achievementOutput = AchievementOutput::orderby('id')->get();

        return response()->json([
            'status' => 200,
            'result' => $achievementOutput
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\AchievementOutput  $achievementOutput
     * @return \Illuminate\Http\Response
     */
    public function destroy(AchievementOutput $id)
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
        $achievementOutput = DB::table('aor_achievement_outputs AS aop')
        ->leftJoin('aor_verified_reports AS report', 'report.id', '=', 'aop.report_id')
        ->select(
            "aop.*",
            "report.from_date as reportFromDate",
            "report.to_date as reportToDate",
            "report.year as reportYear",
            "report.verified_btn_flag as reportVerified",
        )
        ->where('aop.subscheme_id', $id)->orderBy('aop.created_at', 'desc')->get();
        return response()->json([
            'status' => 200,
            'result' => $achievementOutput
        ]);
    }

    public function aor_store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'value' => 'required',
            'output_id' => 'required|numeric|min:1',
            'outputindicator_id' => 'required|numeric|min:1',
            'subscheme_id' => 'required|numeric|min:1',
            'scheme_id' => 'required|numeric|min:1',
            'division_id' => 'required|numeric|min:1',
            'department_id' => 'required|numeric|min:1|max:13',
            'time' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
            ]);
        }
        $outputIndicator = OutputIndicator::find($request->outputindicator_id);
        if ($outputIndicator && $outputIndicator->aor_add_btn_flag) {
            try {
                DB::transaction(function () use ($request) {
                    $achievementOutput = new AorAchievementOutput;
                    $achievementOutput->value = $request->value;
                    $achievementOutput->output_id = $request->output_id;
                    $achievementOutput->outputindicator_id = $request->outputindicator_id;
                    $achievementOutput->subscheme_id = $request->subscheme_id;
                    $achievementOutput->scheme_id = $request->scheme_id;
                    $achievementOutput->division_id = $request->division_id;
                    $achievementOutput->department_id = $request->department_id;
                    $achievementOutput->time = $request->time;
                    $achievementOutput->save();
                    $outputIndicator = OutputIndicator::find($request->outputindicator_id);
                    $outputIndicator->aor_add_btn_flag = false;
                    $outputIndicator->save();
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

    public function aor_update_output_achi_value(Request $request, $id)
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

        $achievementOutput = AorAchievementOutput::find($id);
        if (is_null($achievementOutput)) {
            return response()->json([
                'status' => 404,
                'message' => 'Output Achievement not found'
            ]);
        }
        if (($achievementOutput->submitted_status == 'N' && $achievementOutput->verified_status == 'N') || ($achievementOutput->submitted_status == 'S' && $achievementOutput->verified_status == 'R')) {
            $achievementOutput->value = $request->value;
            $achievementOutput->time = $request->time;
            $achievementOutput->save();

            return response()->json([
                'status' => 200,
                'message' => 'Output Achievement updated successfully.'
            ]);
        } else {
            return response()->json([
                'status' => 403,
                'message' => 'Forbidden'
            ]);
        }
    }
}
