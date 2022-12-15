<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubSchemeExpendituresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sub_scheme_expenditures', function (Blueprint $table) {
            $table->id();
            $table->decimal('sanction', $precision = 12, $scale = 2);
            $table->decimal('allotment', $precision = 12, $scale = 2);
            $table->decimal('expenditure', $precision = 12, $scale = 2);
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
        Schema::dropIfExists('sub_scheme_expenditures');
    }
}
