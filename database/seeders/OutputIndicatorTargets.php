<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\TargetOutput;
use File;

class OutputIndicatorTargets extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        TargetOutput::truncate();
  
        $json = File::get("database/data/target_outputs.json");
        $target_outputs = json_decode($json);
  
        foreach ($target_outputs as $key => $value) {
            TargetOutput::create([
                "id" => $value->id,
                "value" => $value->value,
                "department_id" => $value->department_id,
                "division_id" => $value->division_id,
                "scheme_id" => $value->scheme_id,
                "subscheme_id" => $value->subscheme_id,
                "outputindicator_id" => $value->outputindicator_id,
                "created_at" => $value->created_at,
                "updated_at" => $value->updated_at,
                "year" => $value->year,
                "measurement" => $value->measurement,
                "output_id" => $value->output_id
            ]);
        }
    }
}
