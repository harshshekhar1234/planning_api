<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\MigSchemes;
use Database\Seeders\MigSubSchemes;
use Database\Seeders\MigOutputs;
use Database\Seeders\MigOutputIndicators;
use Database\Seeders\MigOutputIndicatorTargets;
use Database\Seeders\MigOutcomes;
use Database\Seeders\MigOutcomeIndicators;
use Database\Seeders\MigOutcomeIndicatorTargets;
use Database\Seeders\MigFinancialOutlays;
use Database\Seeders\MigSubSchemeGenders;
use Database\Seeders\MigSubSchemeSocials;
use Database\Seeders\MigSubSchemeSdgs;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            MigSchemes::class,
            MigSubSchemes::class,
            MigOutputs::class,
            MigOutputIndicators::class,
            MigOutputIndicatorTargets::class,
            MigOutcomes::class,
            MigOutcomeIndicators::class,
            MigOutcomeIndicatorTargets::class,
            MigFinancialOutlays::class,
            MigSubSchemeGenders::class,
            MigSubSchemeSocials::class,
            MigSubSchemeSdgs::class,
        ]);
    }
}
