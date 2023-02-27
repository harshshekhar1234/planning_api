<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFinYearToTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('schemes', function (Blueprint $table) {
            $table->string('fin_year', 4)->default('2223');
        });

        Schema::table('sub_schemes', function (Blueprint $table) {
            $table->string('fin_year', 4)->default('2223');
        });

        Schema::table('outputs', function (Blueprint $table) {
            $table->string('fin_year', 4)->default('2223');
        });

        Schema::table('output_indicators', function (Blueprint $table) {
            $table->string('fin_year', 4)->default('2223');
        });

        Schema::table('outcomes', function (Blueprint $table) {
            $table->string('fin_year', 4)->default('2223');
        });

        Schema::table('outcome_indicators', function (Blueprint $table) {
            $table->string('fin_year', 4)->default('2223');
        });

        Schema::table('financial_outlays', function (Blueprint $table) {
            $table->string('fin_year', 4)->default('2223');
        });

        Schema::table('mig_schemes', function (Blueprint $table) {
            $table->string('fin_year', 4)->default('2324');
        });

        Schema::table('mig_sub_schemes', function (Blueprint $table) {
            $table->string('fin_year', 4)->default('2324');
        });

        Schema::table('mig_outputs', function (Blueprint $table) {
            $table->string('fin_year', 4)->default('2324');
        });

        Schema::table('mig_output_indicators', function (Blueprint $table) {
            $table->string('fin_year', 4)->default('2324');
        });

        Schema::table('mig_outcomes', function (Blueprint $table) {
            $table->string('fin_year', 4)->default('2324');
        });

        Schema::table('mig_outcome_indicators', function (Blueprint $table) {
            $table->string('fin_year', 4)->default('2324');
        });

        Schema::table('mig_financial_outlays', function (Blueprint $table) {
            $table->string('fin_year', 4)->default('2324');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('schemes', function (Blueprint $table) {
            $table->dropColumn('fin_year');
        });

        Schema::table('sub_schemes', function (Blueprint $table) {
            $table->dropColumn('fin_year');
        });

        Schema::table('outputs', function (Blueprint $table) {
            $table->dropColumn('fin_year');
        });

        Schema::table('output_indicators', function (Blueprint $table) {
            $table->dropColumn('fin_year');
        });

        Schema::table('outcomes', function (Blueprint $table) {
            $table->dropColumn('fin_year');
        });

        Schema::table('outcome_indicators', function (Blueprint $table) {
            $table->dropColumn('fin_year');
        });

        Schema::table('financial_outlays', function (Blueprint $table) {
            $table->dropColumn('fin_year');
        });

        Schema::table('mig_schemes', function (Blueprint $table) {
            $table->dropColumn('fin_year');
        });

        Schema::table('mig_sub_schemes', function (Blueprint $table) {
            $table->dropColumn('fin_year');
        });

        Schema::table('mig_outputs', function (Blueprint $table) {
            $table->dropColumn('fin_year');
        });

        Schema::table('mig_output_indicators', function (Blueprint $table) {
            $table->dropColumn('fin_year');
        });

        Schema::table('mig_outcomes', function (Blueprint $table) {
            $table->dropColumn('fin_year');
        });

        Schema::table('mig_outcome_indicators', function (Blueprint $table) {
            $table->dropColumn('fin_year');
        });

        Schema::table('mig_financial_outlays', function (Blueprint $table) {
            $table->dropColumn('fin_year');
        });
    }
}
