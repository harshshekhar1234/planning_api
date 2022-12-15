<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SequenceCorrector extends Controller
{
    public function index()
    {
        // $results = DB::table('outcomes')->max('id');
        // DB::statement("ALTER SEQUENCE outcomes_id_seq RESTART WITH {$results}");
        // $results_departments = DB::table('departments')->max('id');
        // $results_departments = $results_departments + 1;
        // DB::statement("ALTER SEQUENCE departments_id_seq RESTART WITH {$results_departments}");

        // $results_divisions = DB::table('divisions')->max('id');
        // $results_divisions = $results_divisions + 1;
        // DB::statement("ALTER SEQUENCE divisions_id_seq RESTART WITH {$results_divisions}");

        // $results_schemes = DB::table('schemes')->max('id');
        // $results_schemes = $results_schemes + 1;
        // DB::statement("ALTER SEQUENCE schemes_id_seq RESTART WITH {$results_schemes}");

        // $results_sub_schemes = DB::table('sub_schemes')->max('id');
        // $results_sub_schemes = $results_sub_schemes + 1;
        // DB::statement("ALTER SEQUENCE sub_schemes_id_seq RESTART WITH {$results_sub_schemes}");

        // $results_outputs = DB::table('outputs')->max('id');
        // $results_outputs = $results_outputs + 1;
        // DB::statement("ALTER SEQUENCE outputs_id_seq RESTART WITH {$results_outputs}");

        // $results_output_indicators = DB::table('output_indicators')->max('id');
        // $results_output_indicators = $results_output_indicators + 1;
        // DB::statement("ALTER SEQUENCE output_indicators_id_seq RESTART WITH {$results_output_indicators}");

        // $results_target_outputs = DB::table('target_outputs')->max('id');
        // $results_target_outputs = $results_target_outputs + 1;
        // DB::statement("ALTER SEQUENCE target_outputs_id_seq RESTART WITH {$results_target_outputs}");

        // $results_outcomes = DB::table('outcomes')->max('id');
        // $results_outcomes = $results_outcomes + 1;
        // DB::statement("ALTER SEQUENCE outcomes_id_seq RESTART WITH {$results_outcomes}");

        // $results_outcome_indicators = DB::table('outcome_indicators')->max('id');
        // $results_outcome_indicators = $results_outcome_indicators + 1;
        // DB::statement("ALTER SEQUENCE outcome_indicators_id_seq RESTART WITH {$results_outcome_indicators}");

        // $results_target_outcomes = DB::table('target_outcomes')->max('id');
        // $results_target_outcomes = $results_target_outcomes + 1;
        // DB::statement("ALTER SEQUENCE target_outcomes_id_seq RESTART WITH {$results_target_outcomes}");

        // $results_financial_outlays = DB::table('financial_outlays')->max('id');
        // $results_financial_outlays = $results_financial_outlays + 1;
        // DB::statement("ALTER SEQUENCE financial_outlays_id_seq RESTART WITH {$results_financial_outlays}");

        // $results_genders = DB::table('genders')->max('id');
        // $results_genders = $results_genders + 1;
        // DB::statement("ALTER SEQUENCE genders_id_seq RESTART WITH {$results_genders}");

        // $results_socials = DB::table('socials')->max('id');
        // $results_socials = $results_socials + 1;
        // DB::statement("ALTER SEQUENCE socials_id_seq RESTART WITH {$results_socials}");

        // $results_sdg_goals = DB::table('sdg_goals')->max('id');
        // $results_sdg_goals = $results_sdg_goals + 1;
        // DB::statement("ALTER SEQUENCE sdg_goals_id_seq RESTART WITH {$results_sdg_goals}");

        // $results_subscheme_gender = DB::table('subscheme_gender')->max('id');
        // $results_subscheme_gender = $results_subscheme_gender + 1;
        // DB::statement("ALTER SEQUENCE subscheme_gender_id_seq RESTART WITH {$results_subscheme_gender}");

        // $results_subscheme_social = DB::table('subscheme_social')->max('id');
        // $results_subscheme_social = $results_subscheme_social + 1;
        // DB::statement("ALTER SEQUENCE subscheme_social_id_seq RESTART WITH {$results_subscheme_social}");

        // $results_subscheme_sdgs = DB::table('subscheme_sdgs')->max('id');
        // $results_subscheme_sdgs = $results_subscheme_sdgs + 1;
        // DB::statement("ALTER SEQUENCE subscheme_sdgs_id_seq RESTART WITH {$results_subscheme_sdgs}");

        DB::statement("
            with sequences as (
                select *
                    from ( select 
                            table_schema, 
                            table_name, 
                            column_name, 
                            pg_get_serial_sequence(format('%I.%I', table_schema, table_name), column_name) as col_sequence 
                            from information_schema.columns where table_schema not in ('pg_catalog', 'information_schema')
                        ) t
                    where col_sequence is not null
            ), maxvals as (
                select table_schema, table_name, column_name, col_sequence,
                        (xpath('/row/max/text()',
                        query_to_xml(format('select max(%I) from %I.%I', column_name, table_schema, table_name), true, true, ''))
                        )[1]::text::bigint as max_val
                from sequences
            ) 
            select table_schema, 
                table_name, 
                column_name, 
                col_sequence,
                coalesce(max_val, 0) as max_val,
                setval(col_sequence, coalesce(max_val, 1))
            from maxvals;
        ");
    }
}
