<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubSchemesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sub_schemes', function (Blueprint $table) {
            $table->id();
            $table->text('name');
            $table->bigInteger('subscheme_code');
            $table->bigInteger('scheme_id');
            $table->bigInteger('division_id');
            $table->bigInteger('department_id');
            $table->foreign('scheme_id')->references('id')->on('schemes');
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
        Schema::dropIfExists('sub_schemes');
    }
}
