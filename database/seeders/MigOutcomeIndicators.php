<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\MigOutcomeIndicator;
use File;

class MigOutcomeIndicators extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        MigOutcomeIndicator::truncate();

        $json = File::get("database/data/mig_outcome_indicators.json");
        $outcome_indicators = json_decode($json);

        foreach ($outcome_indicators as $key => $value) {
            MigOutcomeIndicator::create([
                "id" => $value->id,
                "name" => $value->name,
                "department_id" => $value->department_id,
                "division_id" => $value->division_id,
                "scheme_id" => $value->scheme_id,
                "subscheme_id" => $value->subscheme_id,
                "outcome_id" => $value->outcome_id
            ]);
        }
    }
}
