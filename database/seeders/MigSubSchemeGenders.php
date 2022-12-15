<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\MigSubSchemeGender;
use File;

class MigSubSchemeGenders extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        MigSubSchemeGender::truncate();

        $json = File::get("database/data/mig_subscheme_gender.json");
        $subscheme_gender = json_decode($json);

        foreach ($subscheme_gender as $key => $value) {
            MigSubSchemeGender::create([
                "id" => $value->id,
                "subscheme_id" => $value->subscheme_id,
                "gender_id" => $value->gender_id
            ]);
        }
    }
}
