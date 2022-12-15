<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\MigSubScheme;
use File;

class MigSubSchemes extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        MigSubScheme::truncate();

        $json = File::get("database/data/mig_sub_schemes.json");
        $sub_schemes = json_decode($json);

        foreach ($sub_schemes as $key => $value) {
            MigSubScheme::create([
                "id" => $value->id,
                "name" => $value->name,
                "subscheme_code" => $value->subscheme_code,
                "scheme_id" => $value->scheme_id,
                "division_id" => $value->division_id,
                "department_id" => $value->department_id,
                "risk_remarks" => $value->risk_remarks
            ]);
        }
    }
}
