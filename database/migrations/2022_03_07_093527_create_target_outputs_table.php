<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTargetOutputsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('target_outputs', function (Blueprint $table) {
            $table->id();
            $table->decimal('value', $precision = 12, $scale = 2);
            $table->bigInteger('department_id');
            $table->bigInteger('division_id');
            $table->bigInteger('scheme_id');
            $table->bigInteger('subscheme_id');
            $table->bigInteger('outputindicator_id');
            $table->foreign('outputindicator_id')->references('id')->on('output_indicators');
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
        Schema::dropIfExists('target_outputs');
    }
}
