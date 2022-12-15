<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubschemeSdgsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subscheme_sdgs', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('subscheme_id');
            $table->bigInteger('sdg_id');
            $table->foreign('subscheme_id')->references('id')->on('sub_schemes');
            $table->foreign('sdg_id')->references('id')->on('sdg_goals');
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
        Schema::dropIfExists('subscheme_sdgs');
    }
}
