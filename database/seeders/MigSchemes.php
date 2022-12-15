<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\MigScheme;
use File;

class MigSchemes extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        MigScheme::truncate();
        
        $json = File::get("database/data/mig_schemes.json");
        $schemes = json_decode($json);
        foreach ($schemes as $key => $value) {
            MigScheme::create([
                "id" => $value->id,
                "state_name" => $value->state_name,
                "center_name" => $value->center_name,
                "center_code" => $value->center_code,
                "state_code" => $value->state_code,
                "division_id" => $value->division_id,
                "department_id" => $value->department_id
            ]);
        }
    }
}
