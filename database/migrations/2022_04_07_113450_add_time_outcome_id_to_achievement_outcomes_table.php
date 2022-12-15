<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTimeOutcomeIdToAchievementOutcomesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('achievement_outcomes', function (Blueprint $table) {
            $table->timestamp('time')->after('outcomeindicator_id');
            $table->bigInteger('outcome_id')->after('subscheme_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('achievement_outcomes', function (Blueprint $table) {
            $table->dropColumn('time');
            $table->dropColumn('outcome_id');
        });
    }
}
