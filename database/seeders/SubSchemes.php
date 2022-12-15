<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\SubScheme;
use File;

class SubSchemes extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        SubScheme::truncate();
  
        $json = File::get("database/data/sub_schemes.json");
        $sub_schemes = json_decode($json);
  
        foreach ($sub_schemes as $key => $value) {
            SubScheme::create([
                "id" => $value->id,
                "name" => $value->name,
                "subscheme_code" => $value->subscheme_code,
                "scheme_id" => $value->scheme_id,
                "division_id" => $value->division_id,
                "department_id" => $value->department_id,
                "created_at" => $value->created_at,
                "updated_at" => $value->updated_at,
                "risk_remarks" => $value->risk_remarks
            ]);
        }
    }
}
