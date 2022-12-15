<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Social;
use File;

class Socials extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Social::truncate();
  
        $json = File::get("database/data/socials.json");
        $socials = json_decode($json);
  
        foreach ($socials as $key => $value) {
            Social::create([
                "id" => $value->id,
                "name" => $value->name,
                "created_at" => $value->created_at,
                "updated_at" => $value->updated_at
            ]);
        }
    }
}
