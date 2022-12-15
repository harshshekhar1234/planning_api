<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAorAchievementOutputsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('aor_achievement_outputs', function (Blueprint $table) {
            $table->id();
            $table->decimal('value', $precision = 12, $scale = 2); 
            $table->bigInteger('department_id');
            $table->bigInteger('division_id');
            $table->bigInteger('scheme_id');
            $table->bigInteger('subscheme_id');
            $table->bigInteger('output_id')->nullable();
            $table->bigInteger('outputindicator_id');            
            $table->timestamp('time');            
            $table->char('submitted_status', 1)->default("N");
            $table->char('verified_status', 1)->default("N");
            $table->bigInteger('report_id')->nullable();
            $table->foreign('outputindicator_id')->references('id')->on('output_indicators');
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
        Schema::dropIfExists('aor_achievement_outputs');
    }
}
