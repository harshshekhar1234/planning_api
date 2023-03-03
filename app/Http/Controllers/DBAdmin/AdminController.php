<?php

namespace App\Http\Controllers\DBAdmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Department;
use App\Models\Division;
use App\Models\User;
use App\Models\Social;
use App\Models\Gender;
use App\Models\Sdg_goal;
use App\Models\BudgetEntrySetting;
use App\Models\Scheme;
use App\Models\SubScheme;
use App\Models\Output;
use App\Models\OutputIndicator;
use App\Models\TargetOutput;
use App\Models\Outcome;
use App\Models\OutcomeIndicator;
use App\Models\TargetOutcome;
use App\Models\SubschemeGender;
use App\Models\SubschemeSocial;
use App\Models\SubschemeSdg;
use App\Models\FinancialOutlay;
use App\Models\AorVerifiedReport;
use App\Models\AorSubSchemeVerificationRemark;
use App\Models\AorRiskRemark;
use App\Models\AorAchievementOutput;
use App\Models\AorAchievementOutcome;
use App\Models\AorSubSchemeExpenditure;
use App\Models\VerifiedReport;
use App\Models\SubSchemeVerificationRemark;
use App\Models\RiskRemark;
use App\Models\AchievementOutput;
use App\Models\AchievementOutcome;
use App\Models\SubSchemeExpenditure;
use App\Models\MigScheme;
use App\Models\MigSubScheme;
use App\Models\MigOutput;
use App\Models\MigOutputIndicator;
use App\Models\MigOutputIndicatorTarget;
use App\Models\MigOutcome;
use App\Models\MigOutcomeIndicator;
use App\Models\MigOutcomeIndicatorTarget;
use App\Models\MigSubSchemeGender;
use App\Models\MigSubSchemeSocial;
use App\Models\MigSubSchemeSdg;
use App\Models\MigFinancialOutlay;
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

    public function all_table_backup()
    {
        //all other tables
        $departments = Department::orderby('id')->get();
        $divisions = Division::orderby('id')->get();
        $users = User::orderby('id')->get();
        $socials = Social::orderby('id')->get();
        $genders = Gender::orderby('id')->get();
        $sdg_goals = Sdg_goal::orderby('id')->get();
        $budget_entry_settings = BudgetEntrySetting::orderby('id')->get();
        $schemes = Scheme::orderby('id')->get();
        $sub_schemes = SubScheme::orderby('id')->get();
        $outputs = Output::orderby('id')->get();
        $output_indicators = OutputIndicator::orderby('id')->get();
        $target_outputs = TargetOutput::orderby('id')->get();
        $outcomes = Outcome::orderby('id')->get();
        $outcome_indicators = OutcomeIndicator::orderby('id')->get();
        $target_outcomes = TargetOutcome::orderby('id')->get();
        $subscheme_gender = SubschemeGender::orderby('id')->get();
        $subscheme_social = SubschemeSocial::orderby('id')->get();
        $subscheme_sdgs = SubschemeSdg::orderby('id')->get();
        $financial_outlays = FinancialOutlay::orderby('id')->get();
        $aor_verified_reports = AorVerifiedReport::orderby('id')->get();
        $aor_sub_scheme_verification_remarks = AorSubSchemeVerificationRemark::orderby('id')->get();
        $aor_risk_remarks = AorRiskRemark::orderby('id')->get();
        $aor_achievement_outputs = AorAchievementOutput::orderby('id')->get();
        $aor_achievement_outcomes = AorAchievementOutcome::orderby('id')->get();
        $aor_sub_scheme_expenditures = AorSubSchemeExpenditure::orderby('id')->get();
        $verified_reports = VerifiedReport::orderby('id')->get();
        $sub_scheme_verification_remarks = SubSchemeVerificationRemark::orderby('id')->get();
        $risk_remarks = RiskRemark::orderby('id')->get();
        $achievement_outputs = AchievementOutput::orderby('id')->get();
        $achievement_outcomes = AchievementOutcome::orderby('id')->get();
        $sub_scheme_expenditures = SubSchemeExpenditure::orderby('id')->get();
        //migration tables
        $mig_schemes = MigScheme::orderby('id')->get();
        $mig_sub_schemes = MigSubScheme::orderby('id')->get();
        $mig_outputs = MigOutput::orderby('id')->get();
        $mig_output_indicators = MigOutputIndicator::orderby('id')->get();
        $mig_output_indicator_targets = MigOutputIndicatorTarget::orderby('id')->get();
        $mig_outcomes = MigOutcome::orderby('id')->get();
        $mig_outcome_indicators = MigOutcomeIndicator::orderby('id')->get();
        $mig_outcome_indicator_targets = MigOutcomeIndicatorTarget::orderby('id')->get();
        $mig_sub_scheme_genders = MigSubSchemeGender::orderby('id')->get();
        $mig_sub_scheme_socials = MigSubSchemeSocial::orderby('id')->get();
        $mig_sub_scheme_sdgs = MigSubSchemeSdg::orderby('id')->get();
        $mig_financial_outlays = MigFinancialOutlay::orderby('id')->get();

        return response()->json([
            'status' => 200,
            'departments' => $departments,
            'divisions' => $divisions,
            'users' => $users,
            'socials' => $socials,
            'genders' => $genders,
            'sdg_goals' => $sdg_goals,
            'budget_entry_settings' => $budget_entry_settings,
            'schemes' => $schemes,
            'sub_schemes' => $sub_schemes,
            'outputs' => $outputs,
            'output_indicators' => $output_indicators,
            'target_outputs' => $target_outputs,
            'outcomes' => $outcomes,
            'outcome_indicators' => $outcome_indicators,
            'target_outcomes' => $target_outcomes,
            'subscheme_gender' => $subscheme_gender,
            'subscheme_social' => $subscheme_social,
            'subscheme_sdgs' => $subscheme_sdgs,
            'financial_outlays' => $financial_outlays,
            'aor_verified_reports' => $aor_verified_reports,
            'aor_sub_scheme_verification_remarks' => $aor_sub_scheme_verification_remarks,
            'aor_risk_remarks' => $aor_risk_remarks,
            'aor_achievement_outputs' => $aor_achievement_outputs,
            'aor_achievement_outcomes' => $aor_achievement_outcomes,
            'aor_sub_scheme_expenditures' => $aor_sub_scheme_expenditures,
            'verified_reports' => $verified_reports,
            'sub_scheme_verification_remarks' => $sub_scheme_verification_remarks,
            'risk_remarks' => $risk_remarks,
            'achievement_outputs' => $achievement_outputs,
            'achievement_outcomes' => $achievement_outcomes,
            'sub_scheme_expenditures' => $sub_scheme_expenditures,
            'mig_schemes' => $mig_schemes,
            'mig_sub_schemes' => $mig_sub_schemes,
            'mig_outputs' => $mig_outputs,
            'mig_output_indicators' => $mig_output_indicators,
            'mig_output_indicator_targets' => $mig_output_indicator_targets,
            'mig_outcomes' => $mig_outcomes,
            'mig_outcome_indicators' => $mig_outcome_indicators,
            'mig_outcome_indicator_targets' => $mig_outcome_indicator_targets,
            'mig_sub_scheme_genders' => $mig_sub_scheme_genders,
            'mig_sub_scheme_socials' => $mig_sub_scheme_socials,
            'mig_sub_scheme_sdgs' => $mig_sub_scheme_sdgs,
            'mig_financial_outlays' => $mig_financial_outlays,
        ]);
    }
}
