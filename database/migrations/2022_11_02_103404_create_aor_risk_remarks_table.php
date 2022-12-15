<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAorRiskRemarksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('aor_risk_remarks', function (Blueprint $table) {
            $table->id();
            $table->text('remarks');
            $table->bigInteger('department_id');
            $table->bigInteger('division_id');
            $table->bigInteger('scheme_id');
            $table->bigInteger('subscheme_id');
            $table->bigInteger('report_id');
            $table->foreign('subscheme_id')->references('id')->on('sub_schemes');
            $table->foreign('report_id')->references('id')->on('aor_verified_reports');
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
        Schema::dropIfExists('aor_risk_remarks');
    }
}
