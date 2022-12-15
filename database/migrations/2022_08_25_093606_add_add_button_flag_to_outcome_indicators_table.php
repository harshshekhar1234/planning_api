<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddAddButtonFlagToOutcomeIndicatorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('outcome_indicators', function (Blueprint $table) {
            $table->boolean('add_btn_flag')->default(1);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('outcome_indicators', function (Blueprint $table) {
            $table->dropColumn('add_btn_flag');
        });
    }
}
