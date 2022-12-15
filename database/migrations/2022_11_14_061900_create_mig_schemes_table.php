<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMigSchemesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mig_schemes', function (Blueprint $table) {
            $table->id();
            $table->string('state_code',4)->nullable();
            $table->text('state_name')->nullable();
            $table->string('center_code',4)->nullable();
            $table->text('center_name')->nullable();
            $table->bigInteger('department_id');
            $table->bigInteger('division_id');
            $table->foreign('division_id')->references('id')->on('divisions')->onDelete('cascade')->onUpdate('cascade');
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
        Schema::dropIfExists('mig_schemes');
    }
}
