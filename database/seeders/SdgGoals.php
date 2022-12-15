<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Sdg_goal;
use File;

class SdgGoals extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Sdg_goal::truncate();
  
        $json = File::get("database/data/sdg_goals.json");
        $sdg_goals = json_decode($json);
  
        foreach ($sdg_goals as $key => $value) {
            Sdg_goal::create([
                "id" => $value->id,
                "goal_number" => $value->goal_number,
                "goal_name" => $value->goal_name,
                "created_at" => $value->created_at,
                "updated_at" => $value->updated_at
            ]);
        }
    }
}
