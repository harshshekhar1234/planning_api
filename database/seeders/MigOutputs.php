<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\MigOutput;
use File;

class MigOutputs extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        MigOutput::truncate();

        $json = File::get("database/data/mig_outputs.json");
        $outputs = json_decode($json);

        foreach ($outputs as $key => $value) {
            MigOutput::create([
                "id" => $value->id,
                "name" => $value->name,
                "department_id" => $value->department_id,
                "division_id" => $value->division_id,
                "scheme_id" => $value->scheme_id,
                "subscheme_id" => $value->subscheme_id
            ]);
        }
    }
}
