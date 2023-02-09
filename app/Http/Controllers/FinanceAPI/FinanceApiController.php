<?php

namespace App\Http\Controllers\FinanceAPI;

use App\Http\Controllers\Controller;
use App\Models\Division;
use App\Models\MigScheme;
use App\Models\MigSubScheme;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Http\Request;
//use App\Models\MigOutcomeIndicatorTarget;

class FinanceApiController extends Controller
{
    public function pending_scheme($id)
    {
        $division = Division::find($id);
        $demand_no = $division->demand_no;
        $demand_no = sprintf("%02d", $demand_no);
        //dd($demand_no);exit;
        $response = Http::acceptJson()->get('http://jkuber.jharkhand.gov.in/outcomebudgetservice/OutcomeScheme.svc/getCurrentScheme?demand='.$demand_no .'&finyear='.$this->api_fin_year.'&statecode=&central=&pwd='.$this->api_password);
        $api_schemes = json_decode($response);
        $api_schemes = json_decode($api_schemes->getCurrentSchemeResult);
        //dd($api_schemes);exit;
        if($api_schemes == null)
        {
            return response()->json([
                'status' => 404,
                'error' => "Connection Error",
            ]);
        }
        $data = [];
        $map = collect($api_schemes)->map(function ($items) use ($data) {
            $data['state_name'] = ($items->STATESCHEMENAME == null) ? $items->STATESCHEMECODE : $items->STATESCHEMENAME;
            $data['center_name'] = ($items->GOISCHEMENAME == null) ? $items->CPSMSSCHEME_CODE : $items->GOISCHEMENAME;
            $data['state_code'] = $items->STATESCHEMECODE;
            $data['center_code'] = $items->CPSMSSCHEME_CODE;
            $data['subscheme_code'] = $items->SUB_SCHEMECODE;
            $data['name'] = $items->SUB_SCHEMEENAME;
            $data['state_share'] = 0.0;
            $data['center_share'] = 0.0;
            // $data['state_share'] = $items->S_BE / 100000;
            // $data['center_share'] = $items->C_BE / 100000;
            //$data['name'] = $items->SUB_SCHEMEENAME.' / '.$items->SUB_SCHEMEHNAME;
            return $data;
        });

        $api_schemes_unique = collect($map)->unique(function ($item) {
            return $item['state_code'] . $item['center_code'];
        });

        $api_schemes_unique = $api_schemes_unique->map(function ($item, $key) use ($map) {
            $item = collect($item)->forget('subscheme_code')->forget('name');
            $item['state_share'] = 0;
            $item['center_share'] = 0;

            $subschemes = collect($map)->filter(function ($value, $skey) use ($item) {
                return ($value['state_code'] == $item['state_code'] &&  $value['center_code'] == $item['center_code']);
            });

            $subschemes = collect($subschemes)->map(function ($sitem, $key) use ($item) {
                $sitem = collect($sitem)->forget('state_name')->forget('center_name')->forget('state_code')->forget('center_code');
                $item['state_share'] += $sitem['state_share'];
                $item['center_share'] += $sitem['center_share'];
                return $sitem;
            });

            $item['subschemes'] = $subschemes->values()->all();

            return $item;
        });
        //dd($api_schemes_unique);exit;

        $local_schemes = MigScheme::select('state_code', 'center_code')->where('division_id', $id)->get();
        $pending_schemes = collect($api_schemes_unique)->reject(function ($value, $key) use ($local_schemes) {
            return $local_schemes->contains(function ($lvalue, $lkey) use ($value, $key) {
                return ($lvalue['state_code'] == $value['state_code'] &&  $lvalue['center_code'] == $value['center_code']);
            });
        });
        return response()->json([
            'status' => 200,
            'pending_schemes' => $pending_schemes->values()->all(),
        ]);

        /*
        $division = Division::find($id);
        $demand_no = $division->demand_no;
        $response = Http::acceptJson()->get('https://fantastic-bat-tux.cyclic.app/getscheme/' . $demand_no . '/2023-24');
        $api_schemes = $response->json();
        $local_schemes = MigScheme::select('state_code', 'center_code')->where('division_id', $id)->get();
        $pending_schemes = collect($api_schemes)->reject(function ($value, $key) use ($local_schemes) {
            return $local_schemes->contains(function ($lvalue, $lkey) use ($value, $key) {
                //Using filter
                //$pending_schemes = collect($api_schemes)->filter(function ($value, $key) use ($local_schemes) {
                //return !$local_schemes->contains(function ($lvalue, $lkey) use ($value, $key) {
                //dd ($lvalue['state_code']);exit;
                return ($lvalue['state_code'] == $value['state_code'] &&  $lvalue['center_code'] == $value['center_code']);
            });
            //dd ($value['state_name']);exit;
        });
        // $pending_schemes = $pending_schemes->map(function ($value, $key) {
        //     $value['id'] = $key;
        //     return $value;
        // });
        */
        return response()->json([
            'status' => 200,
            'pending_schemes' => $pending_schemes->values()->all(),
        ]);
    }

