<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddMigratedColumnToTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('mig_schemes', function (Blueprint $table) {
            $table->boolean('migrated')->default(0);
        });
        Schema::table('mig_sub_schemes', function (Blueprint $table) {
            $table->boolean('migrated')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('mig_schemes', function (Blueprint $table) {
            $table->dropColumn('migrated');
        });
        Schema::table('mig_sub_schemes', function (Blueprint $table) {
            $table->dropColumn('migrated');
        });
    }
}
