<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Scheme;
use File;

class Schemes extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Scheme::truncate();
  
        $json = File::get("database/data/schemes.json");
        $schemes = json_decode($json);
  
        foreach ($schemes as $key => $value) {
            Scheme::create([
                "id" => $value->id,
                "state_name" => $value->state_name,
                "center_name" => $value->center_name,
                "center_code" => $value->center_code,
                "state_code" => $value->state_code,
                "division_id" => $value->division_id,
                "department_id" => $value->department_id,
                "created_at" => $value->created_at,
                "updated_at" => $value->updated_at
            ]);
        }
    }
}
