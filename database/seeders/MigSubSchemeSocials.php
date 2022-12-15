<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\MigSubschemeSocial;
use File;

class MigSubSchemeSocials extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        MigSubschemeSocial::truncate();

        $json = File::get("database/data/mig_subscheme_social.json");
        $subscheme_social = json_decode($json);

        foreach ($subscheme_social as $key => $value) {
            MigSubschemeSocial::create([
                "id" => $value->id,
                "subscheme_id" => $value->subscheme_id,
                "social_id" => $value->social_id
            ]);
        }
    }
}
