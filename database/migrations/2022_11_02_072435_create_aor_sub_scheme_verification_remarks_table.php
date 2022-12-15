<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAorSubSchemeVerificationRemarksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('aor_sub_scheme_verification_remarks', function (Blueprint $table) {
            $table->id();
            $table->longText('remarks');
            $table->bigInteger('subscheme_id');
            $table->bigInteger('user_id');
            $table->foreign('subscheme_id')->references('id')->on('sub_schemes');
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
        Schema::dropIfExists('aor_sub_scheme_verification_remarks');
    }
}
