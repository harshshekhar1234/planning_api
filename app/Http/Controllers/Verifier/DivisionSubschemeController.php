<?php

namespace App\Http\Controllers\Verifier;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Mail\NotifyMail;
use App\Jobs\QueueEmailJob;
use App\Models\SubScheme;
use App\Models\OutputIndicator;
use App\Models\OutcomeIndicator;
use App\Models\SubSchemeVerificationRemark;
use App\Models\VerifiedReport;
use App\Models\Division;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Validator;
use App\Models\RiskRemark;
use Illuminate\Database\QueryException;
use App\Models\AorSubSchemeVerificationRemark;
use App\Models\AorVerifiedReport;
use App\Models\AorRiskRemark;

class DivisionSubschemeController extends Controller
{
    public function index($division, $fin_year)
    {
        $subschemes = SubScheme::where(['division_id' => $division, 'fin_year' => $fin_year])->orderBy('subscheme_code')->get();
        foreach ($subschemes as $subscheme) {
            $subscheme->pending_output_indicator = OutputIndicator::where(['subscheme_id' => $subscheme->id, 'add_btn_flag' => true, 'fin_year' => $fin_year])->count();
            $subscheme->pending_outcome_indicator = OutcomeIndicator::where(['subscheme_id' => $subscheme->id, 'add_btn_flag' => true, 'fin_year' => $fin_year])->count();
        }
        return response()->json([
            'status' => 200,
            'result' => $subschemes
        ]);
    }

