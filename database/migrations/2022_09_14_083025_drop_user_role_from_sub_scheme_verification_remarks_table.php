<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DropUserRoleFromSubSchemeVerificationRemarksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('sub_scheme_verification_remarks', function (Blueprint $table) {
            $table->dropColumn('user_role');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('sub_scheme_verification_remarks', function (Blueprint $table) {
            $table->string('user_role');
        });
    }
}
