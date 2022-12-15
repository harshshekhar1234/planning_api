<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddInitialRemarksToTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('sub_schemes', function (Blueprint $table) {
            $table->longText('initial_remarks')->nullable()->after('risk_remarks');
        });

        Schema::table('mig_sub_schemes', function (Blueprint $table) {
            $table->longText('initial_remarks')->nullable()->after('risk_remarks');
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
            $table->dropColumn('initial_remarks');
        });

        Schema::table('mig_sub_schemes', function (Blueprint $table) {
            $table->dropColumn('initial_remarks');
        });
    }
}