    public function pending_subscheme_dept($id)
    {
        $division = Division::find($id);
        $demand_no = $division->demand_no;
        $demand_no = sprintf("%02d", $demand_no);
        $response = Http::acceptJson()->get('http://jkuber.jharkhand.gov.in/outcomebudgetservice/OutcomeScheme.svc/getCurrentScheme?demand='.$demand_no .'&finyear='.$this->api_fin_year.'&statecode=&central=&pwd='.$this->api_password);
        $api_schemes = json_decode($response);
        //$api_schemes = json_decode($api_schemes->getOutcomeBudgetOutlayResult);
        $api_schemes = json_decode($api_schemes->getCurrentSchemeResult);
        if($api_schemes == null)
        {
            return response()->json([
                'status' => 404,
                'error' => "Connection Error",
            ]);
        }
        $data = [];
        $api_subschemes = collect($api_schemes)->map(function ($items) use ($data) {
            $data['state_name'] = ($items->STATESCHEMENAME == null) ? $items->STATESCHEMECODE : $items->STATESCHEMENAME;
            $data['center_name'] = ($items->GOISCHEMENAME == null) ? $items->CPSMSSCHEME_CODE : $items->GOISCHEMENAME;
            $data['state_code'] = $items->STATESCHEMECODE;
            $data['center_code'] = $items->CPSMSSCHEME_CODE;
            $data['subscheme_code'] = $items->SUB_SCHEMECODE;
            $data['name'] = $items->SUB_SCHEMEENAME;
            // $data['state_share'] = $items->S_BE / 100000;
            // $data['center_share'] = $items->C_BE / 100000;
            $data['state_share'] = 0.0;
            $data['center_share'] = 0.0;
            return $data;
        });

        // $response = Http::acceptJson()->get('https://fantastic-bat-tux.cyclic.app/getsubscheme/' . $demand_no . '/2023-24');
        // $api_subschemes = $response->json();

        $local_schemes = MigScheme::select('id', 'state_code', 'center_code')->where('division_id', $id)->get();
        $local_subschemes = MigSubScheme::select('subscheme_code', 'name')->where('division_id', $id)->get();
        $pending_subschemes = collect($api_subschemes)->reject(function ($value, $key) use ($local_subschemes) {
            return $local_subschemes->contains(function ($lvalue, $lkey) use ($value, $key) {
                return $lvalue['subscheme_code'] == $value['subscheme_code'];
            });
        });

        $pending_subschemes = $pending_subschemes->map(function ($item, $key) use ($local_schemes) {
            $scheme = $local_schemes->where('state_code', $item['state_code'])->where('center_code', $item['center_code'])->first();
            if ($scheme) {
                $item['isScheme'] = 'Y';
                $item['scheme_id'] = $scheme->id;
            } else {
                $item['isScheme'] = 'N';
                $item['scheme_id'] = null;
            }
            return $item;
        });

        return response()->json([
            'status' => 200,
            'pending_subschemes' => $pending_subschemes->values()->all(),
        ]);
    }

    public function pending_subscheme($id)
    {
        $scheme = MigScheme::find($id);
        // $response = Http::acceptJson()->get('https://fantastic-bat-tux.cyclic.app/getsubschemebystatecentercode/' . $scheme->state_code . '/' . $scheme->center_code . '/2023-24');
        // $api_subschemes = $response->json();
        $division = Division::where('id', $scheme->division_id)->first();
        $demand_no = $division->demand_no;
        $demand_no = sprintf("%02d", $demand_no);
        $response = Http::acceptJson()->get('http://jkuber.jharkhand.gov.in/outcomebudgetservice/OutcomeScheme.svc/getCurrentScheme?demand='.$demand_no.'&finyear='.$this->api_fin_year.'&statecode=' . $scheme->state_code . '&central=' . $scheme->center_code.'&pwd='.$this->api_password);
        $api_schemes = json_decode($response);
        //$api_schemes = json_decode($api_schemes->getOutcomeBudgetOutlayResult);
        //dd($api_schemes);exit;
        $api_schemes = json_decode($api_schemes->getCurrentSchemeResult);
        if($api_schemes == null)
        {
            return response()->json([
                'status' => 404,
                'error' => "Connection Error",
            ]);
        }
        $data = [];
        $api_subschemes = collect($api_schemes)->map(function ($items) use ($data) {
            $data['state_name'] = ($items->STATESCHEMENAME == null) ? $items->STATESCHEMECODE : $items->STATESCHEMENAME;
            $data['center_name'] = ($items->GOISCHEMENAME == null) ? $items->CPSMSSCHEME_CODE : $items->GOISCHEMENAME;
            $data['state_code'] = $items->STATESCHEMECODE;
            $data['center_code'] = $items->CPSMSSCHEME_CODE;
            $data['subscheme_code'] = $items->SUB_SCHEMECODE;
            $data['name'] = $items->SUB_SCHEMEENAME;
            $data['state_share'] = 0.0;
            $data['center_share'] = 0.0;
            // $data['state_share'] = $items->S_BE / 100000;
            // $data['center_share'] = $items->C_BE / 100000;
            return $data;
        });

        $local_subschemes = MigSubScheme::select('subscheme_code', 'name')->where('scheme_id', $id)->get();
        $pending_subschemes = collect($api_subschemes)->reject(function ($value, $key) use ($local_subschemes) {
            return $local_subschemes->contains(function ($lvalue, $lkey) use ($value, $key) {
                return $lvalue['subscheme_code'] == $value['subscheme_code'];
            });
        });

        return response()->json([
            'status' => 200,
            'pending_subschemes' => $pending_subschemes->values()->all(),
        ]);
    }

