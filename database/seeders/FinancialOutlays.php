<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\FinancialOutlay;
use File;

class FinancialOutlays extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        FinancialOutlay::truncate();
  
        $json = File::get("database/data/financial_outlays.json");
        $financial_outlays = json_decode($json);
  
        foreach ($financial_outlays as $key => $value) {
            FinancialOutlay::create([
                "id" => $value->id,
                "state_share" => $value->state_share,
                "center_share" => $value->center_share,
                "department_id" => $value->department_id,
                "division_id" => $value->division_id,
                "scheme_id" => $value->scheme_id,
                "subscheme_id" => $value->subscheme_id,
                "created_at" => $value->created_at,
                "updated_at" => $value->updated_at
            ]);
        }
    }
}
