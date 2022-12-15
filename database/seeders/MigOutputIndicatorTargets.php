<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\MigOutputIndicatorTarget;
use File;

class MigOutputIndicatorTargets extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        MigOutputIndicatorTarget::truncate();

        $json = File::get("database/data/mig_target_outputs.json");
        $target_outputs = json_decode($json);

        foreach ($target_outputs as $key => $value) {
            MigOutputIndicatorTarget::create([
                "id" => $value->id,
                "value" => $value->value,
                "department_id" => $value->department_id,
                "division_id" => $value->division_id,
                "scheme_id" => $value->scheme_id,
                "subscheme_id" => $value->subscheme_id,
                "output_id" => $value->output_id,
                "outputindicator_id" => $value->outputindicator_id,
                "year" => $value->year,
                "measurement" => $value->measurement,
                
            ]);
        }
    }
}