    public function migrated_scheme($id)
    {
        $division = Division::find($id);
        $demand_no = $division->demand_no;
        $demand_no = sprintf("%02d", $demand_no);
        $response = Http::acceptJson()->get('http://jkuber.jharkhand.gov.in/outcomebudgetservice/OutcomeScheme.svc/getCurrentScheme?demand='.$demand_no.'&finyear='.$this->api_fin_year.'&statecode=&central=&pwd='.$this->api_password);
        $api_schemes = json_decode($response);
        //dd($api_schemes->getCurrentSchemeResult);exit;      
        $api_schemes = json_decode($api_schemes->getCurrentSchemeResult);
        
        if($api_schemes == null)
        {
            return response()->json([
                'status' => 404,
                'error' => "Connection Error",
            ]);
        }
        $data = [];
        $map = collect($api_schemes)->map(function ($items) use ($data) {
            $data['state_name'] = ($items->STATESCHEMENAME == null) ? $items->STATESCHEMECODE : $items->STATESCHEMENAME;
            $data['center_name'] = ($items->GOISCHEMENAME == null) ? $items->CPSMSSCHEME_CODE : $items->GOISCHEMENAME;
            $data['state_code'] = $items->STATESCHEMECODE;
            $data['center_code'] = $items->CPSMSSCHEME_CODE;
            $data['subscheme_code'] = $items->SUB_SCHEMECODE;
            $data['name'] = $items->SUB_SCHEMEENAME;
            //$data['state_share'] = $items->S_BE / 100000;
            //$data['center_share'] = $items->C_BE / 100000;
            $data['state_share'] = 0.0;
            $data['center_share'] = 0.0;
            return $data;
        });

        $api_schemes_unique = collect($map)->unique(function ($item) {
            return $item['state_code'] . $item['center_code'];
        });

        $api_schemes_unique = $api_schemes_unique->map(function ($item, $key) use ($map) {
            $item = collect($item)->forget('subscheme_code')->forget('name');
            $item['state_share'] = 0;
            $item['center_share'] = 0;

            $subschemes = collect($map)->filter(function ($value, $skey) use ($item) {
                return ($value['state_code'] == $item['state_code'] &&  $value['center_code'] == $item['center_code']);
            });

            $subschemes = collect($subschemes)->map(function ($sitem, $key) use ($item) {
                $sitem = collect($sitem)->forget('state_name')->forget('center_name')->forget('state_code')->forget('center_code');
                $item['state_share'] += $sitem['state_share'];
                $item['center_share'] += $sitem['center_share'];
                return $sitem;
            });

            $item['subschemes'] = $subschemes->values()->all();

            return $item;
        });

        $local_schemes = MigScheme::select('id', 'state_code', 'center_code')->where('division_id', $id)->get();
        $migrated_schemes = collect($api_schemes_unique)->filter(function ($value, $key) use ($local_schemes) {
            return $local_schemes->contains(function ($lvalue, $lkey) use ($value, $key) {
                return ($lvalue['state_code'] == $value['state_code'] &&  $lvalue['center_code'] == $value['center_code']);
            });
        });

        $migrated_schemes = $migrated_schemes->map(function ($item, $key) use ($local_schemes) {
            $scheme = $local_schemes->where('state_code', $item['state_code'])->where('center_code', $item['center_code'])->first();
            if ($scheme) {
                $item['id'] = $scheme->id;
            } else {
                $item['id'] = null;
            }
            return $item;
        });

        return response()->json([
            'status' => 200,
            'migrated_schemes' => $migrated_schemes->values()->all(),
        ]);
    }

    public function migrated_subscheme($id)
    {
        $scheme = MigScheme::find($id);
        // $response = Http::acceptJson()->get('https://fantastic-bat-tux.cyclic.app/getsubschemebystatecentercode/' . $scheme->state_code . '/' . $scheme->center_code . '/2023-24');
        // $api_subschemes = $response->json();
        $division = Division::where('id', $scheme->division_id)->first();
        $demand_no = $division->demand_no;
        $demand_no = sprintf("%02d", $demand_no);
        $response = Http::acceptJson()->get('http://jkuber.jharkhand.gov.in/outcomebudgetservice/OutcomeScheme.svc/getCurrentScheme?demand='.$demand_no.'&finyear='.$this->api_fin_year.'&statecode=' . $scheme->state_code . '&central=' . $scheme->center_code.'&pwd='.$this->api_password);
        $api_schemes = json_decode($response);
        //$api_schemes = json_decode($api_schemes->getOutcomeBudgetOutlayResult);
        $api_schemes = json_decode($api_schemes->getCurrentSchemeResult);
        if($api_schemes == null)
        {
            return response()->json([
                'status' => 404,
                'error' => "Connection Error",
            ]);
        }
        $data = [];
        $api_subschemes = collect($api_schemes)->map(function ($items) use ($data) {
            $data['state_name'] = ($items->STATESCHEMENAME == null) ? $items->STATESCHEMECODE : $items->STATESCHEMENAME;
            $data['center_name'] = ($items->GOISCHEMENAME == null) ? $items->CPSMSSCHEME_CODE : $items->GOISCHEMENAME;
            $data['state_code'] = $items->STATESCHEMECODE;
            $data['center_code'] = $items->CPSMSSCHEME_CODE;
            $data['subscheme_code'] = $items->SUB_SCHEMECODE;
            $data['name'] = $items->SUB_SCHEMEENAME;
            // $data['state_share'] = $items->S_BE / 100000;
            // $data['center_share'] = $items->C_BE / 100000;
            $data['state_share'] = 0.0;
            $data['center_share'] = 0.0;
            return $data;
        });
        $local_subschemes = MigSubScheme::select('id', 'subscheme_code', 'name')->where('scheme_id', $id)->get();
        $migrated_subschemes = collect($api_subschemes)->filter(function ($value, $key) use ($local_subschemes) {
            return $local_subschemes->contains(function ($lvalue, $lkey) use ($value, $key) {
                return $lvalue['subscheme_code'] == $value['subscheme_code'];
            });
        });

        $migrated_subschemes = $migrated_subschemes->map(function ($item, $key) use ($local_subschemes) {
            $subscheme = $local_subschemes->where('subscheme_code', $item['subscheme_code'])->first();
            if ($subscheme) {
                $item['id'] = $subscheme->id;
                //$date = MigOutcomeIndicatorTarget::select('updated_at')->where('subscheme_id', $subscheme->id)->latest('updated_at')->first();
                //$item['updated_at'] = $date->updated_at;
            } else {
                $item['id'] = null;
            }
            return $item;
        });

        return response()->json([
            'status' => 200,
            'migrated_subschemes' => $migrated_subschemes->values()->all(),
        ]);
    }

