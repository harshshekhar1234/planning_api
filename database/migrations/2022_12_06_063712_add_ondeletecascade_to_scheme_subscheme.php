<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddOndeletecascadeToSchemeSubscheme extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('aor_achievement_outcomes', function (Blueprint $table) {
            $table->dropForeign('aor_achievement_outcomes_outcomeindicator_id_foreign');
            $table->foreign('outcomeindicator_id')
                ->references('id')->on('outcome_indicators')
                ->onDelete('cascade')
                ->onUpdate('cascade')
                ->change();
        });

        Schema::table('aor_achievement_outputs', function (Blueprint $table) {
            $table->dropForeign('aor_achievement_outputs_outputindicator_id_foreign');
            $table->foreign('outputindicator_id')
                ->references('id')->on('output_indicators')
                ->onDelete('cascade')
                ->onUpdate('cascade')
                ->change();
        });

        Schema::table('aor_risk_remarks', function (Blueprint $table) {
            $table->dropForeign('aor_risk_remarks_report_id_foreign');
            $table->dropForeign('aor_risk_remarks_subscheme_id_foreign');
            $table->foreign('report_id')
                ->references('id')->on('aor_verified_reports')
                ->onDelete('cascade')
                ->onUpdate('cascade')
                ->change();
            $table->foreign('subscheme_id')
                ->references('id')->on('sub_schemes')
                ->onDelete('cascade')
                ->onUpdate('cascade')
                ->change();
        });

        Schema::table('aor_sub_scheme_expenditures', function (Blueprint $table) {
            $table->dropForeign('aor_sub_scheme_expenditures_subscheme_id_foreign');
            $table->foreign('subscheme_id')
                ->references('id')->on('sub_schemes')
                ->onDelete('cascade')
                ->onUpdate('cascade')
                ->change();
        });

        Schema::table('aor_sub_scheme_verification_remarks', function (Blueprint $table) {
            $table->dropForeign('aor_sub_scheme_verification_remarks_subscheme_id_foreign');
            $table->foreign('subscheme_id')
                ->references('id')->on('sub_schemes')
                ->onDelete('cascade')
                ->onUpdate('cascade')
                ->change();
        });

        Schema::table('expenditure_achievements', function (Blueprint $table) {
            $table->dropForeign('expenditure_achievements_subscheme_id_foreign');
            $table->foreign('subscheme_id')
                ->references('id')->on('sub_schemes')
                ->onDelete('cascade')
                ->onUpdate('cascade')
                ->change();
        });

        Schema::table('expenditures', function (Blueprint $table) {
            $table->dropForeign('expenditures_subscheme_id_foreign');
            $table->foreign('subscheme_id')
                ->references('id')->on('sub_schemes')
                ->onDelete('cascade')
                ->onUpdate('cascade')
                ->change();
        });

        Schema::table('financial_outlays', function (Blueprint $table) {
            $table->dropForeign('financial_outlays_subscheme_id_foreign');
            $table->foreign('subscheme_id')
                ->references('id')->on('sub_schemes')
                ->onDelete('cascade')
                ->onUpdate('cascade')
                ->change();
        });

        Schema::table('outcomes', function (Blueprint $table) {
            $table->dropForeign('outcomes_subscheme_id_foreign');
            $table->foreign('subscheme_id')
                ->references('id')->on('sub_schemes')
                ->onDelete('cascade')
                ->onUpdate('cascade')
                ->change();
        });

        Schema::table('outputs', function (Blueprint $table) {
            $table->dropForeign('outputs_subscheme_id_foreign');
            $table->foreign('subscheme_id')
                ->references('id')->on('sub_schemes')
                ->onDelete('cascade')
                ->onUpdate('cascade')
                ->change();
        });

        Schema::table('risk_remarks', function (Blueprint $table) {
            $table->dropForeign('risk_remarks_report_id_foreign');
            $table->dropForeign('risk_remarks_subscheme_id_foreign');
            $table->foreign('report_id')
                ->references('id')->on('verified_reports')
                ->onDelete('cascade')
                ->onUpdate('cascade')
                ->change();
            $table->foreign('subscheme_id')
                ->references('id')->on('sub_schemes')
                ->onDelete('cascade')
                ->onUpdate('cascade')
                ->change();
        });

        Schema::table('sub_scheme_expenditures', function (Blueprint $table) {
            $table->dropForeign('sub_scheme_expenditures_subscheme_id_foreign');
            $table->foreign('subscheme_id')
                ->references('id')->on('sub_schemes')
                ->onDelete('cascade')
                ->onUpdate('cascade')
                ->change();
        });

        Schema::table('sub_scheme_verification_remarks', function (Blueprint $table) {
            $table->dropForeign('sub_scheme_verification_remarks_subscheme_id_foreign');
            $table->foreign('subscheme_id')
                ->references('id')->on('sub_schemes')
                ->onDelete('cascade')
                ->onUpdate('cascade')
                ->change();
        });

        Schema::table('sub_schemes', function (Blueprint $table) {
            $table->dropForeign('sub_schemes_scheme_id_foreign');
            $table->foreign('scheme_id')
                ->references('id')->on('schemes')
                ->onDelete('cascade')
                ->onUpdate('cascade')
                ->change();
        });

        Schema::table('subscheme_gender', function (Blueprint $table) {
            $table->dropForeign('subscheme_gender_subscheme_id_foreign');
            $table->foreign('subscheme_id')
                ->references('id')->on('sub_schemes')
                ->onDelete('cascade')
                ->onUpdate('cascade')
                ->change();
        });

        Schema::table('subscheme_sdgs', function (Blueprint $table) {
            $table->dropForeign('subscheme_sdgs_subscheme_id_foreign');
            $table->foreign('subscheme_id')
                ->references('id')->on('sub_schemes')
                ->onDelete('cascade')
                ->onUpdate('cascade')
                ->change();
        });

        Schema::table('subscheme_social', function (Blueprint $table) {
            $table->dropForeign('subscheme_social_subscheme_id_foreign');
            $table->foreign('subscheme_id')
                ->references('id')->on('sub_schemes')
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
        Schema::table('scheme_subscheme', function (Blueprint $table) {
            //
        });
    }
}
