<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddReportNameAndVerifiedFlagToVerifiedReportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('verified_reports', function (Blueprint $table) {
            $table->string('name', 50)->default('report')->after('user_id');
            $table->boolean('verified_btn_flag')->default(0)->after('name');
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
            $table->dropColumn('name');
            $table->dropColumn('verified_btn_flag');
        });
    }
}