    public function subscheme_outlay($id)
    {
        $subscheme = MigSubScheme::find($id);
        // $response = Http::acceptJson()->get('https://fantastic-bat-tux.cyclic.app/getstatecentersharebysubschemecode/' . $subscheme->subscheme_code . '/2023-24');
        // $api_subscheme = $response->json();
        // $response = Http::acceptJson()->get('http://jkuberuat.jharkhand.gov.in/outcomebudgetservice/OutcomeScheme.svc/getSubschemeWiseOutcomeBudgetOutlay?demand=&finyear='.$this->api_fin_year.'&subscheme=' . $subscheme->subscheme_code.'&pwd='.$this->api_password);
        // $api_subscheme = json_decode($response);
        // $api_subscheme = json_decode($api_subscheme->getSubschemeWiseOutcomeBudgetOutlayResult);
        // if($api_subscheme == null)
        // {
        //     return response()->json([
        //         'status' => 404,
        //         'error' => "Connection Error",
        //     ]);
        // }
        // $SubschemeOutlay = ($api_subscheme[0]->S_BE + $api_subscheme[0]->C_BE) / 100000;
        return response()->json([
            'status' => 200,
            // 'result' => $SubschemeOutlay,
            'result' => 0.0,
            // 'state_share' => $api_subscheme[0]->S_BE / 100000,
            // 'center_share' => $api_subscheme[0]->C_BE / 100000
            'state_share' => 0.0,
            'center_share' => 0.0
        ]);
    }

    public function subscheme_header($id)
    {
        $sub_scheme = DB::table('mig_sub_schemes AS ss')
            ->select(
                'ss.*',
                's.id',
                's.state_name',
                's.state_code',
                's.center_name',
                's.center_code',
                'dept.id as dept_id',
                'dept.name as dept_name',
                'div.id as div_id',
                'div.name as div_name',
                'div.demand_no'
            )
            ->join('mig_schemes AS s', 's.id', '=', 'ss.scheme_id')
            ->join('departments AS dept', 'dept.id', '=', 'ss.department_id')
            ->join('divisions AS div', 'div.id', '=', 'ss.division_id')
            ->where('ss.id', $id)->get();

        // $response = Http::acceptJson()->get('https://fantastic-bat-tux.cyclic.app/getstatecentersharebysubschemecode/' . $sub_scheme[0]->subscheme_code . '/2023-24');
        // $api_subscheme = $response->json();
        // $response = Http::acceptJson()->get('http://jkuberuat.jharkhand.gov.in/outcomebudget/OutcomeScheme.svc/getSubschemeWiseOutcomeBudgetOutlay?demand=&finyear='.$this->api_fin_year.'&subscheme=' . $sub_scheme[0]->subscheme_code.'&pwd='.$this->api_password);
        // $api_subscheme = json_decode($response);
        // $api_subscheme = json_decode($api_subscheme->getSubschemeWiseOutcomeBudgetOutlayResult);
        // if($api_subscheme == null)
        // {
        //     return response()->json([
        //         'status' => 404,
        //         'error' => "Connection Error",
        //     ]);
        // }
        // $sub_scheme[0]->name = $api_subscheme[0]->SUB_SCHEMEENAME;
        // $sub_scheme[0]->state_name = ($api_subscheme[0]->STATESCHEMENAME == null) ? $api_subscheme[0]->STATESCHEMECODE : $api_subscheme[0]->STATESCHEMENAME;
        // $sub_scheme[0]->state_code = $api_subscheme[0]->STATESCHEMECODE;
        // $sub_scheme[0]->center_name = ($api_subscheme[0]->GOISCHEMENAME == null) ? $api_subscheme[0]->CPSMSSCHEME_CODE : $api_subscheme[0]->GOISCHEMENAME;
        // $sub_scheme[0]->center_code = $api_subscheme[0]->CPSMSSCHEME_CODE;
        // dd($sub_scheme[0]->name);exit;
        // $sub_scheme[0]->name = $sub_scheme->name;
        // $sub_scheme[0]->state_name = $sub_scheme->state_name;
        // $sub_scheme[0]->state_code = $sub_scheme->state_code;
        // $sub_scheme[0]->center_name = $sub_scheme->center_name;
        // $sub_scheme[0]->center_code = $sub_scheme->center_code;

        return response()->json([
            'status' => 200,
            'sub_scheme' => $sub_scheme,
            'sanction' => 0,
            'allotment' => 0,
            'expenditure' => 0
        ]);
    }

