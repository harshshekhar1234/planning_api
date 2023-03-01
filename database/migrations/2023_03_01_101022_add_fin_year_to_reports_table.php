<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFinYearToReportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('verified_reports', function (Blueprint $table) {
            $table->string('fin_year', 4)->default('2223');
        });

        Schema::table('aor_verified_reports', function (Blueprint $table) {
            $table->string('fin_year', 4)->default('2223');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('verified_reports', function (Blueprint $table) {
            $table->dropColumn('fin_year');
        });

        Schema::table('aor_verified_reports', function (Blueprint $table) {
            $table->dropColumn('fin_year');
        });
    }
}
