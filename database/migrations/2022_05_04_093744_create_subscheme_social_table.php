<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubschemeSocialTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subscheme_social', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('subscheme_id');
            $table->bigInteger('social_id');
            $table->foreign('subscheme_id')->references('id')->on('sub_schemes');
            $table->foreign('social_id')->references('id')->on('socials');
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
        Schema::dropIfExists('subscheme_social');
    }
}