    public function scheme_summary($id)
    {
        $migrated_schemes = $this->migrated_scheme($id);
        if($migrated_schemes->getData()->status ==404)
        {
            return response()->json([
                'status' => 404,
                'error' => "Connection Error",
            ]);
        }
        $migrated_schemes = collect($migrated_schemes->getData()->migrated_schemes);
        $local_subschemes = MigSubScheme::select('id', 'subscheme_code', 'name')->where('division_id', $id)->get();
        $outcome_indicators = DB::table('mig_outcome_indicators')->where('division_id', $id)->get();
        $output_indicators = DB::table('mig_output_indicators')->where('division_id', $id)->get();

        foreach ($migrated_schemes as $scheme) {
            foreach ($scheme->subschemes as $subscheme) {
                $subscheme_exists = $local_subschemes->where('subscheme_code', $subscheme->subscheme_code)->first();
                if ($subscheme_exists) {
                    $subscheme->outputindicators_count = $output_indicators->where('subscheme_id', $subscheme_exists->id)->count();

                    $subscheme->outcomeindicators_count = $outcome_indicators->where('subscheme_id', $subscheme_exists->id)->count();

                    $subscheme->genders = DB::table('genders AS g')
                        ->select('g.name')
                        ->join('mig_sub_scheme_genders AS sg', 'sg.gender_id', '=', 'g.id')
                        ->where('sg.subscheme_id', $subscheme_exists->id)->get();

                    $subscheme->socials = DB::table('socials AS s')
                        ->select('s.name')
                        ->join('mig_sub_scheme_socials AS ss', 'ss.social_id', '=', 's.id')
                        ->where('ss.subscheme_id', $subscheme_exists->id)->get();
                } else {
                    $subscheme->outputindicators_count = 0;
                    $subscheme->outcomeindicators_count = 0;
                    $subscheme->genders = [];
                    $subscheme->socials = [];
                }
            }
        }
        return response()->json([
            'status' => 200,
            'schemes' => $migrated_schemes->values()->all(),
        ]);
    }

    public function api_subscheme_output(Request $request)
    {
        if($request->finyear !== "23-24") {
            return response()->json([
                'status' => 404,
                'response' => "No data Found.",
            ]);
        }
        $subscheme_code = (int) $request->subscheme_code;
        $subscheme = MigSubScheme::where('subscheme_code', $request->subscheme_code)->first();
        if($subscheme == NULL) {
            return response()->json([
                'status' => 200,
                'response' => "No Output Indicatiors set. Sub-Scheme not included in Outcome Budget.",
            ]);
        }
        else {
            $scheme = MigScheme::where('id', $subscheme->scheme_id)->first();
            $data = [];
            $data['subscheme_code'] = $subscheme->subscheme_code;
            $data['scheme_state_code'] = $scheme->state_code;
            $data['scheme_center_code'] = $scheme->center_code;
            $s_outputs = DB::table('mig_outputs')->where('subscheme_id', $subscheme->id)->orderBy('id')->get();
            $output_data = [];
            $data['outputs'] = $s_outputs->map(function ($items) {
                $output_data['output'] = $items->name;
                $s_output_indicators = DB::table('mig_output_indicators AS oi')
                ->join('mig_output_indicator_targets AS oit', 'oit.outputindicator_id', '=', 'oi.id')
                ->select(
                    "oi.name as output_indicator",
                    "oit.value as target",
                    "oit.measurement as unit_of_measurement",
                )
                ->where('oi.output_id', $items->id)
                ->orderby('oi.id')->get();
                $output_data['output_indicators'] = $s_output_indicators;
                return $output_data;
            });
            return response()->json([
                'status' => 200,
                'response' => $data,
            ]);
        }
    }

    public function api_subscheme_outcome(Request $request)
    {
        if($request->finyear !== "23-24") {
            return response()->json([
                'status' => 404,
                'response' => "No data Found.",
            ]);
        }
        $subscheme_code = (int) $request->subscheme_code;
        $subscheme = MigSubScheme::where('subscheme_code', $request->subscheme_code)->first();
        if($subscheme == NULL) {
            return response()->json([
                'status' => 200,
                'response' => "No Outcome Indicatiors set. Sub-Scheme not included in Outcome Budget.",
            ]);
        }
        else {
            $scheme = MigScheme::where('id', $subscheme->scheme_id)->first();
            $data = [];
            $data['subscheme_code'] = $subscheme->subscheme_code;
            $data['scheme_state_code'] = $scheme->state_code;
            $data['scheme_center_code'] = $scheme->center_code;
            $s_outcomes = DB::table('mig_outcomes')->where('subscheme_id', $subscheme->id)->orderBy('id')->get();
            $outcome_data = [];
            $data['outcomes'] = $s_outcomes->map(function ($items) {
                $outcome_data['outcome'] = $items->name;
                $s_outcome_indicators = DB::table('mig_outcome_indicators AS oi')
                ->join('mig_outcome_indicator_targets AS oit', 'oit.outcomeindicator_id', '=', 'oi.id')
                ->select(
                    "oi.name as outcome_indicator",
                    "oit.value as target",
                    "oit.measurement as unit_of_measurement",
                )
                ->where('oi.outcome_id', $items->id)
                ->orderby('oi.id')->get();
                $outcome_data['outcome_indicators'] = $s_outcome_indicators;
                return $outcome_data;
            });
            return response()->json([
                'status' => 200,
                'response' => $data,
            ]);
        }
    }

    public function api_subscheme_gender(Request $request)
    {
        if($request->finyear !== "23-24") {
            return response()->json([
                'status' => 404,
                'response' => "No data Found.",
            ]);
        }
        $subscheme_code = (int) $request->subscheme_code;
        $subscheme = MigSubScheme::where('subscheme_code', $request->subscheme_code)->first();
        if($subscheme == NULL) {
            return response()->json([
                'status' => 200,
                'response' => "No Gender Category set. Sub-Scheme not included in Outcome Budget.",
            ]);
        }
        else {
            $scheme = MigScheme::where('id', $subscheme->scheme_id)->first();
            $data = [];
            $data['subscheme_code'] = $subscheme->subscheme_code;
            $data['scheme_state_code'] = $scheme->state_code;
            $data['scheme_center_code'] = $scheme->center_code;
            $genders = DB::table('genders AS g')
                ->select('g.name')
                ->join('mig_sub_scheme_genders AS sg', 'sg.gender_id', '=', 'g.id')
                ->where('sg.subscheme_id', $subscheme->id)->get();
            $data['genders'] = $genders->pluck('name');
            return response()->json([
                'status' => 200,
                'response' => $data,
            ]);
        }
    }

