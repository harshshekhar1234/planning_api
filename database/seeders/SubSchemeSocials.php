<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\SubschemeSocial;
use File;

class SubSchemeSocials extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        SubschemeSocial::truncate();
  
        $json = File::get("database/data/subscheme_social.json");
        $subscheme_social = json_decode($json);
  
        foreach ($subscheme_social as $key => $value) {
            SubschemeSocial::create([
                "id" => $value->id,
                "subscheme_id" => $value->subscheme_id,
                "social_id" => $value->social_id,
                "created_at" => $value->created_at,
                "updated_at" => $value->updated_at
            ]);
        }
    }
}
