<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAorAchievementOutcomesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('aor_achievement_outcomes', function (Blueprint $table) {
            $table->id();
            $table->decimal('value', $precision = 12, $scale = 2);
            $table->bigInteger('department_id');
            $table->bigInteger('division_id');
            $table->bigInteger('scheme_id');
            $table->bigInteger('subscheme_id');
            $table->bigInteger('outcome_id')->nullable();
            $table->bigInteger('outcomeindicator_id');
            $table->timestamp('time');
            $table->char('submitted_status', 1)->default("N");
            $table->char('verified_status', 1)->default("N");
            $table->bigInteger('report_id')->nullable();
            $table->foreign('outcomeindicator_id')->references('id')->on('outcome_indicators');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('aor_achievement_outcomes');
    }
}
