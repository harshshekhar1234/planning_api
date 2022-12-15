<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\TargetOutcome;
use File;

class OutcomeIndicatorTargets extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        TargetOutcome::truncate();
  
        $json = File::get("database/data/target_outcomes.json");
        $target_outcomes = json_decode($json);
  
        foreach ($target_outcomes as $key => $value) {
            TargetOutcome::create([
                "id" => $value->id,
                "value" => $value->value,
                "department_id" => $value->department_id,
                "division_id" => $value->division_id,
                "scheme_id" => $value->scheme_id,
                "subscheme_id" => $value->subscheme_id,
                "outcomeindicator_id" => $value->outcomeindicator_id,
                "created_at" => $value->created_at,
                "updated_at" => $value->updated_at,
                "outcome_id" => $value->outcome_id,
                "year" => $value->year,
                "measurement" => $value->measurement
            ]);
        }
    }
}
