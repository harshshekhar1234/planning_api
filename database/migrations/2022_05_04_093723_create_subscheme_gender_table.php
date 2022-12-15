<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubschemeGenderTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subscheme_gender', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('subscheme_id');
            $table->bigInteger('gender_id');
            $table->foreign('subscheme_id')->references('id')->on('sub_schemes');
            $table->foreign('gender_id')->references('id')->on('genders');
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
        Schema::dropIfExists('subscheme_gender');
    }
}
