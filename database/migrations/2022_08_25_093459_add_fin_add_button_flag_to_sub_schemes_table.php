<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFinAddButtonFlagToSubSchemesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('sub_schemes', function (Blueprint $table) {
            $table->boolean('fin_add_btn_flag')->default(1);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('sub_schemes', function (Blueprint $table) {
            $table->dropColumn('fin_add_btn_flag');
        });
    }
}
