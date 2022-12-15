<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\MigOutputIndicator;
use File;

class MigOutputIndicators extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        MigOutputIndicator::truncate();

        $json = File::get("database/data/mig_output_indicators.json");
        $output_indicators = json_decode($json);

        foreach ($output_indicators as $key => $value) {
            MigOutputIndicator::create([
                "id" => $value->id,
                "name" => $value->name,
                "department_id" => $value->department_id,
                "division_id" => $value->division_id,
                "scheme_id" => $value->scheme_id,
                "subscheme_id" => $value->subscheme_id,
                "output_id" => $value->output_id
            ]);
        }
    }
}
