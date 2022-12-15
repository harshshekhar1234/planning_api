<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Department;
use File;

class Departments extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Department::truncate();
  
        $json = File::get("database/data/departments.json");
        $departments = json_decode($json);
  
        foreach ($departments as $key => $value) {
            Department::create([
                "id" => $value->id,
                "name" => $value->name,
                "created_at" => $value->created_at,
                "updated_at" => $value->updated_at
            ]);
        }
    }
}
