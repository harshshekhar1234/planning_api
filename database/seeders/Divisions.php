<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Division;
use File;

class Divisions extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Division::truncate();
  
        $json = File::get("database/data/divisions.json");
        $divisions = json_decode($json);
  
        foreach ($divisions as $key => $value) {
            Division::create([
                "id" => $value->id,
                "name" => $value->name,
                "department_id" => $value->department_id,
                "created_at" => $value->created_at,
                "updated_at" => $value->updated_at,
                "demand_no" => $value->demand_no
            ]);
        }
    }
}
