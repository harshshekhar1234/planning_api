<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSubSchemeAndReportIdToRiskRemarksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('risk_remarks', function (Blueprint $table) {
            $table->bigInteger('department_id');
            $table->bigInteger('division_id');
            $table->bigInteger('scheme_id');
            $table->bigInteger('subscheme_id');
            $table->bigInteger('report_id');
            $table->foreign('subscheme_id')->references('id')->on('sub_schemes');
            $table->foreign('report_id')->references('id')->on('verified_reports');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('risk_remarks', function (Blueprint $table) {
            $table->dropColumn('department_id');
            $table->dropColumn('division_id');
            $table->dropColumn('scheme_id');
            $table->dropColumn('subscheme_id');
            $table->dropColumn('report_id');
        });
    }
}
