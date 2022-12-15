<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddOndeletecascadeTotables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('outcome_indicators', function (Blueprint $table) {
            $table->dropForeign('outcome_indicators_outcome_id_foreign');
            $table->foreign('outcome_id')
                ->references('id')->on('outcomes')
                ->onDelete('cascade')
                ->onUpdate('cascade')
                ->change();
        });

        Schema::table('output_indicators', function (Blueprint $table) {
            $table->dropForeign('output_indicators_output_id_foreign');
            $table->foreign('output_id')
                ->references('id')->on('outputs')
                ->onDelete('cascade')
                ->onUpdate('cascade')
                ->change();
        });

        Schema::table('target_outcomes', function (Blueprint $table) {
            $table->dropForeign('target_outcomes_outcomeindicator_id_foreign');
            $table->foreign('outcomeindicator_id')
                ->references('id')->on('outcome_indicators')
                ->onDelete('cascade')
                ->onUpdate('cascade')
                ->change();
        });

        Schema::table('target_outputs', function (Blueprint $table) {
            $table->dropForeign('target_outputs_outputindicator_id_foreign');
            $table->foreign('outputindicator_id')
                ->references('id')->on('output_indicators')
                ->onDelete('cascade')
                ->onUpdate('cascade')
                ->change();
        });

        Schema::table('achievement_outcomes', function (Blueprint $table) {
            $table->dropForeign('achievement_outcomes_outcomeindicator_id_foreign');
            $table->foreign('outcomeindicator_id')
                ->references('id')->on('outcome_indicators')
                ->onDelete('cascade')
                ->onUpdate('cascade')
                ->change();
        });

        Schema::table('achievement_outputs', function (Blueprint $table) {
            $table->dropForeign('achievement_outputs_outputindicator_id_foreign');
            $table->foreign('outputindicator_id')
                ->references('id')->on('output_indicators')
                ->onDelete('cascade')
                ->onUpdate('cascade')
                ->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
