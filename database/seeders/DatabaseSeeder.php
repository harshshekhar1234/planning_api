<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\Departments;
use Database\Seeders\Divisions;
use Database\Seeders\Schemes;
use Database\Seeders\SubSchemes;
use Database\Seeders\Outputs;
use Database\Seeders\OutputIndicators;
use Database\Seeders\OutputIndicatorTargets;
use Database\Seeders\Outcomes;
use Database\Seeders\OutcomeIndicators;
use Database\Seeders\OutcomeIndicatorTargets;
use Database\Seeders\Genders;
use Database\Seeders\Socials;
use Database\Seeders\SdgGoals;
use Database\Seeders\FinancialOutlays;
use Database\Seeders\SubSchemeGenders;
use Database\Seeders\SubSchemeSocials;
use Database\Seeders\SubSchemeSdgs;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call([
            Departments::class,
            Divisions::class,
            Schemes::class,
            SubSchemes::class,
            Outputs::class,
            OutputIndicators::class,
            OutputIndicatorTargets::class,
            Outcomes::class,
            OutcomeIndicators::class,
            OutcomeIndicatorTargets::class,
            Genders::class,
            Socials::class,
            SdgGoals::class,
            FinancialOutlays::class,
            SubSchemeGenders::class,
            SubSchemeSocials::class,
            SubSchemeSdgs::class,
        ]);
    }
}
