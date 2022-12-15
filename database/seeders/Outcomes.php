<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Outcome;
use File;

class Outcomes extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Outcome::truncate();
  
        $json = File::get("database/data/outcomes.json");
        $outcomes = json_decode($json);
  
        foreach ($outcomes as $key => $value) {
            Outcome::create([
                "id" => $value->id,
                "name" => $value->name,
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
