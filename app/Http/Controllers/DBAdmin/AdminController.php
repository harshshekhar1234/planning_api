<?php

namespace App\Http\Controllers\DBAdmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Scheme;
use App\Models\MigScheme;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;

class AdminController extends Controller
{
    public function change_scheme_id(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'old_state_code' => 'required|string|size:4',
            'old_center_code' => 'required|string|size:4',
            'new_state_code' => 'required|string|size:4',
            'new_center_code' => 'required|string|size:4',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
            ]);
        }
        $old_scheme = Scheme::where([
            ['state_code',$request->old_state_code],
            ['center_code',$request->old_center_code]
        ])->first();
        if (is_null($old_scheme)) {
            return response()->json([
                'status' => 404,
                'message' => 'Scheme with State Code =  '. $request->old_state_code . ' and Center Code = ' . $request->old_center_code . ' not found.'
            ]);
        }
        $new_scheme = Scheme::where([
            ['state_code',$request->new_state_code],
            ['center_code',$request->new_center_code]
        ])->first();
        if (is_null($new_scheme)) {
            return response()->json([
                'status' => 404,
                'message' => 'Scheme with State Code =  '. $request->new_state_code . ' and Center Code = ' . $request->new_center_code . ' not found.'
            ]);
        }
        try {
            DB::transaction(function () use ($old_scheme, $new_scheme) {
                DB::table('achievement_outcomes')->where(['scheme_id' => $old_scheme->id])->update(['scheme_id' => $new_scheme->id]);
                DB::table('achievement_outputs')->where(['scheme_id' => $old_scheme->id])->update(['scheme_id' => $new_scheme->id]);
                DB::table('aor_achievement_outcomes')->where(['scheme_id' => $old_scheme->id])->update(['scheme_id' => $new_scheme->id]);
                DB::table('aor_achievement_outputs')->where(['scheme_id' => $old_scheme->id])->update(['scheme_id' => $new_scheme->id]);
                DB::table('aor_risk_remarks')->where(['scheme_id' => $old_scheme->id])->update(['scheme_id' => $new_scheme->id]);
                DB::table('aor_sub_scheme_expenditures')->where(['scheme_id' => $old_scheme->id])->update(['scheme_id' => $new_scheme->id]);
                DB::table('financial_outlays')->where(['scheme_id' => $old_scheme->id])->update(['scheme_id' => $new_scheme->id]);
                DB::table('outcome_indicators')->where(['scheme_id' => $old_scheme->id])->update(['scheme_id' => $new_scheme->id]);
                DB::table('outcomes')->where(['scheme_id' => $old_scheme->id])->update(['scheme_id' => $new_scheme->id]);
                DB::table('output_indicators')->where(['scheme_id' => $old_scheme->id])->update(['scheme_id' => $new_scheme->id]);
                DB::table('outputs')->where(['scheme_id' => $old_scheme->id])->update(['scheme_id' => $new_scheme->id]);
                DB::table('risk_remarks')->where(['scheme_id' => $old_scheme->id])->update(['scheme_id' => $new_scheme->id]);
                DB::table('sub_scheme_expenditures')->where(['scheme_id' => $old_scheme->id])->update(['scheme_id' => $new_scheme->id]);
                DB::table('sub_schemes')->where(['scheme_id' => $old_scheme->id])->update(['scheme_id' => $new_scheme->id]);
                DB::table('target_outcomes')->where(['scheme_id' => $old_scheme->id])->update(['scheme_id' => $new_scheme->id]);
                DB::table('target_outputs')->where(['scheme_id' => $old_scheme->id])->update(['scheme_id' => $new_scheme->id]);
            });
        } catch (QueryException $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e
            ]);
        }
        return response()->json([
            'status' => 200,
            'message' => 'Scheme_id updated successfully.'
        ]);
    }

    public function change_mig_scheme_id(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'old_state_code' => 'required|string|size:4',
            'old_center_code' => 'required|string|size:4',
            'new_state_code' => 'required|string|size:4',
            'new_center_code' => 'required|string|size:4',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
            ]);
        }
        $old_scheme = MigScheme::where([
            ['state_code',$request->old_state_code],
            ['center_code',$request->old_center_code]
        ])->first();
        if (is_null($old_scheme)) {
            return response()->json([
                'status' => 404,
                'message' => 'Scheme with State Code =  '. $request->old_state_code . ' and Center Code = ' . $request->old_center_code . ' not found.'
            ]);
        }
        $new_scheme = MigScheme::where([
            ['state_code',$request->new_state_code],
            ['center_code',$request->new_center_code]
        ])->first();
        if (is_null($new_scheme)) {
            return response()->json([
                'status' => 404,
                'message' => 'Scheme with State Code =  '. $request->new_state_code . ' and Center Code = ' . $request->new_center_code . ' not found.'
            ]);
        }
        try {
            DB::transaction(function () use ($old_scheme, $new_scheme) {
                DB::table('mig_financial_outlays')->where(['scheme_id' => $old_scheme->id])->update(['scheme_id' => $new_scheme->id]);
                DB::table('mig_outcome_indicator_targets')->where(['scheme_id' => $old_scheme->id])->update(['scheme_id' => $new_scheme->id]);
                DB::table('mig_outcome_indicators')->where(['scheme_id' => $old_scheme->id])->update(['scheme_id' => $new_scheme->id]);
                DB::table('mig_outcomes')->where(['scheme_id' => $old_scheme->id])->update(['scheme_id' => $new_scheme->id]);
                DB::table('mig_output_indicator_targets')->where(['scheme_id' => $old_scheme->id])->update(['scheme_id' => $new_scheme->id]);
                DB::table('mig_output_indicators')->where(['scheme_id' => $old_scheme->id])->update(['scheme_id' => $new_scheme->id]);
                DB::table('mig_outputs')->where(['scheme_id' => $old_scheme->id])->update(['scheme_id' => $new_scheme->id]);
                DB::table('mig_sub_schemes')->where(['scheme_id' => $old_scheme->id])->update(['scheme_id' => $new_scheme->id]);
            });
        } catch (QueryException $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e
            ]);
        }
        return response()->json([
            'status' => 200,
            'message' => 'Scheme_id updated successfully.'
        ]);
    }
}