    /**
     * Submit sub-scheme report for verification.
     *
     * @param  \App\Models\Division  $division
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function submit(Request $request, $division, $fin_year)
    {
        $submitted_status = SubScheme::where(['division_id' => $division, 'submitted_status' => 'S'])->count();
        if ($submitted_status) {
            return response()->json([
                'status' => 403,
                'message' => 'Report already submitted for Verification.'
            ]);
        }
        $readyForSubmit = $this->readyForSubmit($division);
        if ($readyForSubmit) {
            $validator = Validator::make($request->all(), [
                'name' => 'required|max:50',
                'year' => 'required|max:50',
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'status' => 401,
                    'message' => $validator->errors()
                ]);
            }

            try {
                DB::transaction(function () use ($division, $request, $fin_year) {
                    $report = VerifiedReport::create([
                        'division_id' => $division,
                        'user_id' => Auth::user()->id,
                        'name' => $request->name,
                        'year' => $request->year,
                        'fin_year' => $fin_year
                    ]);
                    $reportId = $report->id;
                    $subschemes = SubScheme::where(['division_id' => $division])->get();
                    foreach ($subschemes as $subscheme) {
                        DB::table('sub_scheme_expenditures')->where(['subscheme_id' => $subscheme->id, 'submitted_status' => 'N', 'report_id' => null])->update(['submitted_status' => 'S', 'report_id' => $reportId]);
                        DB::table('achievement_outputs')->where(['subscheme_id' => $subscheme->id, 'submitted_status' => 'N', 'report_id' => null])->update(['submitted_status' => 'S', 'report_id' => $reportId]);
                        DB::table('achievement_outcomes')->where(['subscheme_id' => $subscheme->id, 'submitted_status' => 'N', 'report_id' => null])->update(['submitted_status' => 'S', 'report_id' => $reportId]);
                        DB::table('sub_schemes')->where(['id' => $subscheme->id])->update(['submitted_status' => 'S']);
                    }
                });
            } catch (QueryException $e) {
                return response()->json([
                    'status' => 'error',
                    'message' => $e
                ]);
            }

            $user = Auth::user();
            $division = Division::find($user->division_id);
            $verifier = User::where(['division_id' => $user->division_id, 'role' => 'verifier'])->first();
            $subject = "Outcome Budget - Report submitted for verification";

            $details = [
                'to' => 'Verifier',
                'division' => $division->name,
                'title' => 'Report submitted for verification.',
                'body' => $division->name . ' has submitted its Outcome Budget Report for your verification. Follow the link below to verify.',
                'subject' => $subject,
                'to_list' => $verifier->email,
                'cc_list' => $user->email
            ];

            // Mail::to($verifier->email)->queue(new NotifyMail($details));
            // try {
            //     dispatch(new QueueEmailJob($details));
            // } catch (Exception $ex) {
            //     return response()->json([
            //         'status' => 200,
            //         //'message' => $ex->getMessage()
            //         'message' => 'Report submitted successfully for verification, email not sent.'
            //     ]);
            // }

            return response()->json([
                'status' => 200,
                'message' => 'Report submitted successfully for verification.',
                'details' => $details
            ]);
        } else {
            return response()->json([
                'status' => 409,
                'message' => 'Please fill all financial and physical achievement entries.'
            ]);
        }
    }

    /**
     * Check if Division report is ready for verification.
     *
     * @param  \App\Models\Division  $division
     * @return boolean
     */
    public function readyForSubmit($division)
    {
        $financialReady = SubScheme::where(['division_id' => $division, 'fin_add_btn_flag' => true])->count();
        if ($financialReady == 0) {
            $outputReady = OutputIndicator::where(['division_id' => $division, 'add_btn_flag' => true])->count();
            if ($outputReady == 0) {
                $outcomeReady = OutcomeIndicator::where(['division_id' => $division, 'add_btn_flag' => true])->count();
                if ($outcomeReady == 0) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    /**
     * Fetch list of submitted subscheme pending for verification.
     *
     * @param  \App\Models\Division  $division
     * @return \Illuminate\Http\Response
     */
    public function verification_pending($division, $fin_year)
    {
        $subschemes = SubScheme::where(['division_id' => $division, 'submitted_status' => 'S', 'fin_year' => $fin_year])->orderby('id')->get();

        return response()->json([
            'status' => 200,
            'result' => $subschemes
        ]);
    }

    /**
     * Approve and verify the sub-scheme report.
     *
     * @param  \App\Models\SubScheme  $subscheme
     * @return \Illuminate\Http\Response
     */
    public function approve($subscheme)
    {
        $subScheme = SubScheme::find($subscheme);
        if ($subScheme && $subScheme->submitted_status == 'S') {
            if ($subScheme->verified_status != 'A') {
                try {
                    DB::transaction(function () use ($subscheme) {
                        DB::table('sub_scheme_expenditures')->where(['subscheme_id' => $subscheme, 'submitted_status' => 'S'])->whereIN('verified_status', ['N', 'R', 'T'])->update(['verified_status' => 'A']);
                        DB::table('achievement_outputs')->where(['subscheme_id' => $subscheme, 'submitted_status' => 'S'])->whereIN('verified_status', ['N', 'R', 'T'])->update(['verified_status' => 'A']);
                        DB::table('achievement_outcomes')->where(['subscheme_id' => $subscheme, 'submitted_status' => 'S'])->whereIN('verified_status', ['N', 'R', 'T'])->update(['verified_status' => 'A']);
                        DB::table('sub_schemes')->where(['id' => $subscheme, 'submitted_status' => 'S'])->whereIN('verified_status', ['N', 'R', 'T'])->update(['verified_status' => 'A']);
                    });
                } catch (\Throwable $e) {
                    return response()->json([
                        'status' => 'error',
                        'message' => $e
                    ]);
                }

                return response()->json([
                    'status' => 200,
                    'message' => 'Report verified successfully.'
                ]);
            } else {
                return response()->json([
                    'status' => 200,
                    'message' => 'Subscheme already approved.'
                ]);
            }
        } else {
            return response()->json([
                'status' => 200,
                'message' => 'Subscheme not submitted for verification.'
            ]);
        }
    }

    /**
     * Send sub-scheme report for review
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SubScheme  $subscheme
     * @return \Illuminate\Http\Response
     */
    public function review(Request $request, $subscheme)
    {
        $subScheme = SubScheme::find($subscheme);
        if ($subScheme && $subScheme->submitted_status == 'S') {
            if ($subScheme->verified_status == 'A') {
                return response()->json([
                    'status' => 200,
                    'message' => 'Subscheme already verified and approved.'
                ]);
            } else {
                if ($subScheme->verified_status != 'R') {
                    $validator = Validator::make($request->all(), [
                        'comment' => 'required|max:2000',
                    ]);
                    if ($validator->fails()) {
                        return response()->json([
                            'status' => 401,
                            'message' => $validator->errors()
                        ]);
                    }
                    try {
                        DB::transaction(function () use ($subscheme, $request) {
                            DB::table('sub_scheme_expenditures')->where(['subscheme_id' => $subscheme, 'submitted_status' => 'S'])->whereIN('verified_status', ['N', 'T'])->update(['verified_status' => 'R']);
                            DB::table('achievement_outputs')->where(['subscheme_id' => $subscheme, 'submitted_status' => 'S'])->whereIN('verified_status', ['N', 'T'])->update(['verified_status' => 'R']);
                            DB::table('achievement_outcomes')->where(['subscheme_id' => $subscheme, 'submitted_status' => 'S'])->whereIN('verified_status', ['N', 'T'])->update(['verified_status' => 'R']);
                            DB::table('sub_schemes')->where(['id' => $subscheme, 'submitted_status' => 'S'])->whereIN('verified_status', ['N', 'T'])->update(['verified_status' => 'R']);

                            $subSchemeVerificationRemark = new SubSchemeVerificationRemark;
                            $subSchemeVerificationRemark->subscheme_id = $subscheme;
                            $subSchemeVerificationRemark->remarks = $request->comment;
                            $user = Auth::user()->id;
                            $subSchemeVerificationRemark->user_id = $user;
                            $subSchemeVerificationRemark->save();
                        });
                    } catch (\Throwable $e) {
                        return response()->json([
                            'status' => 'error',
                            'message' => $e
                        ]);
                    }

                    $user = Auth::user();
                    $division = Division::find($user->division_id);
                    $maker = User::where(['division_id' => $user->division_id, 'role' => 'user'])->first();
                    $subject = "Outcome Budget - Report of subscheme_code " . $subScheme->subscheme_code . " send back for review";

                    $details = [
                        'to' => 'Maker',
                        'division' => $division->name,
                        'title' => 'Outcome Budget - Report sent back for review.',
                        'body' => 'Outcome Budget - Report for ' . $division->name . ' division with subscheme_code ' . $subScheme->subscheme_code . ' has been sent back for review. Follow the link below to review and resubmit the report.',
                        'subject' => $subject,
                        'to_list' => $maker->email,
                        'cc_list' => $user->email
                    ];

                    // try {
                    //     dispatch(new QueueEmailJob($details));
                    // } catch (Exception $ex) {
                    //     return response()->json([
                    //         'status' => 200,
                    //         //'message' => $ex->getMessage()
                    //         'message' => 'Report submitted successfully for verification, email not sent.'
                    //     ]);
                    // }

                    return response()->json([
                        'status' => 200,
                        'message' => 'Report sent for review.',
                        'details' => $details
                    ]);
                } else {
                    return response()->json([
                        'status' => 200,
                        'message' => 'Subscheme already sent for review.'
                    ]);
                }
            }
        } else {
            return response()->json([
                'status' => 200,
                'message' => 'Subscheme not submitted for verification.'
            ]);
        }
    }

    /**
     * Submit sub-scheme report for verification.
     *
     * @param  \App\Models\Division  $division
     * @return \Illuminate\Http\Response
     */
    public function resubmit($division)
    {
        $readyForReSubmit = SubScheme::where(['division_id' => $division, 'verified_status' => 'R', 'submitted_status' => 'S'])->count();
        if ($readyForReSubmit) {
            $subschemes = SubScheme::where(['division_id' => $division, 'verified_status' => 'R', 'submitted_status' => 'S'])->get();
            try {
                DB::transaction(function () use ($subschemes) {
                    foreach ($subschemes as $subscheme) {
                        DB::table('sub_scheme_expenditures')->where(['subscheme_id' => $subscheme->id, 'submitted_status' => 'S', 'verified_status' => 'R'])->update(['verified_status' => 'T']);
                        DB::table('achievement_outputs')->where(['subscheme_id' => $subscheme->id, 'submitted_status' => 'S', 'verified_status' => 'R'])->update(['verified_status' => 'T']);
                        DB::table('achievement_outcomes')->where(['subscheme_id' => $subscheme->id, 'submitted_status' => 'S', 'verified_status' => 'R'])->update(['verified_status' => 'T']);
                        DB::table('sub_schemes')->where('id', $subscheme->id)->update(['verified_status' => 'T']);
                    }
                });
            } catch (\Throwable $e) {
                return response()->json([
                    'status' => 'error',
                    'message' => $e
                ]);
            }
            return response()->json([
                'status' => 200,
                'message' => 'Report successfully re-submitted for verification.'
            ]);
        } else {
            return response()->json([
                'status' => 403,
                'message' => 'Report cannot be re-submitted for verification.'
            ]);
        }
    }

    /**
     * Verify the report for division.
     *
     * @param  \App\Models\Division  $division
     * @return \Illuminate\Http\Response
     */
    public function verify($division)
    {
        $subscheme = SubScheme::where('division_id', $division)->count();
        $verified_subscheme = SubScheme::where(['division_id' => $division, 'submitted_status' => 'S', 'verified_status' => 'A'])->count();
        if ($subscheme && ($subscheme == $verified_subscheme)) {
            try {
                DB::transaction(function () use ($division) {
                    $report = DB::table('verified_reports')->where(['division_id' => $division, 'verified_btn_flag' => false])->get();
                    VerifiedReport::where(['division_id' => $division, 'verified_btn_flag' => false])->update(['verified_btn_flag' => true]);
                    $subschemes = SubScheme::where(['division_id' => $division, 'verified_status' => 'A', 'submitted_status' => 'S'])->get();
                    foreach ($subschemes as $subscheme) {
                        DB::table('output_indicators')->where(['subscheme_id' => $subscheme->id])->update(['add_btn_flag' => true]);
                        DB::table('outcome_indicators')->where(['subscheme_id' => $subscheme->id])->update(['add_btn_flag' => true]);
                        DB::table('sub_schemes')->where('id', $subscheme->id)->update(['submitted_status' => 'N', 'verified_status' => 'N', 'fin_add_btn_flag' => true]);
                        $risk_remarks = new RiskRemark();
                        $risk_remarks->remarks = ($subscheme->risk_remarks) ? $subscheme->risk_remarks : "-";
                        $risk_remarks->subscheme_id = $subscheme->id;
                        $risk_remarks->scheme_id = $subscheme->scheme_id;
                        $risk_remarks->division_id = $subscheme->division_id;
                        $risk_remarks->department_id = $subscheme->department_id;
                        $risk_remarks->report_id = $report[0]->id;
                        $risk_remarks->save();
                    }
                });
            } catch (\Illuminate\Database\QueryException $ex) {
                return response()->json([
                    'status' => 'error',
                    'message' => $ex
                ]);
            }

            $user = Auth::user();
            $division = Division::find($user->division_id);
            $maker = User::where(['division_id' => $user->division_id, 'role' => 'user'])->first();
            $admin = User::where('role', 'admin')->first();
            $subject = "Outcome Budget - Report verified and approved for " . $division->name;
            $cc = [$user->email, $admin->email];
            $details = [
                'to' => 'Maker',
                'division' => $division->name,
                'title' => 'Outcome Budget - Report verified and approved.',
                'body' => 'Outcome Budget - Report for division ' . $division->name . ' has beed verified and approved. Follow the link below to see the verifed report.',
                'subject' => $subject,
                'to_list' => $maker->email,
                'cc_list' => $cc
            ];
            // try {
            //     dispatch(new QueueEmailJob($details));
            // } catch (Exception $ex) {
            //     return response()->json([
            //         'status' => 200,
            //         //'message' => $ex->getMessage()
            //         'message' => 'Report submitted successfully for verification, email not sent.'
            //     ]);
            // }
            return response()->json([
                'status' => 200,
                'message' => 'Report verified successfully.',
                'details' => $details
            ]);
        } else {
            return response()->json([
                'status' => 403,
                'message' => 'Report cannot be Verified.'
            ]);
        }
    }

    public function quater_report($id)
    {
        $reports = DB::table('verified_reports')->where('division_id', $id)->where('verified_btn_flag', true)->orderBy('created_at', 'desc')->get();
        return response()->json([
            'status' => 200,
            'result' => $reports
        ]);
    }

    public function latest_quater($id)
    {
        $quater = DB::table('verified_reports')->where('division_id', $id)->where('verified_btn_flag', true)->latest('created_at')->first();
        if (!$quater) {
            $quater = '0';
        }
        return response()->json([
            'status' => 200,
            'quater' => $quater
        ]);
    }

    public function aor_latest_quater($id)
    {
        $quater = DB::table('aor_verified_reports')->where('division_id', $id)->latest('created_at')->first();
        return response()->json([
            'status' => 200,
            'from_date' => $quater->from_date,
            'to_date' => $quater->to_date
        ]);
    }

    /*---------- Functions for AS ON DATE repoprts -----------*/
    public function aor_index($division, $fin_year)
    {
        $subschemes = SubScheme::where(['division_id' => $division, 'fin_year' => $fin_year])->orderBy('subscheme_code')->get();
        foreach ($subschemes as $subscheme) {
            $subscheme->pending_output_indicator = OutputIndicator::where(['subscheme_id' => $subscheme->id, 'aor_add_btn_flag' => true, 'fin_year' => $fin_year])->count();
            $subscheme->pending_outcome_indicator = OutcomeIndicator::where(['subscheme_id' => $subscheme->id, 'aor_add_btn_flag' => true, 'fin_year' => $fin_year])->count();
        }
        return response()->json([
            'status' => 200,
            'result' => $subschemes
        ]);
    }

    /**
     * Submit As on Date division report for verification.
     *
     * @param  \App\Models\Division  $division
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function aor_submit(Request $request, $division, $fin_year)
    {
        $submitted_status = SubScheme::where(['division_id' => $division, 'aor_submitted_status' => 'S'])->count();
        if ($submitted_status) {
            return response()->json([
                'status' => 403,
                'message' => 'Report already submitted for Verification.'
            ]);
        }
        $readyForSubmit = $this->aor_readyForSubmit($division);
        if ($readyForSubmit) {
            $validator = Validator::make($request->all(), [
                'from_date' => 'required',
                'to_date' => 'required',
                'year' => 'required|max:50',
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'status' => 401,
                    'message' => $validator->errors()
                ]);
            }

            try {
                DB::transaction(function () use ($division, $request, $fin_year) {
                    $report = AorVerifiedReport::create([
                        'division_id' => $division,
                        'user_id' => Auth::user()->id,
                        'from_date' => $request->from_date,
                        'to_date' => $request->to_date,
                        'year' => $request->year,
                        'fin_year' => $fin_year
                    ]);
                    $reportId = $report->id;
                    $subschemes = SubScheme::where(['division_id' => $division])->get();
                    foreach ($subschemes as $subscheme) {
                        DB::table('aor_sub_scheme_expenditures')->where(['subscheme_id' => $subscheme->id, 'submitted_status' => 'N', 'report_id' => null])->update(['submitted_status' => 'S', 'report_id' => $reportId]);
                        DB::table('aor_achievement_outputs')->where(['subscheme_id' => $subscheme->id, 'submitted_status' => 'N', 'report_id' => null])->update(['submitted_status' => 'S', 'report_id' => $reportId]);
                        DB::table('aor_achievement_outcomes')->where(['subscheme_id' => $subscheme->id, 'submitted_status' => 'N', 'report_id' => null])->update(['submitted_status' => 'S', 'report_id' => $reportId]);
                        DB::table('sub_schemes')->where(['id' => $subscheme->id])->update(['aor_submitted_status' => 'S']);
                    }
                });
            } catch (QueryException $e) {
                return response()->json([
                    'status' => 'error',
                    'message' => $e
                ]);
            }

            $user = Auth::user();
            $division = Division::find($user->division_id);
            $verifier = User::where(['division_id' => $user->division_id, 'role' => 'verifier'])->first();
            $subject = "Outcome Budget - As on Date Report submitted for verification";

            $details = [
                'to' => 'Verifier',
                'division' => $division->name,
                'title' => 'Report submitted for verification.',
                'body' => $division->name . ' has submitted its As on Date Outcome Budget Report for your verification. Follow the link below to verify.',
                'subject' => $subject,
                'to_list' => $verifier->email,
                'cc_list' => $user->email
            ];

            return response()->json([
                'status' => 200,
                'message' => 'Report submitted successfully for verification.',
                'details' => $details
            ]);
        } else {
            return response()->json([
                'status' => 409,
                'message' => 'Please fill all financial and physical achievement entries.'
            ]);
        }
    }

    /**
     * Check if As on Date Division report is ready for verification.
     *
     * @param  \App\Models\Division  $division
     * @return boolean
     */
    public function aor_readyForSubmit($division)
    {
        $financialReady = SubScheme::where(['division_id' => $division, 'aor_fin_add_btn_flag' => true])->count();
        if ($financialReady == 0) {
            $outputReady = OutputIndicator::where(['division_id' => $division, 'aor_add_btn_flag' => true])->count();
            if ($outputReady == 0) {
                $outcomeReady = OutcomeIndicator::where(['division_id' => $division, 'aor_add_btn_flag' => true])->count();
                if ($outcomeReady == 0) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    public function aor_quater_report($id)
    {
        $reports = DB::table('aor_verified_reports')->where('division_id', $id)->where('verified_btn_flag', true)->orderBy('created_at', 'desc')->get();
        return response()->json([
            'status' => 200,
            'result' => $reports
        ]);
    }

    public function aor_resubmit($division)
    {
        $readyForReSubmit = SubScheme::where(['division_id' => $division, 'aor_verified_status' => 'R', 'aor_submitted_status' => 'S'])->count();
        if ($readyForReSubmit) {
            $subschemes = SubScheme::where(['division_id' => $division, 'aor_verified_status' => 'R', 'aor_submitted_status' => 'S'])->get();
            try {
                DB::transaction(function () use ($subschemes) {
                    foreach ($subschemes as $subscheme) {
                        DB::table('aor_sub_scheme_expenditures')->where(['subscheme_id' => $subscheme->id, 'submitted_status' => 'S', 'verified_status' => 'R'])->update(['verified_status' => 'T']);
                        DB::table('aor_achievement_outputs')->where(['subscheme_id' => $subscheme->id, 'submitted_status' => 'S', 'verified_status' => 'R'])->update(['verified_status' => 'T']);
                        DB::table('aor_achievement_outcomes')->where(['subscheme_id' => $subscheme->id, 'submitted_status' => 'S', 'verified_status' => 'R'])->update(['verified_status' => 'T']);
                        DB::table('sub_schemes')->where('id', $subscheme->id)->update(['aor_verified_status' => 'T']);
                    }
                });
            } catch (\Throwable $e) {
                return response()->json([
                    'status' => 'error',
                    'message' => $e
                ]);
            }
            return response()->json([
                'status' => 200,
                'message' => 'Report successfully re-submitted for verification.'
            ]);
        } else {
            return response()->json([
                'status' => 403,
                'message' => 'Report cannot be re-submitted for verification.'
            ]);
        }
    }

    public function aor_verification_pending($division, $fin_year)
    {
        $subschemes = SubScheme::where(['division_id' => $division, 'aor_submitted_status' => 'S', 'fin_year' => $fin_year])->orderby('id')->get();

        return response()->json([
            'status' => 200,
            'result' => $subschemes
        ]);
    }

    public function aor_approve($subscheme)
    {
        $subScheme = SubScheme::find($subscheme);
        if ($subScheme && $subScheme->aor_submitted_status == 'S') {
            if ($subScheme->aor_verified_status != 'A') {
                try {
                    DB::transaction(function () use ($subscheme) {
                        DB::table('aor_sub_scheme_expenditures')->where(['subscheme_id' => $subscheme, 'submitted_status' => 'S'])->whereIN('verified_status', ['N', 'R', 'T'])->update(['verified_status' => 'A']);
                        DB::table('aor_achievement_outputs')->where(['subscheme_id' => $subscheme, 'submitted_status' => 'S'])->whereIN('verified_status', ['N', 'R', 'T'])->update(['verified_status' => 'A']);
                        DB::table('aor_achievement_outcomes')->where(['subscheme_id' => $subscheme, 'submitted_status' => 'S'])->whereIN('verified_status', ['N', 'R', 'T'])->update(['verified_status' => 'A']);
                        DB::table('sub_schemes')->where(['id' => $subscheme, 'aor_submitted_status' => 'S'])->whereIN('aor_verified_status', ['N', 'R', 'T'])->update(['aor_verified_status' => 'A']);
                    });
                } catch (\Throwable $e) {
                    return response()->json([
                        'status' => 'error',
                        'message' => $e
                    ]);
                }

                return response()->json([
                    'status' => 200,
                    'message' => 'Report verified successfully.'
                ]);
            } else {
                return response()->json([
                    'status' => 200,
                    'message' => 'Subscheme already approved.'
                ]);
            }
        } else {
            return response()->json([
                'status' => 200,
                'message' => 'Subscheme not submitted for verification.'
            ]);
        }
    }

    public function aor_review(Request $request, $subscheme)
    {
        $subScheme = SubScheme::find($subscheme);
        if ($subScheme && $subScheme->aor_submitted_status == 'S') {
            if ($subScheme->aor_verified_status == 'A') {
                return response()->json([
                    'status' => 200,
                    'message' => 'Subscheme already verified and approved.'
                ]);
            } else {
                if ($subScheme->aor_verified_status != 'R') {
                    $validator = Validator::make($request->all(), [
                        'comment' => 'required|max:2000',
                    ]);
                    if ($validator->fails()) {
                        return response()->json([
                            'status' => 401,
                            'message' => $validator->errors()
                        ]);
                    }
                    try {
                        DB::transaction(function () use ($subscheme, $request) {
                            DB::table('aor_sub_scheme_expenditures')->where(['subscheme_id' => $subscheme, 'submitted_status' => 'S'])->whereIN('verified_status', ['N', 'T'])->update(['verified_status' => 'R']);
                            DB::table('aor_achievement_outputs')->where(['subscheme_id' => $subscheme, 'submitted_status' => 'S'])->whereIN('verified_status', ['N', 'T'])->update(['verified_status' => 'R']);
                            DB::table('aor_achievement_outcomes')->where(['subscheme_id' => $subscheme, 'submitted_status' => 'S'])->whereIN('verified_status', ['N', 'T'])->update(['verified_status' => 'R']);
                            DB::table('sub_schemes')->where(['id' => $subscheme, 'aor_submitted_status' => 'S'])->whereIN('aor_verified_status', ['N', 'T'])->update(['aor_verified_status' => 'R']);

                            $subSchemeVerificationRemark = new AorSubSchemeVerificationRemark;
                            $subSchemeVerificationRemark->subscheme_id = $subscheme;
                            $subSchemeVerificationRemark->remarks = $request->comment;
                            $user = Auth::user()->id;
                            $subSchemeVerificationRemark->user_id = $user;
                            $subSchemeVerificationRemark->save();
                        });
                    } catch (\Throwable $e) {
                        return response()->json([
                            'status' => 'error',
                            'message' => $e
                        ]);
                    }

                    $user = Auth::user();
                    $division = Division::find($user->division_id);
                    $maker = User::where(['division_id' => $user->division_id, 'role' => 'user'])->first();
                    $subject = "Outcome Budget - Report of subscheme_code " . $subScheme->subscheme_code . " send back for review";

                    $details = [
                        'to' => 'Maker',
                        'division' => $division->name,
                        'title' => 'Outcome Budget - Report sent back for review.',
                        'body' => 'Outcome Budget - Report for ' . $division->name . ' division with subscheme_code ' . $subScheme->subscheme_code . ' has been sent back for review. Follow the link below to review and resubmit the report.',
                        'subject' => $subject,
                        'to_list' => $maker->email,
                        'cc_list' => $user->email
                    ];

                    return response()->json([
                        'status' => 200,
                        'message' => 'Report sent for review.',
                        'details' => $details
                    ]);
                } else {
                    return response()->json([
                        'status' => 200,
                        'message' => 'Subscheme already sent for review.'
                    ]);
                }
            }
        } else {
            return response()->json([
                'status' => 200,
                'message' => 'Subscheme not submitted for verification.'
            ]);
        }
    }

    public function aor_verify($division)
    {
        $subscheme = SubScheme::where('division_id', $division)->count();
        $verified_subscheme = SubScheme::where(['division_id' => $division, 'aor_submitted_status' => 'S', 'aor_verified_status' => 'A'])->count();
        if ($subscheme && ($subscheme == $verified_subscheme)) {
            try {
                DB::transaction(function () use ($division) {
                    $report = DB::table('aor_verified_reports')->where(['division_id' => $division, 'verified_btn_flag' => false])->get();
                    AorVerifiedReport::where(['division_id' => $division, 'verified_btn_flag' => false])->update(['verified_btn_flag' => true]);
                    $subschemes = SubScheme::where(['division_id' => $division, 'aor_verified_status' => 'A', 'aor_submitted_status' => 'S'])->get();
                    foreach ($subschemes as $subscheme) {
                        DB::table('output_indicators')->where(['subscheme_id' => $subscheme->id])->update(['aor_add_btn_flag' => true]);
                        DB::table('outcome_indicators')->where(['subscheme_id' => $subscheme->id])->update(['aor_add_btn_flag' => true]);
                        DB::table('sub_schemes')->where('id', $subscheme->id)->update(['aor_submitted_status' => 'N', 'aor_verified_status' => 'N', 'aor_fin_add_btn_flag' => true]);
                        $risk_remarks = new AorRiskRemark();
                        $risk_remarks->remarks = ($subscheme->aor_risk_remarks) ? $subscheme->aor_risk_remarks : "-";
                        $risk_remarks->subscheme_id = $subscheme->id;
                        $risk_remarks->scheme_id = $subscheme->scheme_id;
                        $risk_remarks->division_id = $subscheme->division_id;
                        $risk_remarks->department_id = $subscheme->department_id;
                        $risk_remarks->report_id = $report[0]->id;
                        $risk_remarks->save();
                    }
                });
            } catch (\Illuminate\Database\QueryException $ex) {
                return response()->json([
                    'status' => 'error',
                    'message' => $ex
                ]);
            }

            $user = Auth::user();
            $division = Division::find($user->division_id);
            $maker = User::where(['division_id' => $user->division_id, 'role' => 'user'])->first();
            $admin = User::where('role', 'admin')->first();
            $subject = "Outcome Budget - Report verified and approved for " . $division->name;
            $cc = [$user->email, $admin->email];
            $details = [
                'to' => 'Maker',
                'division' => $division->name,
                'title' => 'Outcome Budget - Report verified and approved.',
                'body' => 'Outcome Budget - Report for division ' . $division->name . ' has beed verified and approved. Follow the link below to see the verifed report.',
                'subject' => $subject,
                'to_list' => $maker->email,
                'cc_list' => $cc
            ];
            return response()->json([
                'status' => 200,
                'message' => 'Report verified successfully.',
                'details' => $details
            ]);
        } else {
            return response()->json([
                'status' => 403,
                'message' => 'Report cannot be Verified.'
            ]);
        }
    }
}
