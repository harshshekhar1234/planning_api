<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Department;
use App\Models\Scheme;
use App\Models\SubScheme;
use App\Models\Output;
use App\Models\Outcome;
use App\Models\OutcomeIndicator;
use App\Models\OutputIndicator;
use App\Models\FinancialOutlay;
use App\Models\MigScheme;
use App\Models\MigSubScheme;
use App\Models\MigOutput;
use App\Models\MigOutcome;
use App\Models\MigOutcomeIndicator;
use App\Models\MigOutputIndicator;
use App\Models\MigFinancialOutlay;

class DepartmentController extends Controller
{

  public function index()
  {
    $departments = Department::orderBy('name')->get();
    return response()->json($departments, 200);
  }

  public function store(Request $request)
  {
    $department = new Department;
    $department->name = $request->name;
    $department->save();
  }

  public function show($id)
  {
    $department = Department::find($id);
    if (is_null($department)) {
      return $this->sendError('Department not found.');
    }
    return response()->json($department, 200);
  }
  public function dept_dashboard($fin_year)
  {
    $departments = Department::orderBy('name')->get();
    foreach ($departments as $department) {
      $state_share = FinancialOutlay::where(['department_id' => $department->id, 'fin_year' => $fin_year])->sum('state_share');
      $center_share = FinancialOutlay::where(['department_id' => $department->id, 'fin_year' => $fin_year])->sum('center_share');
      $department->outlay = ($state_share + $center_share) / 100;
      $department->scheme = Scheme::where(['department_id' => $department->id, 'fin_year' => $fin_year])->count();
      $department->subscheme = SubScheme::where(['department_id' => $department->id, 'fin_year' => $fin_year])->count();
      $department->output = Output::where(['department_id' => $department->id, 'fin_year' => $fin_year])->count();
      $department->outcome = Outcome::where(['department_id' => $department->id, 'fin_year' => $fin_year])->count();
      $department->output_indicator = OutputIndicator::where(['department_id' => $department->id, 'fin_year' => $fin_year])->count();
      $department->outcome_indicator = OutcomeIndicator::where(['department_id' => $department->id, 'fin_year' => $fin_year])->count();
    }
    return response()->json($departments, 200);
  }

  public function mig_dept_dashboard()
  {
    $departments = Department::orderBy('name')->get();
    foreach ($departments as $department) {
      $state_share = MigFinancialOutlay::where('department_id', $department->id)->sum('state_share');
      $center_share = MigFinancialOutlay::where('department_id', $department->id)->sum('center_share');
      $department->outlay = ($state_share + $center_share) / 100;
      $department->scheme = MigScheme::where('department_id', $department->id)->count();
      $department->subscheme = MigSubScheme::where('department_id', $department->id)->count();
      $department->output = MigOutput::where('department_id', $department->id)->count();
      $department->outcome = MigOutcome::where('department_id', $department->id)->count();
      $department->output_indicator = MigOutputIndicator::where('department_id', $department->id)->count();
      $department->outcome_indicator = MigOutcomeIndicator::where('department_id', $department->id)->count();
    }
    return response()->json($departments, 200);
  }
}
