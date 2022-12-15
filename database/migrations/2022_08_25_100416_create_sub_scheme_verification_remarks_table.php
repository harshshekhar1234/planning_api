<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubSchemeVerificationRemarksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sub_scheme_verification_remarks', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('subscheme_id');
            $table->longText('remarks');
            $table->bigInteger('user_id');
            $table->string('user_role');
            $table->timestamps();
            $table->foreign('subscheme_id')->references('id')->on('sub_schemes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sub_scheme_verification_remarks');
    }
}
