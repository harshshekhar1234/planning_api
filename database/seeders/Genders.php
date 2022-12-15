<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Gender;
use File;

class Genders extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Gender::truncate();
  
        $json = File::get("database/data/genders.json");
        $genders = json_decode($json);
  
        foreach ($genders as $key => $value) {
            Gender::create([
                "id" => $value->id,
                "name" => $value->name,
                "created_at" => $value->created_at,
                "updated_at" => $value->updated_at
            ]);
        }
    }
}
