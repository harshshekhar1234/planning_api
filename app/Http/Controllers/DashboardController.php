<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Department;
use App\Models\SubSchemeExpenditure;
use App\Models\Scheme;
use App\Models\SubScheme;
use App\Models\Output;
use App\Models\Outcome;
use App\Models\OutputIndicator;
use App\Models\OutcomeIndicator;
use App\Models\AchievementOutput;
use App\Models\AchievementOutcome;
use App\Models\FinancialOutlay;
use Illuminate\Support\Facades\DB;
use App\Models\VerifiedReport;

class DashboardController extends Controller
{
    public function index($fin_year)
    {
        // DB::enableQueryLog();
        $indicator_count =
            DB::table('departments')
            ->leftJoin('output_indicators', function($join) use ($fin_year){
                $join->on('output_indicators.department_id', '=', 'departments.id')
                ->where('output_indicators.fin_year', '=', $fin_year);
            })
            ->leftJoin('outcome_indicators', function($join) use ($fin_year){
                $join->on('outcome_indicators.department_id', '=', 'departments.id')
                ->where('outcome_indicators.fin_year', '=', $fin_year);
            })
            // ->leftJoin('output_indicators', 'output_indicators.department_id', '=', 'departments.id')
            // ->leftJoin('outcome_indicators', 'outcome_indicators.department_id', '=', 'departments.id')
            ->select([
                'departments.id', 'departments.name',
                DB::raw('COUNT(DISTINCT(output_indicators.id)) AS OutputIndicator_count'),
                DB::raw('COUNT(DISTINCT(outcome_indicators.id)) AS OutcomeIndicator_count')
            ])
            ->groupBy('departments.id')
            ->orderBy('departments.name')
            //->toSql();
            ->get();
        // echo $indicator_count;
        // exit;
        return response()->json($indicator_count, 200);
        //$data['chart_data'] = json_encode($indicator_count);
        //return view('chart-js', $data);
    }

    public function indicator_by_department($id)
    {
        $indicator_count =
            DB::table('divisions')
            ->leftJoin('output_indicators', 'output_indicators.division_id', '=', 'divisions.id')
            ->leftJoin('outcome_indicators', 'outcome_indicators.division_id', '=', 'divisions.id')
            ->select([
                'divisions.id', 'divisions.name',
                DB::raw('COUNT(DISTINCT(output_indicators.id)) AS OutputIndicator_count'),
                DB::raw('COUNT(DISTINCT(outcome_indicators.id)) AS OutcomeIndicator_count')
            ])
            ->where('divisions.department_id', $id)
            ->groupBy('divisions.id')
            ->orderBy('divisions.name')
            ->get();
        return response()->json($indicator_count, 200);
    }

    public function count_for_dashboard($fin_year)
    {
        $state_share_outlay = FinancialOutlay::where(['fin_year' => $fin_year])->sum('state_share');
        $centre_share_outlay = FinancialOutlay::where(['fin_year' => $fin_year])->sum('center_share');
        $departments = Department::all()->count();
        $schemes = Scheme::where(['fin_year' => $fin_year])->count();
        $subschemes = SubScheme::where(['fin_year' => $fin_year])->count();
        $outputs = Output::where(['fin_year' => $fin_year])->count();
        $outcomes = Outcome::where(['fin_year' => $fin_year])->count();

        return response()->json([
            'financial_outlay' => round(($state_share_outlay + $centre_share_outlay) / 100, 2),
            'state_share_outlay' => round($state_share_outlay / 100, 2),
            'centre_share_outlay' => round($centre_share_outlay / 100, 2),
            'departments' => $departments,
            'schemes' => $schemes,
            'subschemes' => $subschemes,
            'outputs' => $outputs,
            'outcomes' => $outcomes,
            'status' => 200
        ]);
    }