    public function api_subscheme_social(Request $request)
    {
        if($request->finyear !== "23-24") {
            return response()->json([
                'status' => 404,
                'response' => "No data Found.",
            ]);
        }
        $subscheme_code = (int) $request->subscheme_code;
        $subscheme = MigSubScheme::where('subscheme_code', $request->subscheme_code)->first();
        if($subscheme == NULL) {
            return response()->json([
                'status' => 200,
                'response' => "No Social Category set. Sub-Scheme not included in Outcome Budget.",
            ]);
        }
        else {
            $scheme = MigScheme::where('id', $subscheme->scheme_id)->first();
            $data = [];
            $data['subscheme_code'] = $subscheme->subscheme_code;
            $data['scheme_state_code'] = $scheme->state_code;
            $data['scheme_center_code'] = $scheme->center_code;
            $socials = DB::table('socials AS s')
                ->select('s.name')
                ->join('mig_sub_scheme_socials AS ss', 'ss.social_id', '=', 's.id')
                ->where('ss.subscheme_id', $subscheme->id)->get();
            $data['socials'] = $socials->pluck('name');
            return response()->json([
                'status' => 200,
                'response' => $data,
            ]);
        }
    }

    public function api_subscheme_sdg(Request $request)
    {
        if($request->finyear !== "23-24") {
            return response()->json([
                'status' => 404,
                'response' => "No data Found.",
            ]);
        }
        $subscheme_code = (int) $request->subscheme_code;
        $subscheme = MigSubScheme::where('subscheme_code', $request->subscheme_code)->first();
        if($subscheme == NULL) {
            return response()->json([
                'status' => 200,
                'response' => "No SDG Goal set. Sub-Scheme not included in Outcome Budget.",
            ]);
        }
        else {
            $scheme = MigScheme::where('id', $subscheme->scheme_id)->first();
            $data = [];
            $data['subscheme_code'] = $subscheme->subscheme_code;
            $data['scheme_state_code'] = $scheme->state_code;
            $data['scheme_center_code'] = $scheme->center_code;
            $sdg = DB::table('sdg_goals AS s')
                ->select('s.goal_name', 's.goal_number')
                ->join('mig_sub_scheme_sdgs AS ss', 'ss.sdg_id', '=', 's.id')
                ->where('ss.subscheme_id', $subscheme->id)->first();
            $data['sdg_goal'] = $sdg->goal_number;
            $data['sdg'] = $sdg->goal_name;
            return response()->json([
                'status' => 200,
                'response' => $data,
            ]);
        }
    }

    public function api_subscheme_remarks(Request $request)
    {
        if($request->finyear !== "23-24") {
            return response()->json([
                'status' => 404,
                'response' => "No data Found.",
            ]);
        }
        $subscheme_code = (int) $request->subscheme_code;
        $subscheme = MigSubScheme::where('subscheme_code', $request->subscheme_code)->first();
        if($subscheme == NULL) {
            return response()->json([
                'status' => 200,
                'response' => "No Risk/Remarks set. Sub-Scheme not included in Outcome Budget.",
            ]);
        }
        else {
            $scheme = MigScheme::where('id', $subscheme->scheme_id)->first();
            $data = [];
            $data['subscheme_code'] = $subscheme->subscheme_code;
            $data['scheme_state_code'] = $scheme->state_code;
            $data['scheme_center_code'] = $scheme->center_code;
            $data['initial_remarks'] = $subscheme->initial_remarks;
            return response()->json([
                'status' => 200,
                'response' => $data,
            ]);
        }
    }

    public function extra_scheme($id)
    {
        $division = Division::find($id);
        $demand_no = $division->demand_no;
        $demand_no = sprintf("%02d", $demand_no);
        $response = Http::acceptJson()->get('http://jkuber.jharkhand.gov.in/outcomebudgetservice/OutcomeScheme.svc/getCurrentScheme?demand='. $demand_no .'&finyear='.$this->api_fin_year.'&statecode=&central=&pwd='.$this->api_password);
        $api_subscheme = json_decode($response);
        //$api_schemes = json_decode($api_subscheme->getOutcomeBudgetOutlayResult);
        $api_schemes = json_decode($api_subscheme->getCurrentSchemeResult);
        if($api_schemes == null)
        {
            return response()->json([
                'status' => 404,
                'error' => "Connection Error",
            ]);
        }
        $data = [];
        $map = collect($api_schemes)->map(function ($items) use ($data) {
            $data['state_name'] = ($items->STATESCHEMENAME == null) ? $items->STATESCHEMECODE : $items->STATESCHEMENAME;
            $data['center_name'] = ($items->GOISCHEMENAME == null) ? $items->CPSMSSCHEME_CODE : $items->GOISCHEMENAME;
            $data['state_code'] = $items->STATESCHEMECODE;
            $data['center_code'] = $items->CPSMSSCHEME_CODE;
            $data['subscheme_code'] = $items->SUB_SCHEMECODE;
            $data['name'] = $items->SUB_SCHEMEENAME;
            // $data['state_share'] = $items->S_BE / 100000;
            // $data['center_share'] = $items->C_BE / 100000;
            $data['state_share'] = 0.0;
            $data['center_share'] = 0.0;
            return $data;
        });
        $api_schemes_unique = collect($map)->unique(function ($item) {
            return $item['state_code'] . $item['center_code'];
        });
        $local_schemes = MigScheme::where('division_id', $id)->get();
        $extra_schemes = collect($local_schemes)->reject(function ($value, $key) use ($api_schemes_unique) {
            return $api_schemes_unique->contains(function ($lvalue, $lkey) use ($value, $key) {
                return ($lvalue['state_code'] == $value['state_code'] &&  $lvalue['center_code'] == $value['center_code']);
            });
        });
        
        return response()->json([
            'status' => 200,
            'division' => $division->name,
            'schemes' => $extra_schemes->values()->all(),
        ]);
    }

