<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\DivisionController;
use App\Http\Controllers\SchemeController;
use App\Http\Controllers\SubSchemeController;
use App\Http\Controllers\SdgMapController;
use App\Http\Controllers\OutputController;
use App\Http\Controllers\OutcomeController;
use App\Http\Controllers\OutputIndicatorController;
use App\Http\Controllers\OutcomeIndicatorController;
use App\Http\Controllers\TargetOutputController;
use App\Http\Controllers\TargetOutcomeController;
use App\Http\Controllers\AchievementOutputController;
use App\Http\Controllers\AchievementOutcomeController;
use App\Http\Controllers\GenderController;
use App\Http\Controllers\SocialController;
use App\Http\Controllers\SdgGoalController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\SubSchemeExpenditureController;
use App\Http\Controllers\FinancialOutlayController;
use App\Http\Controllers\SequenceCorrector;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SubschemeSdgController;
use App\Http\Controllers\Verifier\DivisionSubschemeController;
use App\Http\Controllers\Verifier\EmailNotificationController;
use App\Http\Controllers\Verifier\SubSchemeVerificationRemarkController;
use App\Http\Controllers\Migrate\MigSchemeController;
use App\Http\Controllers\Migrate\MigSubSchemeController;
use App\Http\Controllers\Migrate\MigOutputController;
use App\Http\Controllers\Migrate\MigOutputIndicatorController;
use App\Http\Controllers\Migrate\MigOutputIndicatorTargetController;
use App\Http\Controllers\Migrate\MigOutcomeController;
use App\Http\Controllers\Migrate\MigOutcomeIndicatorController;
use App\Http\Controllers\Migrate\MigOutcomeIndicatorTargetController;
use App\Http\Controllers\Migrate\MigFinancialOutlayController;
use App\Http\Controllers\Migrate\MigSubSchemeGenderController;
use App\Http\Controllers\Migrate\MigSubSchemeSocialController;
use App\Http\Controllers\Migrate\MigSubSchemeSdgController;
use App\Http\Controllers\FinanceAPI\FinanceApiController;
use App\Http\Controllers\DBAdmin\AdminController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//register new user

Route::post('/hahahehehoho', [AuthController::class, 'createAccount']);
//login user
Route::post('/login', [AuthController::class, 'signin']);

Route::get('/yoyoyoyo', [SequenceCorrector::class, 'index']);

Route::post('/sdgmapstore', [SdgMapController::class, 'store']);
Route::get('/sdgmaplist', [SdgMapController::class, 'index']);
Route::post('/sdgmapupdate/{id}', [SdgMapController::class, 'update']);

Route::get('/public_count_indicators', [DashboardController::class, 'public_indicator']);
Route::get('/public_count_for_dashboard', [DashboardController::class, 'public_count_for_dashboard']);

