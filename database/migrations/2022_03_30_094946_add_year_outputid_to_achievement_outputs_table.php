<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddYearOutputidToAchievementOutputsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('achievement_outputs', function (Blueprint $table) {
            $table->timestamp('time')->after('outputindicator_id');
            $table->bigInteger('output_id')->after('subscheme_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('achievement_outputs', function (Blueprint $table) {
            $table->dropColumn('time');
            $table->dropColumn('output_id');
        });
    }
}
