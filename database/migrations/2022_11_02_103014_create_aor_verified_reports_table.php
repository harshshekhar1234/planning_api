<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAorVerifiedReportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('aor_verified_reports', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('division_id');
            $table->bigInteger('user_id');
            $table->string('from_date', 50)->default('report');
            $table->string('to_date', 50)->default('report');
            $table->boolean('verified_btn_flag')->default(0);
            $table->string('year', 50)->default('2022-23');
            $table->foreign('division_id')->references('id')->on('divisions');
            $table->foreign('user_id')->references('id')->on('users');
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
        Schema::dropIfExists('aor_verified_reports');
    }
}
