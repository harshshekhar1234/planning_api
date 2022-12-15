<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\OutputIndicator;
use File;

class OutputIndicators extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        OutputIndicator::truncate();
  
        $json = File::get("database/data/output_indicators.json");
        $output_indicators = json_decode($json);
  
        foreach ($output_indicators as $key => $value) {
            OutputIndicator::create([
                "id" => $value->id,
                "name" => $value->name,
                "department_id" => $value->department_id,
                "division_id" => $value->division_id,
                "scheme_id" => $value->scheme_id,
                "subscheme_id" => $value->subscheme_id,
                "output_id" => $value->output_id,
                "created_at" => $value->created_at,
                "updated_at" => $value->updated_at
            ]);
        }
    }
}
