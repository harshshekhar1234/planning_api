<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\SubschemeGender;
use File;

class SubSchemeGenders extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        SubschemeGender::truncate();
  
        $json = File::get("database/data/subscheme_gender.json");
        $subscheme_gender = json_decode($json);
  
        foreach ($subscheme_gender as $key => $value) {
            SubschemeGender::create([
                "id" => $value->id,
                "subscheme_id" => $value->subscheme_id,
                "gender_id" => $value->gender_id,
                "created_at" => $value->created_at,
                "updated_at" => $value->updated_at
            ]);
        }
    }
}
