<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\OutcomeIndicator;
use File;

class OutcomeIndicators extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        OutcomeIndicator::truncate();
  
        $json = File::get("database/data/outcome_indicators.json");
        $outcome_indicators = json_decode($json);
  
        foreach ($outcome_indicators as $key => $value) {
            OutcomeIndicator::create([
                "id" => $value->id,
                "name" => $value->name,
                "department_id" => $value->department_id,
                "division_id" => $value->division_id,
                "scheme_id" => $value->scheme_id,
                "subscheme_id" => $value->subscheme_id,
                "outcome_id" => $value->outcome_id,
                "created_at" => $value->created_at,
                "updated_at" => $value->updated_at
            ]);
        }
    }
}
