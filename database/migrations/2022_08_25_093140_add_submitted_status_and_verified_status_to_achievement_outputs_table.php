<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSubmittedStatusAndVerifiedStatusToAchievementOutputsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('achievement_outputs', function (Blueprint $table) {
            $table->char('submitted_status', 1)->default("N");
            $table->char('verified_status', 1)->default("N");
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
            $table->dropColumn('submitted_status');
            $table->dropColumn('verified_status');
        });
    }
}
