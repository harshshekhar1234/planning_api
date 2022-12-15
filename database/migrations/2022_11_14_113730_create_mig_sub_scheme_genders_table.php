<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMigSubSchemeGendersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mig_sub_scheme_genders', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('subscheme_id');
            $table->bigInteger('gender_id');
            $table->foreign('subscheme_id')->references('id')->on('mig_sub_schemes')->onDelete('cascade')->onUpdate('cascade');
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
        Schema::dropIfExists('mig_sub_scheme_genders');
    }
}
