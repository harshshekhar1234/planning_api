<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMigOutcomeIndicatorTargetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mig_outcome_indicator_targets', function (Blueprint $table) {
            $table->id();
            $table->decimal('value', $precision = 12, $scale = 2);
            $table->bigInteger('department_id');
            $table->bigInteger('division_id');
            $table->bigInteger('scheme_id');
            $table->bigInteger('subscheme_id');
            $table->bigInteger('outcome_id');
            $table->bigInteger('outcomeindicator_id');
            $table->string('measurement');
            $table->year('year');
            $table->foreign('outcomeindicator_id')->references('id')->on('mig_outcome_indicators')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('outcome_id')->references('id')->on('mig_outcomes')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('subscheme_id')->references('id')->on('mig_sub_schemes')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('scheme_id')->references('id')->on('mig_schemes')->onDelete('cascade')->onUpdate('cascade');
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
        Schema::dropIfExists('mig_outcome_indicator_targets');
    }
}