    public function extra_subscheme($id)
    {
        $division = Division::find($id);
        $demand_no = $division->demand_no;
        $demand_no = sprintf("%02d", $demand_no);
        $response = Http::acceptJson()->get('http://jkuber.jharkhand.gov.in/outcomebudgetservice/OutcomeScheme.svc/getCurrentScheme?demand='. $demand_no .'&finyear='.$this->api_fin_year.'&statecode=&central=&pwd='.$this->api_password);
        $api_subscheme = json_decode($response);
        //$api_schemes = json_decode($api_subscheme->getOutcomeBudgetOutlayResult);
        $api_schemes = json_decode($api_subscheme->getCurrentSchemeResult);
        if($api_schemes == null)
        {
            return response()->json([
                'status' => 404,
                'error' => "Connection Error",
            ]);
        }
        $data = [];
        $map = collect($api_schemes)->map(function ($items) use ($data) {
            $data['state_name'] = ($items->STATESCHEMENAME == null) ? $items->STATESCHEMECODE : $items->STATESCHEMENAME;
            $data['center_name'] = ($items->GOISCHEMENAME == null) ? $items->CPSMSSCHEME_CODE : $items->GOISCHEMENAME;
            $data['state_code'] = $items->STATESCHEMECODE;
            $data['center_code'] = $items->CPSMSSCHEME_CODE;
            $data['subscheme_code'] = $items->SUB_SCHEMECODE;
            $data['name'] = $items->SUB_SCHEMEENAME;
            // $data['state_share'] = $items->S_BE / 100000;
            // $data['center_share'] = $items->C_BE / 100000;
            $data['state_share'] = 0.0;
            $data['center_share'] = 0.0;
            return $data;
        });
        //$local_subschemes = MigSubScheme::where('division_id', $id)->get();
        $local_subschemes = DB::table('mig_sub_schemes AS ss')
            ->select(
                'ss.*',
                's.id',
                's.state_name',
                's.state_code',
                's.center_name',
                's.center_code'
            )
            ->join('mig_schemes AS s', 's.id', '=', 'ss.scheme_id')
            ->where('ss.division_id', $id)->get();
        $extra_subschemes = collect($local_subschemes)->reject(function ($value, $key) use ($map) {
            return $map->contains(function ($lvalue, $lkey) use ($value, $key) {
                return ($lvalue['subscheme_code'] == $value->subscheme_code);
            });
        });
        
        return response()->json([
            'status' => 200,
            'division' => $division->name,
            'subschemes' => $extra_subschemes->values()->all(),
        ]);
    }

    public function remove_backslash()
    {
        $response = Http::acceptJson()->get('http://jkuberuat.jharkhand.gov.in/outcomebudget/OutcomeScheme.svc/getScheme?demand=20');

        $api_subscheme = json_decode($response);
        $scheme = json_decode($api_subscheme->getSchemeResult);
        if($scheme == null)
        {
            return response()->json([
                'status' => 404,
                'error' => "Connection Error",
            ]);
        }

        $data = [];
        $map = collect($scheme)->map(function ($items) use ($data) {
            $data['state_code'] = $items->STATESCHEMECODE;
            $data['state_name'] = $items->STATESCHEMENAME;
            $data['center_code'] = $items->SCHEMECODE;
            $data['center_name'] = $items->GOISCHEMENAME;
            $data['subscheme_code'] = $items->SUB_SCHEMECODE;
            $data['name'] = $items->SUB_SCHEMEENAME . ' / ' . $items->SUB_SCHEMEHNAME;
            return $data;
        });

        return response()->json([
            'status' => 200,
            'schemes' => $map,
        ]);
    }

    public function allscheme($id)
    {
        $division = Division::find($id);
        $demand_no = $division->demand_no;
        $demand_no = sprintf("%02d", $demand_no);
        // $response = Http::acceptJson()->get('https://fantastic-bat-tux.cyclic.app/getscheme/'. $demand_no .'/2023-24');
        // $api_schemes = $response->json();
        // dd($response);exit;
        // if($response->failed())
        // {
        //     return response()->json([
        //         'status' => 404,
        //         'error' => "Connection Error",
        //     ]);
        // }
        $response = Http::acceptJson()->get('http://jkuberuat.jharkhand.gov.in/outcomebudget/OutcomeScheme.svc/getOutcomeBudgetOutlay?demand='. $demand_no .'&finyear='.$this->api_fin_year.'&statecode=&central=&pwd='.$this->api_password);
        $api_subscheme = json_decode($response);
        $api_schemes = json_decode($api_subscheme->getOutcomeBudgetOutlayResult);
        if($api_schemes == null)
        {
            return response()->json([
                'status' => 404,
                'error' => "Connection Error",
            ]);
        }
        $data = [];
        $map = collect($api_schemes)->map(function ($items) use ($data) {
            $data['state_name'] = ($items->STATESCHEMENAME == null) ? $items->STATESCHEMECODE : $items->STATESCHEMENAME;
            $data['center_name'] = ($items->GOISCHEMENAME == null) ? $items->CPSMSSCHEME_CODE : $items->GOISCHEMENAME;
            $data['state_code'] = $items->STATESCHEMECODE;
            $data['center_code'] = $items->CPSMSSCHEME_CODE;
            $data['subscheme_code'] = $items->SUB_SCHEMECODE;
            $data['name'] = $items->SUB_SCHEMEENAME;
            $data['state_share'] = $items->S_BE / 100000;
            $data['center_share'] = $items->C_BE / 100000;
            //$data['name'] = $items->SUB_SCHEMEENAME.' / '.$items->SUB_SCHEMEHNAME;
            return $data;
        });
        /*
        scheme
        $api_schemes_unique = collect($map)->unique(function ($item) {
            return $item['state_code'] . $item['center_code'];
        });
        $local_schemes = MigScheme::select('id', 'state_code', 'center_code', 'division_id')->where('division_id', $id)->get();
        $pending_schemes = collect($local_schemes)->reject(function ($value, $key) use ($api_schemes_unique) {
            return $api_schemes_unique->contains(function ($lvalue, $lkey) use ($value, $key) {
                return ($lvalue['state_code'] == $value['state_code'] &&  $lvalue['center_code'] == $value['center_code']);
            });
        });
        */
        //sub-scheme
        $local_subschemes = MigSubScheme::where('division_id', $id)->get();
        $pending_subschemes = collect($local_subschemes)->reject(function ($value, $key) use ($map) {
            return $map->contains(function ($lvalue, $lkey) use ($value, $key) {
                return ($lvalue['subscheme_code'] == $value['subscheme_code']);
            });
        });
        
        return response()->json([
            'status' => 200,
            'division' => $division->name,
            'schemes' => $pending_subschemes->values()->all(),
        ]);
    }

