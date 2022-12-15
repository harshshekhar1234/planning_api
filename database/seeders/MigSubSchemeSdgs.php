<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\MigSubschemeSdg;
use File;

class MigSubSchemeSdgs extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        MigSubschemeSdg::truncate();

        $json = File::get("database/data/mig_subscheme_sdgs.json");
        $subscheme_sdgs = json_decode($json);

        foreach ($subscheme_sdgs as $key => $value) {
            MigSubschemeSdg::create([
                "id" => $value->id,
                "subscheme_id" => $value->subscheme_id,
                "sdg_id" => $value->sdg_id
            ]);
        }
    }
}
