<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\MigOutcomeIndicatorTarget;
use File;

class MigOutcomeIndicatorTargets extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        MigOutcomeIndicatorTarget::truncate();

        $json = File::get("database/data/mig_target_outcomes.json");
        $target_outcomes = json_decode($json);

        foreach ($target_outcomes as $key => $value) {
            MigOutcomeIndicatorTarget::create([
                "id" => $value->id,
                "value" => $value->value,
                "department_id" => $value->department_id,
                "division_id" => $value->division_id,
                "scheme_id" => $value->scheme_id,
                "subscheme_id" => $value->subscheme_id,
                "outcome_id" => $value->outcome_id,
                "outcomeindicator_id" => $value->outcomeindicator_id,
                "year" => $value->year,
                "measurement" => $value->measurement
            ]);
        }
    }
}
