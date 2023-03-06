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
use Illuminate\Support\Facades\Http;

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

    public function update_scheme_center_code()
    {
        try {
            DB::transaction(function () {
                Scheme::where(['center_code' => '0000'])->update(['center_code' => 'NAPL']);
            });
        } catch (QueryException $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e
            ]);
        }
        return response()->json([
            'status' => 200,
            'message' => 'Center Code for all schemes updated successfully.'
        ]);
    }

    public function migrate_all_schemes($id, $fin_year)
    {
        $division = Division::find($id);
        $demand_no = $division->demand_no;
        $demand_no = sprintf("%02d", $demand_no);
        $response = Http::acceptJson()->get('http://jkuber.jharkhand.gov.in/outcomebudgetservice/OutcomeScheme.svc/getSubschemeWiseOutcomeBudgetOutlay?demand='.$demand_no.'&finyear='. $fin_year.'&subscheme=&pwd='.$this->api_password);
        $api_schemes = json_decode($response);     
        $api_schemes = json_decode($api_schemes->getSubschemeWiseOutcomeBudgetOutlayResult);
        if($api_schemes == null)
        {
            return response()->json([
                'status' => 404,
                'error' => "Connection Error",
            ]);
        }
        $data = [];
        $map = collect($api_schemes)->map(function ($items) use ($data, $division, $fin_year) {
            $data['state_code'] = $items->STATESCHEMECODE;
            $data['state_name'] = ($items->STATESCHEMENAME == null) ? $items->STATESCHEMECODE : $items->STATESCHEMENAME;
            $data['center_code'] = $items->CPSMSSCHEME_CODE;
            $data['center_name'] = ($items->GOISCHEMENAME == null) ? $items->CPSMSSCHEME_CODE : $items->GOISCHEMENAME;
            $data['department_id'] = $division->department_id;
            $data['division_id'] = $division->id;
            $data['fin_year'] = $fin_year;
            $data['subscheme_code'] = $items->SUB_SCHEMECODE;
            $data['name'] = $items->SUB_SCHEMEENAME;
            $data['state_share'] = $items->S_BE / 100000;
            $data['center_share'] = $items->C_BE / 100000;
            return $data;
        });
        $api_schemes_unique = collect($map)->unique(function ($item) {
            return $item['state_code'] . $item['center_code'];
        });
        $api_schemes_unique = $api_schemes_unique->map(function ($item, $key) use ($map) {
            $item = collect($item)->forget('subscheme_code')->forget('name')
                    ->forget('state_share')->forget('center_share');
            return $item;
        });
        $local_schemes = MigScheme::where('division_id', $id)->get();
        $migrated_schemes = collect($api_schemes_unique)->filter(function ($value, $key) use ($local_schemes) {
            return $local_schemes->contains(function ($lvalue, $lkey) use ($value, $key) {
                return ($lvalue['state_code'] == $value['state_code'] &&  $lvalue['center_code'] == $value['center_code']);
            });
        });
        $migrated_schemes = $migrated_schemes->map(function ($item, $key) use ($local_schemes) {
            $scheme = $local_schemes->where('state_code', $item['state_code'])->where('center_code', $item['center_code'])->first();
            if ($scheme) {
                $item['id'] = $scheme->id;
                $item['created_at'] = $scheme->created_at;
                $item['updated_at'] = $scheme->updated_at;
                $item['fin_year'] = $scheme->fin_year;
            } else {
                $item['id'] = null;
            }
            return $item;
        });
        $local_subschemes = MigSubScheme::where('division_id', $id)->get();
        $migrated_subschemes = collect($map)->filter(function ($value, $key) use ($local_subschemes) {
            return $local_subschemes->contains(function ($lvalue, $lkey) use ($value, $key) {
                return $lvalue['subscheme_code'] == $value['subscheme_code'];
            });
        });
        $migrated_subschemes = $migrated_subschemes->map(function ($item, $key) use ($local_subschemes) {
            $subscheme = $local_subschemes->where('subscheme_code', $item['subscheme_code'])->first();
            if ($subscheme) {
                $item['id'] = $subscheme->id;
                $item['scheme_id'] = $subscheme->scheme_id;
                $item['risk_remarks'] = $subscheme->risk_remarks;
                $item['initial_remarks'] = $subscheme->initial_remarks;
                $item['created_at'] = $subscheme->created_at;
                $item['updated_at'] = $subscheme->updated_at;
                $item['fin_year'] = $subscheme->fin_year;
            } else {
                $item['id'] = null;
            }
            return $item;
        });
        $migrated_subschemes = $migrated_subschemes->map(function ($item, $key) {
            $outputs = MigOutput::where('subscheme_id', $item['id'])->orderBy('id')->get();
            if (sizeof($outputs) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Output Found'
                ]);
            }
            foreach ($outputs as $output) {
                $output->outputindicators = MigOutputIndicator::where('output_id', $output->id)->orderBy('id')->get();
                if (sizeof($output->outputindicators) == 0) {
                    return response()->json([
                        'status' => 404,
                        'message' => 'No Output Indicator Found for Output'
                    ]);
                }
                foreach ($output->outputindicators as $outputindicator) {
                    $outputindicator->target_outputs = MigOutputIndicatorTarget::where('outputindicator_id', $outputindicator->id)->orderBy('id')->get();
                    if (sizeof($outputindicator->target_outputs) == 0) {
                        return response()->json([
                            'status' => 404,
                            'message' => 'Target Not Set for Output Indicator'
                        ]);
                    }
                }
            }
            $outcomes = MigOutcome::where('subscheme_id', $item['id'])->orderBy('id')->get();
            if (sizeof($outcomes) == 0) {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Outcome Found'
                ]);
            }
            foreach ($outcomes as $outcome) {
                $outcome->outcomeindicators = MigOutcomeIndicator::where('outcome_id', $outcome->id)->orderBy('id')->get();
                if (sizeof($outcome->outcomeindicators) == 0) {
                    return response()->json([
                        'status' => 404,
                        'message' => 'No Outcome Indicator Found for Outcome'
                    ]);
                }
                foreach ($outcome->outcomeindicators as $outcomeindicator) {
                    $outcomeindicator->target_outcomes = MigOutcomeIndicatorTarget::where('outcomeindicator_id', $outcomeindicator->id)->orderBy('id')->get();
                    if (sizeof($outcomeindicator->target_outcomes) == 0) {
                        return response()->json([
                            'status' => 404,
                            'message' => 'Target Not Set for Outcome Indicator'
                        ]);
                    }
                }
            }
            $genders = MigSubSchemeGender::where('subscheme_id', $item['id'])->get();
            $socials = MigSubSchemeSocial::where('subscheme_id', $item['id'])->get();
            $sdg = MigSubSchemeSdg::where('subscheme_id', $item['id'])->get();
            $financial_outlays = MigFinancialOutlay::where('subscheme_id', $item['id'])->first();
            $financial_outlays->state_share = $item['state_share'];
            $financial_outlays->center_share = $item['center_share'];
            $item['outputs'] = $outputs;
            $item['outcomes'] = $outcomes;
            $item['genders'] = $genders;
            $item['socials'] = $socials;
            $item['sdg'] = $sdg;
            $item['financial_outlays'] = $financial_outlays;
            return $item;
        });
        $migrated_schemes = $migrated_schemes->map(function ($item, $key) use ($migrated_subschemes) {
            $subschemes = collect($migrated_subschemes)->filter(function ($value, $skey) use ($item) {
                return ($value['state_code'] == $item['state_code'] &&  $value['center_code'] == $item['center_code']);
            });
            $subschemes = collect($subschemes)->map(function ($sitem, $key) use ($item) {
                $sitem = collect($sitem)->forget('state_name')->forget('center_name')->forget('state_code')->forget('center_code');
                return $sitem;
            });
            $item['subschemes'] = $subschemes->values()->all();
            return $item;
        });
        $migrated_schemes = $migrated_schemes->values()->all();
        // return response()->json([
        //     'status' => 200,
        //     'migrated_schemes' => $migrated_schemes,
        // ]);
        try {
            DB::transaction(function () use ($migrated_schemes) {
                foreach ($migrated_schemes as $migrated_scheme) {
                    $scheme = new Scheme();
                    $scheme->state_code = $migrated_scheme['state_code'];
                    $scheme->state_name = $migrated_scheme['state_name'];
                    $scheme->center_code = $migrated_scheme['center_code'];
                    $scheme->center_name = $migrated_scheme['center_name'];
                    $scheme->department_id = $migrated_scheme['department_id'];
                    $scheme->division_id = $migrated_scheme['division_id'];
                    $scheme->created_at = $migrated_scheme['created_at'];
                    $scheme->updated_at = $migrated_scheme['updated_at'];
                    $scheme->fin_year = $migrated_scheme['fin_year'];
                    $scheme->save();
                    foreach ($migrated_scheme['subschemes'] as $migrated_subscheme) {
                        $subScheme = new SubScheme();
                        $subScheme->name = $migrated_subscheme['name'];
                        $subScheme->subscheme_code = $migrated_subscheme['subscheme_code'];
                        $subScheme->scheme_id = $scheme->id;
                        $subScheme->division_id = $migrated_subscheme['division_id'];
                        $subScheme->department_id = $migrated_subscheme['department_id'];
                        $subScheme->risk_remarks = $migrated_subscheme['risk_remarks'];
                        $subScheme->initial_remarks = $migrated_subscheme['initial_remarks'];
                        $subScheme->created_at = $migrated_subscheme['created_at'];
                        $subScheme->updated_at = $migrated_subscheme['updated_at'];
                        $subScheme->fin_year = $migrated_subscheme['fin_year'];
                        $subScheme->save();

                        $financialOutlay = new FinancialOutlay;
                        $financialOutlay->state_share = $migrated_subscheme['financial_outlays']['state_share'];
                        $financialOutlay->center_share =$migrated_subscheme['financial_outlays']['center_share'];
                        $financialOutlay->department_id = $migrated_subscheme['financial_outlays']['department_id'];
                        $financialOutlay->division_id = $migrated_subscheme['financial_outlays']['division_id'];
                        $financialOutlay->scheme_id = $scheme->id;
                        $financialOutlay->subscheme_id = $subScheme->id;
                        $financialOutlay->created_at = $migrated_subscheme['financial_outlays']['created_at'];
                        $financialOutlay->updated_at = $migrated_subscheme['financial_outlays']['updated_at'];
                        $financialOutlay->fin_year = $migrated_subscheme['financial_outlays']['fin_year'];
                        $financialOutlay->save();
                        foreach ($migrated_subscheme['socials'] as $social) {
                            $dataSocial[] = [
                                'subscheme_id' => $subScheme->id,
                                'social_id' => $social['social_id'],
                                'created_at' => $social['created_at'],
                                'updated_at' => $social['updated_at']
                            ];
                        }
                        SubschemeSocial::insert($dataSocial);
                        foreach ($migrated_subscheme['genders'] as $gender) {
                            $dataGender[] = [
                                'subscheme_id' => $subScheme->id,
                                'gender_id' => $gender['gender_id'],
                                'created_at' => $gender['created_at'],
                                'updated_at' => $gender['updated_at'],
                            ];
                        }
                        SubschemeGender::insert($dataGender);

                        foreach ($migrated_subscheme['sdg'] as $sdg) {
                            $dataSdg[] = [
                                'subscheme_id' => $subScheme->id,
                                'sdg_id' => $sdg['sdg_id'],
                                'created_at' => $sdg['created_at'],
                                'updated_at' => $sdg['updated_at'],
                            ];
                        }
                        SubschemeSdg::insert($dataSdg);
                        foreach ($migrated_subscheme['outputs'] as $output_key => $output_value) {
                            $output = new Output();
                            $output->name = $output_value['name'];
                            $output->subscheme_id = $subScheme->id;
                            $output->scheme_id = $scheme->id;
                            $output->division_id = $output_value['division_id'];
                            $output->department_id = $output_value['department_id'];
                            $output->created_at = $output_value['created_at'];
                            $output->updated_at = $output_value['updated_at'];
                            $output->fin_year = $output_value['fin_year'];
                            $output->save();
                            foreach ($output_value['outputindicators'] as $outputIndicator_key => $outputIndicator_value) {
                                $outputindicator = new OutputIndicator();
                                $outputindicator->name = $outputIndicator_value['name'];
                                $outputindicator->output_id = $output->id;
                                $outputindicator->subscheme_id = $subScheme->id;
                                $outputindicator->scheme_id = $scheme->id;
                                $outputindicator->division_id = $outputIndicator_value['division_id'];
                                $outputindicator->department_id = $outputIndicator_value['department_id'];
                                $outputindicator->created_at = $outputIndicator_value['created_at'];
                                $outputindicator->updated_at = $outputIndicator_value['updated_at'];
                                $outputindicator->fin_year = $outputIndicator_value['fin_year'];
                                $outputindicator->save();
                                foreach ($outputIndicator_value['target_outputs'] as $targetOutput_key => $targetOutput_value) 
                                {
                                    $targetOutput = new TargetOutput();
                                    $targetOutput->value = $targetOutput_value['value'];
                                    $targetOutput->output_id = $output->id;
                                    $targetOutput->outputindicator_id = $outputindicator->id;
                                    $targetOutput->subscheme_id = $subScheme->id;
                                    $targetOutput->scheme_id = $scheme->id;
                                    $targetOutput->division_id = $targetOutput_value['division_id'];
                                    $targetOutput->department_id = $targetOutput_value['department_id'];
                                    $targetOutput->year = 2023;
                                    $targetOutput->measurement = $targetOutput_value['measurement'];
                                    $targetOutput->created_at = $targetOutput_value['created_at'];
                                    $targetOutput->updated_at = $targetOutput_value['updated_at'];
                                    $targetOutput->save();
                                }
                            }
                        }
                        foreach ($migrated_subscheme['outcomes'] as $outcome_key => $outcome_value) {
                            $outcome = new Outcome;
                            $outcome->name = $outcome_value['name'];
                            $outcome->subscheme_id = $subScheme->id;
                            $outcome->scheme_id = $scheme->id;
                            $outcome->division_id = $outcome_value['division_id'];
                            $outcome->department_id = $outcome_value['department_id'];
                            $outcome->created_at = $outcome_value['created_at'];
                            $outcome->updated_at = $outcome_value['updated_at'];
                            $outcome->fin_year = $outcome_value['fin_year'];
                            $outcome->save();

                            foreach ($outcome_value['outcomeindicators'] as $outcomeIndicator_key => $outcomeIndicator_value) {
                                $outcomeindicator = new OutcomeIndicator;
                                $outcomeindicator->name = $outcomeIndicator_value['name'];
                                $outcomeindicator->outcome_id = $outcome->id;
                                $outcomeindicator->subscheme_id = $subScheme->id;
                                $outcomeindicator->scheme_id = $scheme->id;
                                $outcomeindicator->division_id = $outcomeIndicator_value['division_id'];
                                $outcomeindicator->department_id = $outcomeIndicator_value['department_id'];
                                $outcomeindicator->created_at = $outcomeIndicator_value['created_at'];
                                $outcomeindicator->updated_at = $outcomeIndicator_value['updated_at'];
                                $outcomeindicator->fin_year = $outcomeIndicator_value['fin_year'];
                                $outcomeindicator->save();
                                foreach ($outcomeIndicator_value['target_outcomes'] as $targetOutcome_key => $targetOutcome_value) 
                                {
                                    $targetOutcome = new TargetOutcome();
                                    $targetOutcome->value = $targetOutcome_value['value'];
                                    $targetOutcome->outcome_id = $outcome->id;
                                    $targetOutcome->outcomeindicator_id = $outcomeindicator->id;
                                    $targetOutcome->subscheme_id = $subScheme->id;
                                    $targetOutcome->scheme_id = $scheme->id;
                                    $targetOutcome->division_id = $targetOutcome_value['division_id'];
                                    $targetOutcome->department_id = $targetOutcome_value['department_id'];
                                    $targetOutcome->year = 2023;
                                    $targetOutcome->measurement = $targetOutcome_value['measurement'];
                                    $targetOutcome->created_at = $targetOutcome_value['created_at'];
                                    $targetOutcome->updated_at = $targetOutcome_value['updated_at'];
                                    $targetOutcome->save();
                                }
                            }
                        }
                        MigSubScheme::where(['id' => $migrated_subscheme['id']])->update(['migrated' => 1]);
                    }
                    MigScheme::where(['id' => $migrated_scheme['id']])->update(['migrated' => 1]);
                }
            });
        } catch (QueryException $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e
            ]);
        }
        return response()->json([
            'status' => 200
        ]);
    }
}
