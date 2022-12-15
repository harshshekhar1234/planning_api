<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\SubschemeSdg;
use File;

class SubSchemeSdgs extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        SubschemeSdg::truncate();
  
        $json = File::get("database/data/subscheme_sdgs.json");
        $subscheme_sdgs = json_decode($json);
  
        foreach ($subscheme_sdgs as $key => $value) {
            SubschemeSdg::create([
                "id" => $value->id,
                "subscheme_id" => $value->subscheme_id,
                "sdg_id" => $value->sdg_id,
                "created_at" => $value->created_at,
                "updated_at" => $value->updated_at
            ]);
        }
    }
}
