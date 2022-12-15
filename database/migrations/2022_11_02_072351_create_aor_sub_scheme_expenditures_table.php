<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAorSubSchemeExpendituresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('aor_sub_scheme_expenditures', function (Blueprint $table) {
            $table->id();
            $table->decimal('sanction', $precision = 12, $scale = 2);
            $table->decimal('allotment', $precision = 12, $scale = 2);
            $table->decimal('expenditure', $precision = 12, $scale = 2);
            $table->timestamp('time')->nullable();
            $table->bigInteger('department_id');
            $table->bigInteger('division_id');
            $table->bigInteger('scheme_id');
            $table->bigInteger('subscheme_id');
            $table->char('submitted_status', 1)->default("N");
            $table->char('verified_status', 1)->default("N");
            $table->bigInteger('report_id')->nullable();
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
        Schema::dropIfExists('aor_sub_scheme_expenditures');
    }
}
