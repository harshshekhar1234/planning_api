<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddAorFinAddButtonFlagToSubSchemesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('sub_schemes', function (Blueprint $table) {
            $table->longText('aor_risk_remarks')->nullable();
            $table->boolean('aor_fin_add_btn_flag')->default(1);
            $table->char('aor_submitted_status', 1)->default("N");
            $table->char('aor_verified_status', 1)->default("N");
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
            $table->dropColumn('aor_fin_add_btn_flag');
            $table->dropColumn('aor_risk_remarks');
            $table->dropColumn('aor_submitted_status');
            $table->dropColumn('aor_verified_status');
        });
    }
}