//using middleware
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/profile', function (Request $request) {
        return $request->user();
    })->middleware(['can:isAdmin']);

    Route::post('/signout', [AuthController::class, 'signout']);

    Route::post('/user', [AuthController::class, 'user']);

    Route::post('/register', [AuthController::class, 'createAccount'])->middleware(['can:isAdmin']);

    Route::post('/department', [DepartmentController::class, 'store'])->middleware(['can:isAdmin']);
    Route::get('/departments', [DepartmentController::class, 'index'])->middleware(['can:isAdmin']);
    Route::get('/department/{id}', [DepartmentController::class, 'show']);

    Route::get('/divisions/{id}', [DivisionController::class, 'index'])->middleware(['can:isAdmin']);
    Route::post('/division', [DivisionController::class, 'store'])->middleware(['can:isAdmin']);
    Route::get('/division/{id}', [DivisionController::class, 'show']);

    Route::get('/schemes/{id}', [SchemeController::class, 'index'])->middleware(['can:isAdmin']);
    Route::post('/scheme', [SchemeController::class, 'store'])->middleware(['can:isAdmin']);
    Route::get('/scheme/{id}', [SchemeController::class, 'show'])->middleware(['can:isAdmin']);
    Route::get('/scheme/searchstatename/{name}/{id}', [SchemeController::class, 'searchByStateName']);
    Route::get('/scheme/searchcentername/{name}/{id}', [SchemeController::class, 'searchByCenterName']);
    Route::get('/scheme/searchstatecode/{code}/{id}', [SchemeController::class, 'searchByStateCode'])->middleware(['can:isAdmin']);
    Route::get('/scheme/searchcentercode/{code}/{id}', [SchemeController::class, 'searchByCenterCode'])->middleware(['can:isAdmin']);
    //Delete Scheme
    Route::delete('/scheme/delete/{id}', [SchemeController::class, 'destroy']);
    //Edit Scheme
    Route::post('/scheme/edit/{id}', [SchemeController::class, 'update']);
    //Create Scheme - with sub-scheme, output, outcome, indicators and targets
    Route::post('/scheme/create', [SchemeController::class, 'create_scheme']);

    Route::get('/subschemes/{id}', [SubSchemeController::class, 'index'])->middleware(['can:isAdmin']);
    Route::post('/subscheme', [SubSchemeController::class, 'store'])->middleware(['can:isAdmin']);
    Route::get('/subscheme/{id}', [SubSchemeController::class, 'show'])->middleware(['can:isAdmin']);
    Route::get('/subscheme/searchname/{name}/{id}', [SubSchemeController::class, 'searchByName']);
    Route::get('/subscheme/searchcode/{code}/{id}', [SubSchemeController::class, 'searchByCode'])->middleware(['can:isAdmin']);
    //Delete Sub-Scheme
    Route::delete('/subscheme/delete/{id}', [SubSchemeController::class, 'destroy']);
    //Edit Sub-Scheme
    Route::post('/subscheme/edit/{id}', [SubSchemeController::class, 'update']);
    //Create Sub-Scheme - with output, outcome, indicators and targets
    Route::post('/subscheme/create', [SubSchemeController::class, 'create_sub_scheme']);

    Route::post('/output', [OutputController::class, 'store'])->middleware(['can:isAdmin']);
    Route::get('/outputs/{id}', [OutputController::class, 'index']);
    //Update Output Name
    Route::post('/output/update/{id}', [OutputController::class, 'update']);
    //Delete Output
    Route::delete('/output/delete/{id}', [OutputController::class, 'destroy']);

    Route::post('/outcome', [OutcomeController::class, 'store'])->middleware(['can:isAdmin']);
    Route::get('/outcomes/{id}', [OutcomeController::class, 'index']);
    //Update Outcome Name
    Route::post('/outcome/update/{id}', [OutcomeController::class, 'update']);
    //Delete Outcome
    Route::delete('/outcome/delete/{id}', [OutcomeController::class, 'destroy']);

    Route::post('/outputindicator', [OutputIndicatorController::class, 'store'])->middleware(['can:isAdmin']);
    //Delete Output Indicator
    Route::delete('/outputindicator/delete/{id}', [OutputIndicatorController::class, 'destroy']);

    Route::post('/outcomeindicator', [OutcomeIndicatorController::class, 'store'])->middleware(['can:isAdmin']);
    Route::get('/outcomeindicator/{id}', [OutcomeIndicatorController::class, 'index']);
    //Delete Outcome Indicator
    Route::delete('/outcomeindicator/delete/{id}', [OutcomeIndicatorController::class, 'destroy']);

    Route::post('/outputindictortarget', [TargetOutputController::class, 'store'])->middleware(['can:isAdmin']);

    Route::get('/schemesdept/{id}', [SchemeController::class, 'indexdept']);

    Route::get('/subschemesdeptuser/{id}', [SubSchemeController::class, 'indexdept']);

    Route::get('/genders', [GenderController::class, 'index']);
    Route::get('/socials', [SocialController::class, 'index']);
    Route::get('/sdg_goals', [SdgGoalController::class, 'index']);
    Route::get('/social_select', [SocialController::class, 'social_select']);
    Route::get('/gender_select', [GenderController::class, 'gender_select']);
    Route::get('/subscheme_social/{id}', [SocialController::class, 'subscheme_social']);
    Route::get('/subscheme_gender/{id}', [GenderController::class, 'subscheme_gender']);
    Route::get('/outputindicator_target/{id}', [OutputIndicatorController::class, 'outputindicator_target']);
    Route::get('/outcomeindicator_target/{id}', [OutcomeIndicatorController::class, 'outcomeindicator_target']);
    Route::post('/update_outputindicator_and_target', [OutputIndicatorController::class, 'update_outputindicator_and_target']);
    Route::post('/update_outcomeindicator_and_target', [OutcomeIndicatorController::class, 'update_outcomeindicator_and_target']);

    Route::get('/count_indicators', [DashboardController::class, 'index']);
    Route::get('/department_count_indicators/{id}', [DashboardController::class, 'indicator_by_department']);
    Route::get('/status_update', [SubSchemeController::class, 'status_update']);
    Route::get('/count_for_dashboard', [DashboardController::class, 'count_for_dashboard']);
    Route::get('/dept_dashboard', [DepartmentController::class, 'dept_dashboard'])->middleware(['can:isAdmin']);
    Route::get('/div_dashboard/{id}', [DivisionController::class, 'div_dashboard'])->middleware(['can:isAdmin']);

    Route::post('/subscheme_expenditure', [SubSchemeExpenditureController::class, 'store']);
    Route::get('/subscheme_expenditure/{id}', [SubSchemeExpenditureController::class, 'index']);
    Route::get('/subscheme_outlay/{id}', [FinancialOutlayController::class, 'index']);
    Route::get('/subscheme_header/{id}', [SubSchemeController::class, 'subscheme_header']);

    Route::get('/div_status_update/{id}', [SubSchemeController::class, 'div_status_update']);
    Route::get('/count_for_div_dashboard/{id}', [DashboardController::class, 'count_for_div_dashboard']);
    Route::get('/get_by_dept/{id}', [FinancialOutlayController::class, 'get_by_dept']);
    Route::get('/get_by_division/{id}', [FinancialOutlayController::class, 'get_by_division']);

    Route::get('/ach/{id}', [SubSchemeController::class, 'fill_achievements']);
    Route::post('/achievementsoutput', [AchievementOutputController::class, 'store']);
    Route::get('/achievementsoutput/{id}', [AchievementOutputController::class, 'index']);

    Route::post('/achievementsoutcome', [AchievementOutcomeController::class, 'store']);
    Route::get('/achievementsoutcome/{id}', [AchievementOutcomeController::class, 'index']);

    Route::post('/outcomeindicatortarget', [TargetOutcomeController::class, 'store']);

    Route::get('/reportsubscheme/{id}', [SubSchemeController::class, 'report_subscheme']);
    Route::get('/reportsubschemedivision/{id}', [SubSchemeController::class, 'report_subscheme_division']);

    Route::get('/outputindicator/{id}', [OutputIndicatorController::class, 'index']);

    Route::get('/outputindictortarget/{id}', [TargetOutputController::class, 'index']);
    Route::get('/divisionall', [DivisionController::class, 'division_all']);

    Route::get('/outcomeindictortarget/{id}', [TargetOutcomeController::class, 'index']);

    Route::post('/output_store', [OutputController::class, 'output_store']);
    Route::post('/outputindicatorstore', [OutputIndicatorController::class, 'outputindicator_store']);

    Route::post('/outcome_store', [OutcomeController::class, 'outcome_store']);
    Route::post('/outcomeindicatorstore', [OutcomeIndicatorController::class, 'outcomeindicator_store']);

    Route::get('/users', [UserController::class, 'index'])->middleware(['can:isAdmin']);
    Route::post('/update_password', [UserController::class, 'update_password'])->middleware(['can:isAdmin']);
    Route::post('/update_email', [UserController::class, 'update_email'])->middleware(['can:isAdmin']);

    Route::get('/ss_outcome_achievement/{code}', [AchievementOutcomeController::class, 'ss_outcome_achievement'])->middleware(['can:isAdmin']);
    Route::post('/update_outcome_achi_value/{id}', [AchievementOutcomeController::class, 'update_outcome_achi_value']);
    Route::get('/achievement_outcome_seed', [AchievementOutcomeController::class, 'achievement_outcome_seed'])->middleware(['can:isAdmin']);

    Route::get('/ss_output_achievement/{code}', [AchievementOutputController::class, 'ss_output_achievement'])->middleware(['can:isAdmin']);
    Route::post('/update_output_achi_value/{id}', [AchievementOutputController::class, 'update_output_achi_value']);
    Route::get('/achievement_output_seed', [AchievementOutputController::class, 'achievement_output_seed'])->middleware(['can:isAdmin']);

    Route::get('/subscheme_financial_seed', [SubSchemeExpenditureController::class, 'subscheme_financial_seed'])->middleware(['can:isAdmin']);
    Route::post('/update_ss_fin_exp_value/{id}', [SubSchemeExpenditureController::class, 'update_ss_fin_exp_value']);
    Route::get('/ss_fin_exp/{code}', [SubSchemeExpenditureController::class, 'ss_fin_exp'])->middleware(['can:isAdmin']);

    Route::get('/report_for_dynmc_dashboard', [SubSchemeController::class, 'report_for_dynmc_dashboard'])->middleware(['can:isAdmin']);

    //Listing of all Users
    Route::get('/all_users', [UserController::class, 'all_users'])->middleware(['can:isAdmin']);
    //Delete Subscheme Financial Record: SubSchemeExpenditure_Table
    Route::get('/subschemeexpenditure/delete/{id}', [SubSchemeExpenditureController::class, 'destroy'])->middleware(['can:isAdmin']);
    //Delete Achievement Output Record
    Route::get('/achievementoutput/delete/{id}', [AchievementOutputController::class, 'destroy'])->middleware(['can:isAdmin']);
    //Delete Achievement Outcome Record
    Route::get('/achievementoutcome/delete/{id}', [AchievementOutcomeController::class, 'destroy'])->middleware(['can:isAdmin']);
    //Fetch Subscheme SDG Details on the basis of Subscheme Code
    Route::get('/subchemeSdg/detailbycode/{code}', [SubschemeSdgController::class, 'detailbycode'])->middleware(['can:isAdmin']);
    //Fetch Subscheme SDG Details on the basis of Subscheme Id
    Route::get('/subchemeSdg/{id}', [SubschemeSdgController::class, 'index']);
    //Insert SDG Goal for a subscheme
    Route::post('/subchemeSdg/store', [SubschemeSdgController::class, 'store'])->middleware(['can:isAdmin']);
    //Update SDG Goal for a subscheme
    Route::post('/subchemeSdg/update/{id}', [SubschemeSdgController::class, 'update']);
    //Delete Subscheme SDG Goal Record
    Route::get('/subchemeSdg/delete/{id}', [SubschemeSdgController::class, 'destroy'])->middleware(['can:isAdmin']);
    //Fetch Financial Outlay Details on the basis of Subscheme Code
    Route::get('/financialOutlay/detailbycode/{code}', [FinancialOutlayController::class, 'detailbycode'])->middleware(['can:isAdmin']);
    //Insert Financial Outlay for a subscheme
    Route::post('/financialOutlay/store', [FinancialOutlayController::class, 'store'])->middleware(['can:isAdmin']);
    //Update Financial Outlay for a subscheme
    Route::post('/financialOutlay/update/{id}', [FinancialOutlayController::class, 'update']);
    //Delete Financial Outlay Record
    Route::get('/financialOutlay/delete/{id}', [FinancialOutlayController::class, 'destroy'])->middleware(['can:isAdmin']);
    //Fetch Gender Category Details on the basis of Subscheme Code
    Route::get('/gender/detailbycode/{code}', [GenderController::class, 'detailbycode'])->middleware(['can:isAdmin']);
    //Insert Gender Category for a subscheme
    Route::post('/subschemeGender/store', [GenderController::class, 'store'])->middleware(['can:isAdmin']);
    //Update Gender Category for a subscheme
    Route::post('/subschemeGender/update/{id}', [GenderController::class, 'update']);
    //Delete Gender Category Record
    Route::get('/subschemeGender/delete/{id}', [GenderController::class, 'destroy'])->middleware(['can:isAdmin']);
    //Fetch Social Category Details on the basis of Subscheme Code
    Route::get('/subschemeSocial/detailbycode/{code}', [SocialController::class, 'detailbycode'])->middleware(['can:isAdmin']);
    //Insert Social Category for a subscheme
    Route::post('/subschemeSocial/store', [SocialController::class, 'store'])->middleware(['can:isAdmin']);
    //Update Social Category for a subscheme
    Route::post('/subschemeSocial/update/{id}', [SocialController::class, 'update']);
    //Delete Social Category Record
    Route::get('/subschemeSocial/delete/{id}', [SocialController::class, 'destroy'])->middleware(['can:isAdmin']);
    //To add risk/remarks for a subscheme
    Route::post('/subscheme/update_risk_remark/{id}', [SubSchemeController::class, 'update_risk_remark']);
    //To fetch risk/remarks for a subscheme
    Route::get('/subscheme/fetch_risk_remark/{id}', [SubSchemeController::class, 'fetch_risk_remark']);
    //Update Password by user
    Route::post('user/update_password', [UserController::class, 'user_update_password']);
    //Fetch all subschemes
    Route::get('/subschemes', [SubSchemeController::class, 'all_subscheme'])->middleware(['can:isAdmin']);
    //Hard Delete User
    Route::get('/user/delete/{id}', [UserController::class, 'destroy'])->middleware(['can:isAdmin']);

    /*-----------Verifier Module--------------*/
    //Fetch all subschemes for the division with its status
    Route::get('/divisions/{division}/subschemes', [DivisionSubschemeController::class, 'index']);
    //Submit division report for verification
    Route::post('/verification/{division}', [DivisionSubschemeController::class, 'submit']);
    //Fetch list of submitted subscheme pending for verification.
    Route::get('/verification/pending/{division}', [DivisionSubschemeController::class, 'verification_pending']);
    //Approve Sub-scheme Report
    Route::get('/verification/approve/{subscheme}', [DivisionSubschemeController::class, 'approve']);
    //Reject Sub-scheme Report 
    Route::post('/verification/review/{subscheme}', [DivisionSubschemeController::class, 'review']);
    //Fetch Verification Review Remarks for a subscheme
    Route::get('/verification/remarks/{subscheme}', [SubSchemeVerificationRemarkController::class, 'index']);
    //Re-Submit division report for verification
    Route::get('/verification/resubmit/{division}', [DivisionSubschemeController::class, 'resubmit']);
    //Verify the Division report
    Route::get('/verification/verify/{division}', [DivisionSubschemeController::class, 'verify']);
    Route::get('/quater_report_list/{division}', [DivisionSubschemeController::class, 'quater_report']);
    Route::get('/latestquater/{division}', [DivisionSubschemeController::class, 'latest_quater']);
    Route::get('/aor_latestquater/{division}', [DivisionSubschemeController::class, 'aor_latest_quater']);
    Route::get('/reportsubschemedivision/{division}/report/{rid}', [SubSchemeController::class, 'report_subscheme_division_quater']);
    //Email notification on verification - Submit, Review, Final Verification
    Route::post('/email/submit_notification', [EmailNotificationController::class, 'submitNotification']);
    //Sub-scheme Report View for Verifier
    Route::get('verification/reportsubscheme/{id}', [SubSchemeController::class, 'verifier_report_subscheme']);
    //Sub-scheme Report Header for Verifier
    Route::get('verification/subscheme_header/{id}', [SubSchemeController::class, 'verifier_subscheme_header']);
    /*----------------------End of Verifier Module-------------------------*/

    /*----------------------As on Date Report Module along with achievement entry and Verification-------------------------*/
    //Fetch As on Date sub-scheme detail with financial values - header
    Route::get('/aor_subscheme_header/{id}', [SubSchemeController::class, 'aor_subscheme_header']);
    //Save As on Date financial achievement of a sub-scheme
    Route::post('/aor_subscheme_expenditure', [SubSchemeExpenditureController::class, 'aor_store']);
    //Fetch As on Date financial achievement of a sub-scheme
    Route::get('/aor_subscheme_expenditure/{id}', [SubSchemeExpenditureController::class, 'aor_index']);
    //Update As on Date financial achievement of a sub-scheme - Edit
    Route::post('/aor_update_ss_fin_exp_value/{id}', [SubSchemeExpenditureController::class, 'aor_update_ss_fin_exp_value']);
    //Save As on Date output achievement of a sub-scheme
    Route::post('/aor_achievementsoutput', [AchievementOutputController::class, 'aor_store']);
    //Fetch As on Date output achievement of a sub-scheme
    Route::get('/aor_achievementsoutput/{id}', [AchievementOutputController::class, 'aor_index']);
    //Update As on Date output achievement of a sub-scheme - Edit
    Route::post('/aor_update_output_achi_value/{id}', [AchievementOutputController::class, 'aor_update_output_achi_value']);
    //Save As on Date outcome achievement of a sub-scheme
    Route::post('/aor_achievementsoutcome', [AchievementOutcomeController::class, 'aor_store']);
    //Fetch As on Date outcome achievement of a sub-scheme
    Route::get('/aor_achievementsoutcome/{id}', [AchievementOutcomeController::class, 'aor_index']);
    //Update As on Date outcome achievement of a sub-scheme - Edit
    Route::post('/aor_update_outcome_achi_value/{id}', [AchievementOutcomeController::class, 'aor_update_outcome_achi_value']);
    //Add risk/remarks to a subscheme for As on Date report
    Route::post('/aor_subscheme/update_risk_remark/{id}', [SubSchemeController::class, 'aor_update_risk_remark']);
    //Fetch risk/remarks of a subscheme for As on Date report
    Route::get('/aor_subscheme/fetch_risk_remark/{id}', [SubSchemeController::class, 'aor_fetch_risk_remark']);
    //Fetch all subschemes for the division with its status - As on Date report
    Route::get('/aor_divisions/{division}/subschemes', [DivisionSubschemeController::class, 'aor_index']);
    //Submit As on Date division report for verification
    Route::post('/aor_verification/{division}', [DivisionSubschemeController::class, 'aor_submit']);
    //Fetch list of Verified As on Date Report List
    Route::get('/aor_quater_report_list/{division}', [DivisionSubschemeController::class, 'aor_quater_report']);
    //Fetch Verification Review Remarks for a subscheme
    Route::get('/aor_verification/remarks/{subscheme}', [SubSchemeVerificationRemarkController::class, 'aor_index']);
    //Re-Submit division report for verification
    Route::get('/aor_verification/resubmit/{division}', [DivisionSubschemeController::class, 'aor_resubmit']);
    //Fetch As on date report of the division on the basis of report id - For Excel Download
    Route::get('/aor_reportsubschemedivision/{division}/report/{rid}', [SubSchemeController::class, 'aor_report_subscheme_division_quater']);
    //Fetch list of submitted subscheme pending for verification - As on date.
    Route::get('/aor_verification/pending/{division}', [DivisionSubschemeController::class, 'aor_verification_pending']);
    //Approve Sub-scheme As on date Report
    Route::get('/aor_verification/approve/{subscheme}', [DivisionSubschemeController::class, 'aor_approve']);
    //Reject Sub-scheme As on date Report
    Route::post('/aor_verification/review/{subscheme}', [DivisionSubschemeController::class, 'aor_review']);
    //Verify the As on date Division report
    Route::get('/aor_verification/verify/{division}', [DivisionSubschemeController::class, 'aor_verify']);
    //As on date Sub-scheme Report View for Verifier
    Route::get('aor_verification/reportsubscheme/{id}', [SubSchemeController::class, 'aor_verifier_report_subscheme']);
    //As on date Sub-scheme Report Header for Verifier
    Route::get('aor_verification/subscheme_header/{id}', [SubSchemeController::class, 'aor_verifier_subscheme_header']);
    /*-------------------End of As on Date Report Module along with achievement entry and Verification----------------------*/

    /*--------------------------------- Start of Initial Budget Report Download ------------------------------------*/
    //Fetch Initial Sub-Scheme header detail by id
    Route::get('/cur_subscheme_header/{id}', [SubSchemeController::class, 'subscheme_header']);
    //Initial Excel Report - For a Sub-Scheme
    Route::get('/cur_reportsubscheme/{id}', [SubSchemeController::class, 'cur_report_subscheme']);
    //Initial Excel Report - Division Wise
    Route::get('/cur_reportsubschemedivision/{id}', [SubSchemeController::class, 'cur_report_subscheme_division']);
    /*--------------------------------- End of Initial Budget Report Download ------------------------------------*/

    /*--------------------------------- Start of Outcome Budget Migration Module ------------------------------------*/
    //Fetch list of schemes for a division
    //Route::get('/mig_schemesdept/{id}', [MigSchemeController::class, 'indexdept']);
    //Delete Scheme
    Route::delete('/mig_scheme/delete/{id}', [MigSchemeController::class, 'destroy']);
    //Edit Scheme
    Route::post('/mig_scheme/edit/{id}', [MigSchemeController::class, 'update']);
    //Create Scheme - with sub-scheme, output, outcome, indicators and targets
    Route::post('/mig_scheme/create', [MigSchemeController::class, 'create_scheme']);
    //Fetch list of sub-schemes for a scheme
    //Route::get('/mig_subschemesdeptuser/{id}', [MigSubSchemeController::class, 'indexdept']);
    //Delete Sub-Scheme
    Route::delete('/mig_subscheme/delete/{id}', [MigSubSchemeController::class, 'destroy']);
    //Edit Sub-Scheme
    Route::post('/mig_subscheme/edit/{id}', [MigSubSchemeController::class, 'update']);
    //Create Sub-Scheme - with output, outcome, indicators and targets
    Route::post('/mig_subscheme/create', [MigSubSchemeController::class, 'create_sub_scheme']);
    //Fetch Sub-Scheme header detail by id
    //Route::get('/mig_subscheme_header/{id}', [MigSubSchemeController::class, 'subscheme_header']);
    //Fetch Output for a subscheme
    Route::get('/mig_outputs/{id}', [MigOutputController::class, 'index']);
    //Update Output Name
    Route::post('/mig_output/update/{id}', [MigOutputController::class, 'update']);
    //Delete Output
    Route::delete('/mig_output/delete/{id}', [MigOutputController::class, 'destroy']);
    //Create Output - with indicators and targets
    Route::post('/mig_output_store', [MigOutputController::class, 'output_store']);
    //Fetch Outcome for a subscheme
    Route::get('/mig_outcomes/{id}', [MigOutcomeController::class, 'index']);
    //Update Outcome Name
    Route::post('/mig_outcome/update/{id}', [MigOutcomeController::class, 'update']);
    //Delete Outcome
    Route::delete('/mig_outcome/delete/{id}', [MigOutcomeController::class, 'destroy']);
    //Create Outcome - with indicators and targets
    Route::post('/mig_outcome_store', [MigOutcomeController::class, 'outcome_store']);
    //Social Category list for a sub-scheme
    Route::get('/mig_subscheme_social/{id}', [MigSubSchemeSocialController::class, 'subscheme_social']);
    //Update Social Category for a subscheme
    Route::post('/mig_subschemeSocial/update/{id}', [MigSubSchemeSocialController::class, 'update']);
    //Update Gender Category for a subscheme
    Route::post('/mig_subschemeGender/update/{id}', [MigSubSchemeGenderController::class, 'update']);
    //Gender Category list for a sub-scheme
    Route::get('/mig_subscheme_gender/{id}', [MigSubSchemeGenderController::class, 'subscheme_gender']);
    //Fetch Subscheme SDG Details on the basis of Subscheme Id
    Route::get('/mig_subchemeSdg/{id}', [MigSubSchemeSdgController::class, 'index']);
    //Update SDG Goal for a subscheme
    Route::post('/mig_subchemeSdg/update/{id}', [MigSubSchemeSdgController::class, 'update']);
    //Fetch Financial Outlay for a subscheme
    //Route::get('/mig_subscheme_outlay/{id}', [MigFinancialOutlayController::class, 'index']);
    //Update Financial Outlay for a subscheme
    Route::post('/mig_financialOutlay/update/{id}', [MigFinancialOutlayController::class, 'update']);
    //Fetch list of Output Indicator Targets for an Output
    Route::get('/mig_outputindictortarget/{id}', [MigOutputIndicatorTargetController::class, 'index']);
    //Fetch list of Outcome Indicator Targets for an Outcome
    Route::get('/mig_outcomeindictortarget/{id}', [MigOutcomeIndicatorTargetController::class, 'index']);
    //List of Outcome Indicator for an Outcome
    Route::get('/mig_outcomeindicator/{id}', [MigOutcomeIndicatorController::class, 'index']);
    //Delete Outcome Indicator
    Route::delete('/mig_outcomeindicator/delete/{id}', [MigOutcomeIndicatorController::class, 'destroy']);
    //Create Outcome Indicator with Target
    Route::post('/mig_outcomeindicatorstore', [MigOutcomeIndicatorController::class, 'outcomeindicator_store']);
    //Fetch Outcome Indicator with Target By ID
    Route::get('/mig_outcomeindicator_target/{id}', [MigOutcomeIndicatorController::class, 'outcomeindicator_target']);
    //Update Outcome Indicator and Target
    Route::post('/mig_update_outcomeindicator_and_target', [MigOutcomeIndicatorController::class, 'update_outcomeindicator_and_target']);
    //Create Output Indicator with Target
    Route::post('/mig_outputindicatorstore', [MigOutputIndicatorController::class, 'outputindicator_store']);
    //Fetch Output Indicator with Target By ID
    Route::get('/mig_outputindicator_target/{id}', [MigOutputIndicatorController::class, 'outputindicator_target']);
    //Update Output Indicator and Target
    Route::post('/mig_update_outputindicator_and_target', [MigOutputIndicatorController::class, 'update_outputindicator_and_target']);
    //List of Output Indicator for an Output
    Route::get('/mig_outputindicator/{id}', [MigOutputIndicatorController::class, 'index']);
    //Delete Output Indicator
    Route::delete('/mig_outputindicator/delete/{id}', [MigOutputIndicatorController::class, 'destroy']);
    //List of Scheme for a division
    Route::get('/mig_schemes/{id}', [MigSchemeController::class, 'index']);
    //Excel Report - Division Wise
    Route::get('/mig_reportsubschemedivision/{id}', [MigSubSchemeController::class, 'report_subscheme_division']);
    //List of Sub-Scheme for a scheme
    Route::get('/mig_subschemes/{id}', [MigSubSchemeController::class, 'index']);
    //Excel Report - For a Sub-Scheme
    Route::get('/mig_reportsubscheme/{id}', [MigSubSchemeController::class, 'report_subscheme']);
    //Fetch risk/remarks for a subscheme
    Route::get('/mig_subscheme/fetch_risk_remark/{id}', [MigSubSchemeController::class, 'fetch_risk_remark']);
    //Update risk/remarks for a subscheme
    Route::post('/mig_subscheme/update_risk_remark/{id}', [MigSubSchemeController::class, 'update_risk_remark']);
    //Fetch Division Summary - Count
    Route::get('/mig_div_dashboard/{id}', [DivisionController::class, 'mig_div_dashboard'])->middleware(['can:isAdmin']);
    //Fetch Department Summary - Count
    Route::get('/mig_dept_dashboard', [DepartmentController::class, 'mig_dept_dashboard'])->middleware(['can:isAdmin']);
    /*----------------------------------- End of Outcome Budget Migration Module ------------------------------------*/

    /*------------------------ Start of API Integration in Outcome Budget Migration Module ---------------------------*/
    //Pending Scheme List by division_id
    Route::get('/mig_pendingschemes/{id}', [FinanceApiController::class, 'pending_scheme']);
    //Pending Sub-Scheme List by division_id
    Route::get('/mig_pendingsubschemesdept/{id}', [FinanceApiController::class, 'pending_subscheme_dept']);
    //Pending Sub-Scheme List by scheme_id
    Route::get('/mig_pendingsubschemes/{id}', [FinanceApiController::class, 'pending_subscheme']);
    //Fetch list of schemes for a division - existing in API and local both
    Route::get('/mig_schemesdept/{id}', [FinanceApiController::class, 'migrated_scheme']);
    //Fetch list of sub-schemes for a scheme - existing in API and local both
    Route::get('/mig_subschemesdeptuser/{id}', [FinanceApiController::class, 'migrated_subscheme']);
    //Fetch Financial Outlay for a subscheme
    Route::get('/mig_subscheme_outlay/{id}', [FinanceApiController::class, 'subscheme_outlay']);
    //Fetch Sub-Scheme header detail by id
    Route::get('/mig_subscheme_header/{id}', [FinanceApiController::class, 'subscheme_header']);
    //Fetch Scheme Summary
    Route::get('/mig_division_summary/{id}', [FinanceApiController::class, 'scheme_summary']);
    
    
    //For API Testing
    Route::get('/remove_backslash', [FinanceApiController::class, 'remove_backslash']);
    Route::get('/allscheme/{id}', [FinanceApiController::class, 'allscheme']);
    Route::get('/testencrypt', [FinanceApiController::class, 'testencryption']);
    /*------------------------- End of API Integration in Outcome Budget Migration Module ----------------------------*/

    /*--------------------------------- Start of Data Base Administration Module ------------------------------------*/
    //Change Scheme Id in all tables - Current
    Route::post('/change_scheme_id', [AdminController::class, 'change_scheme_id']);
    //Change Scheme Id in all tables - Migration Tables
    Route::post('/change_mig_scheme_id', [AdminController::class, 'change_mig_scheme_id']);

    /*---------------------------------- End of Data Base Administration Module -------------------------------------*/
});



//Excel Report - For a Sub-Scheme
Route::get('/subscheme_details/{subscheme_code}/{finyear}', [FinanceApiController::class, 'subscheme_report']);