    public function testencryption()
    {
        //$plaintext = 'demand=20&finyear=2223&statecode=&central=';
        $plaintext = 'plan@123';
        $key = '3d756227f8be6f85';
        // CBC has an IV and thus needs randomness every time a message is encrypted
        $method = 'AES-128-CBC';
        $iv = 'ba7e0bb79b61f82d';

        $cipher = openssl_encrypt($plaintext, $method, $key, $options=OPENSSL_RAW_DATA,$iv );
        $body = base64_encode($cipher);

        $decrypted = openssl_decrypt($cipher, $method, $key, OPENSSL_RAW_DATA, $iv);

        return response()->json([
            'status' => 200,
            'encrypted' => $body
        ]);
    }

    public function subscheme_report(Request $request)
    {
        if($request->finyear !== "23-24") {
            return response()->json([
                'status' => 404,
                'response' => "No data Found.",
            ]);
        }
        $subscheme_code = (int) $request->subscheme_code;
        $subscheme = MigSubScheme::where('subscheme_code', $request->subscheme_code)->first();
        if($subscheme == NULL) {
            return response()->json([
                'status' => 200,
                'response' => "No Physical Indicatiors set. Sub-Scheme not included in Outcome Budget.",
            ]);
        }
        else {
            $scheme = MigScheme::where('id', $subscheme->scheme_id)->first();
            $data = [];
            $data['subscheme_code'] = $subscheme->subscheme_code;
            $data['scheme_state_code'] = $scheme->state_code;
            $data['scheme_center_code'] = $scheme->center_code;
            $genders = DB::table('genders AS g')
                ->select('g.name')
                ->join('mig_sub_scheme_genders AS sg', 'sg.gender_id', '=', 'g.id')
                ->where('sg.subscheme_id', $subscheme->id)->get();
            $data['genders'] = $genders->pluck('name');
            $socials = DB::table('socials AS s')
                ->select('s.name')
                ->join('mig_sub_scheme_socials AS ss', 'ss.social_id', '=', 's.id')
                ->where('ss.subscheme_id', $subscheme->id)->get();
            $data['socials'] = $socials->pluck('name');
            $s_outputs = DB::table('mig_outputs')->where('subscheme_id', $subscheme->id)->orderBy('id')->get();
            $output_data = [];
            $data['outputs'] = $s_outputs->map(function ($items) {
                $output_data['output'] = $items->name;
                $s_output_indicators = DB::table('mig_output_indicators AS oi')
                ->join('mig_output_indicator_targets AS oit', 'oit.outputindicator_id', '=', 'oi.id')
                ->select(
                    "oi.name as output_indicator",
                    "oit.value as target",
                    "oit.measurement as unit_of_measurement",
                )
                ->where('oi.output_id', $items->id)
                ->orderby('oi.id')->get();
                $output_data['output_indicators'] = $s_output_indicators;
                return $output_data;
            });
            $s_outcomes = DB::table('mig_outcomes')->where('subscheme_id', $subscheme->id)->orderBy('id')->get();
            $outcome_data = [];
            $data['outcomes'] = $s_outcomes->map(function ($items) {
                $outcome_data['outcome'] = $items->name;
                $s_outcome_indicators = DB::table('mig_outcome_indicators AS oi')
                ->join('mig_outcome_indicator_targets AS oit', 'oit.outcomeindicator_id', '=', 'oi.id')
                ->select(
                    "oi.name as outcome_indicator",
                    "oit.value as target",
                    "oit.measurement as unit_of_measurement",
                )
                ->where('oi.outcome_id', $items->id)
                ->orderby('oi.id')->get();
                $outcome_data['outcome_indicators'] = $s_outcome_indicators;
                return $outcome_data;
            });
            $sdg = DB::table('sdg_goals AS s')
                ->select('s.goal_name', 's.goal_number')
                ->join('mig_sub_scheme_sdgs AS ss', 'ss.sdg_id', '=', 's.id')
                ->where('ss.subscheme_id', $subscheme->id)->first();
            $data['sdg_goal'] = $sdg->goal_number;
            $data['sdg'] = $sdg->goal_name;
            $data['initial_remarks'] = $subscheme->initial_remarks;
            return response()->json([
                'status' => 200,
                'response' => $data,
            ]);
        }
    }
}