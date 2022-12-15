<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMigOutputIndicatorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mig_output_indicators', function (Blueprint $table) {
            $table->id();
            $table->text('name');
            $table->bigInteger('department_id');
            $table->bigInteger('division_id');
            $table->bigInteger('scheme_id');
            $table->bigInteger('subscheme_id');
            $table->bigInteger('output_id');
            $table->foreign('output_id')->references('id')->on('mig_outputs')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('subscheme_id')->references('id')->on('mig_sub_schemes')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('scheme_id')->references('id')->on('mig_schemes')->onDelete('cascade')->onUpdate('cascade');
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
        Schema::dropIfExists('mig_output_indicators');
    }
}
