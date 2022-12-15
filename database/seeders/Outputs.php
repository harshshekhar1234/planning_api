<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Output;
use File;

class Outputs extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Output::truncate();
  
        $json = File::get("database/data/outputs.json");
        $outputs = json_decode($json);
  
        foreach ($outputs as $key => $value) {
            Output::create([
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