    public function count_for_div_dashboard($id, $fin_year)
    {
        $state_share_outlay = FinancialOutlay::where(['division_id' => $id, 'fin_year' => $fin_year])->sum('state_share');
        $centre_share_outlay = FinancialOutlay::where(['division_id' => $id, 'fin_year' => $fin_year])->sum('center_share');
        $schemes = Scheme::where(['division_id' => $id, 'fin_year' => $fin_year])->count();
        $subschemes = SubScheme::where(['division_id' => $id, 'fin_year' => $fin_year])->count();
        $outputs = Output::where(['division_id' => $id, 'fin_year' => $fin_year])->count();
        $outcomes = Outcome::where(['division_id' => $id, 'fin_year' => $fin_year])->count();
        $output_indicators = OutputIndicator::where(['division_id' => $id, 'fin_year' => $fin_year])->count();
        $outcome_indicators = OutcomeIndicator::where(['division_id' => $id, 'fin_year' => $fin_year])->count();

        //On the basis of cumulative sum
        $rid = VerifiedReport::where(['division_id' => $id, 'fin_year' => $fin_year])
        ->where('verified_btn_flag', true)
        ->pluck('id')->toArray();
        $SubschemeExpenditure = SubSchemeExpenditure::where('division_id', $id)
            ->where('verified_status', 'A')
            ->whereIn('report_id', $rid)
            ->get();
        $sanction = $SubschemeExpenditure->sum('sanction');
        $allotment = $SubschemeExpenditure->sum('allotment');
        $expenditure = $SubschemeExpenditure->sum('expenditure');
        /*
        //On the basis of latest value
        $subSchemeExpenditure = SubSchemeExpenditure::where('division_id', $id)
            ->where('verified_status', 'A')
            ->latest('updated_at')
            ->get()
            ->unique('subscheme_id');

        $sanction = $subSchemeExpenditure->sum('sanction');
        $allotment = $subSchemeExpenditure->sum('allotment');
        $expenditure = $subSchemeExpenditure->sum('expenditure');
        */
        $submitted_status = SubScheme::where(['division_id' => $id, 'fin_year' => $fin_year])->where('submitted_status', '=', 'S')->count();
        if( $submitted_status == $subschemes) {
            $achievement_output = $output_indicators;
            $achievement_outcome = $outcome_indicators;
        } else {
            $subscheme_ids = SubScheme::where(['division_id' => $id, 'fin_year' => $fin_year])
                ->pluck('id')->toArray();
            $achievement_output = AchievementOutput::where('division_id', $id)
            ->where('submitted_status', '=', 'N')
            ->whereIn('subscheme_id', $subscheme_ids)
            ->distinct('outputindicator_id')->count('outputindicator_id');
            $achievement_outcome = AchievementOutcome::where('division_id', $id)
            ->where('submitted_status', '=', 'N')
            ->whereIn('subscheme_id', $subscheme_ids)
            ->distinct('outcomeindicator_id')->count('outcomeindicator_id');
            // $achievement_output = AchievementOutput::where('division_id', $id)->where('submitted_status', '=', 'N')->distinct('outputindicator_id')->count('outputindicator_id');
            // $achievement_outcome = AchievementOutcome::where('division_id', $id)->where('submitted_status', '=', 'N')->distinct('outcomeindicator_id')->count('outcomeindicator_id');
        }

        return response()->json([
            'financial_outlay' => round(($state_share_outlay + $centre_share_outlay) / 100, 2),
            'state_share_outlay' => round($state_share_outlay / 100, 2),
            'centre_share_outlay' => round($centre_share_outlay / 100, 2),
            'schemes' => $schemes,
            'subschemes' => $subschemes,
            'outputs' => $outputs,
            'outcomes' => $outcomes,
            'output_indicators' => $output_indicators,
            'outcome_indicators' => $outcome_indicators,
            'achievement_output' => $achievement_output,
            'achievement_outcome' => $achievement_outcome,
            'sanction' => round($sanction / 100, 2),
            'allotment' => round($allotment / 100, 2),
            'expenditure' => round($expenditure / 100, 2),
            'status' => 200
        ]);
    }

    public function public_indicator()
    {
        DB::enableQueryLog();
        $indicator_count =
            DB::table('departments')
            ->leftJoin('output_indicators', 'output_indicators.department_id', '=', 'departments.id')
            ->leftJoin('outcome_indicators', 'outcome_indicators.department_id', '=', 'departments.id')
            ->select([
                'departments.id', 'departments.name',
                DB::raw('COUNT(DISTINCT(output_indicators.id)) AS OutputIndicator_count'),
                DB::raw('COUNT(DISTINCT(outcome_indicators.id)) AS OutcomeIndicator_count')
            ])
            ->groupBy('departments.id')
            ->orderBy('departments.name')
            ->get();
        return response()->json($indicator_count, 200);
    }

    public function public_count_for_dashboard()
    {
        $state_share_outlay = FinancialOutlay::all()->sum('state_share');
        $centre_share_outlay = FinancialOutlay::all()->sum('center_share');
        $departments = Department::all()->count();
        $schemes = Scheme::all()->count();
        $subschemes = SubScheme::all()->count();
        $outputs = Output::all()->count();
        $outcomes = Outcome::all()->count();


        return response()->json([
            'financial_outlay' => round(($state_share_outlay + $centre_share_outlay) / 100, 2),
            'state_share_outlay' => round($state_share_outlay / 100, 2),
            'centre_share_outlay' => round($centre_share_outlay / 100, 2),
            'departments' => $departments,
            'schemes' => $schemes,
            'subschemes' => $subschemes,
            'outputs' => $outputs,
            'outcomes' => $outcomes,
            'status' => 200
        ]);
    }
}
