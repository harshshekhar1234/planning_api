<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMigSubSchemesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mig_sub_schemes', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('subscheme_code');
            $table->text('name');
            $table->bigInteger('scheme_id');
            $table->bigInteger('division_id');
            $table->bigInteger('department_id');
            $table->longText('risk_remarks')->nullable();
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
        Schema::dropIfExists('mig_sub_schemes');
    }
}
