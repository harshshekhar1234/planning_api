<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sdg_goal;

class SdgGoalController extends Controller
{
    public function index()
    {
        $sdg_goals = Sdg_goal::all();
        return response()->json($sdg_goals, 200);
    }
}
