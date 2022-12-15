<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\MigOutcome;
use File;

class MigOutcomes extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        MigOutcome::truncate();

        $json = File::get("database/data/mig_outcomes.json");
        $outcomes = json_decode($json);

        foreach ($outcomes as $key => $value) {
            MigOutcome::create([
                "id" => $value->id,
                "name" => $value->name,
                "department_id" => $value->department_id,
                "division_id" => $value->division_id,
                "scheme_id" => $value->scheme_id,
                "subscheme_id" => $value->subscheme_id
            ]);
        }
    }
}
