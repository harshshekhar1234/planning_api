<?php

namespace App\Http\Controllers\DBAdmin;

use App\Http\Controllers\Controller;
use App\Models\BudgetEntrySetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BudgetEntrySettingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try
        {
            BudgetEntrySetting::insert([
                [
                    "id" => 1,
                    "division_id" => 1,
                    "entry" => 1,
                    "pending" => 1,
                    "created_at" => now(),
                    "updated_at" => now()
                ],
                [
                    "id" => 2,
                    "division_id" => 2,
                    "entry" => 1,
                    "pending" => 1,
                    "created_at" => now(),
                    "updated_at" => now()
                ],
                [
                    "id" => 3,
                    "division_id" => 3,
                    "entry" => 1,
                    "pending" => 1,
                    "created_at" => now(),
                    "updated_at" => now()
                ],
                [
                    "id" => 4,
                    "division_id" => 4,
                    "entry" => 1,
                    "pending" => 1,
                    "created_at" => now(),
                    "updated_at" => now()
                ],
                [
                    "id" => 5,
                    "division_id" => 5,
                    "entry" => 1,
                    "pending" => 1,
                    "created_at" => now(),
                    "updated_at" => now()
                ],
                [
                    "id" => 6,
                    "division_id" => 6,
                    "entry" => 1,
                    "pending" => 1,
                    "created_at" => now(),
                    "updated_at" => now()
                ],
                [
                    "id" => 7,
                    "division_id" => 7,
                    "entry" => 1,
                    "pending" => 1,
                    "created_at" => now(),
                    "updated_at" => now()
                ],
                [
                    "id" => 8,
                    "division_id" => 8,
                    "entry" => 1,
                    "pending" => 1,
                    "created_at" => now(),
                    "updated_at" => now()
                ],
                [
                    "id" => 9,
                    "division_id" => 9,
                    "entry" => 1,
                    "pending" => 1,
                    "created_at" => now(),
                    "updated_at" => now()
                ],
                [
                    "id" => 10,
                    "division_id" => 10,
                    "entry" => 1,
                    "pending" => 1,
                    "created_at" => now(),
                    "updated_at" => now()
                ],
                [
                    "id" => 11,
                    "division_id" => 11,
                    "entry" => 1,
                    "pending" => 1,
                    "created_at" => now(),
                    "updated_at" => now()
                ],
                [
                    "id" => 12,
                    "division_id" => 12,
                    "entry" => 1,
                    "pending" => 1,
                    "created_at" => now(),
                    "updated_at" => now()
                ],
                [
                    "id" => 13,
                    "division_id" => 13,
                    "entry" => 1,
                    "pending" => 1,
                    "created_at" => now(),
                    "updated_at" => now()
                ],
                [
                    "id" => 14,
                    "division_id" => 14,
                    "entry" => 1,
                    "pending" => 1,
                    "created_at" => now(),
                    "updated_at" => now()
                ],
                [
                    "id" => 15,
                    "division_id" => 15,
                    "entry" => 1,
                    "pending" => 1,
                    "created_at" => now(),
                    "updated_at" => now()
                ],
                [
                    "id" => 16,
                    "division_id" => 16,
                    "entry" => 1,
                    "pending" => 1,
                    "created_at" => now(),
                    "updated_at" => now()
                ],
                [
                    "id" => 17,
                    "division_id" => 17,
                    "entry" => 1,
                    "pending" => 1,
                    "created_at" => now(),
                    "updated_at" => now()
                ],
                [
                    "id" => 18,
                    "division_id" => 18,
                    "entry" => 1,
                    "pending" => 1,
                    "created_at" => now(),
                    "updated_at" => now()
                ],
                [
                    "id" => 19,
                    "division_id" => 19,
                    "entry" => 1,
                    "pending" => 1,
                    "created_at" => now(),
                    "updated_at" => now()
                ],
                [
                    "id" => 20,
                    "division_id" => 20,
                    "entry" => 1,
                    "pending" => 1,
                    "created_at" => now(),
                    "updated_at" => now()
                ]
            ]);
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
    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $div_budget_entry_settings = BudgetEntrySetting::where('division_id', $id)->first();
        if (is_null($div_budget_entry_settings)) {
            return $this->sendError('No Budget Entry Settings found for the Divison.');
        }
        return response()->json($div_budget_entry_settings, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\budget_entry_settings  $budget_entry_settings
     * @return \Illuminate\Http\Response
     */
    public function edit(budget_entry_settings $budget_entry_settings)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'division_id' => 'required|numeric',
            'entry' => 'required|boolean',
            'pending' => 'required|boolean',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
            ]);
        }

        $Budget_Entry_Setting = BudgetEntrySetting::where('division_id', $request->division_id)->first();
        if (is_null($Budget_Entry_Setting)) {
            return response()->json([
                'status' => 404,
                'message' => 'No Budget Entry Settings found for the Divison.'
            ]);
        }
        $Budget_Entry_Setting->entry = $request->entry;
        $Budget_Entry_Setting->pending = $request->pending;
        $Budget_Entry_Setting->save();

        return response()->json([
            'status' => 200,
            'message' => 'Budget Entry Settings updated successfully for the division'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\budget_entry_settings  $budget_entry_settings
     * @return \Illuminate\Http\Response
     */
    public function destroy(budget_entry_settings $budget_entry_settings)
    {
        //
    }
}
