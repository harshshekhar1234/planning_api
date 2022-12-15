<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExpenditureAchievementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('expenditure_achievements', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('value');
            $table->bigInteger('department_id');
            $table->bigInteger('division_id');
            $table->bigInteger('scheme_id');
            $table->bigInteger('subscheme_id');
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
        Schema::dropIfExists('expenditure_achievements');
    }
}
