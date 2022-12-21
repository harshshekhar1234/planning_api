<?php

namespace App\Http\Controllers\FinanceAPI;

use App\Http\Controllers\Controller;
use App\Models\Division;
use App\Models\MigScheme;
use App\Models\MigSubScheme;
use Illuminate\Support\Facades\Http;

class FinanceApiController extends Controller
{
    public function pending_scheme($id)
    {
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

        return response()->json([
            'status' => 200,
            'pending_schemes' => $pending_schemes->values()->all(),
        ]);
    }

    public function pending_subscheme_dept($id)
    {
        $division = Division::find($id);
        $demand_no = $division->demand_no;
        $response = Http::acceptJson()->get('https://fantastic-bat-tux.cyclic.app/getsubscheme/' . $demand_no . '/2023-24');
        $api_subschemes = $response->json();
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
        $response = Http::acceptJson()->get('https://fantastic-bat-tux.cyclic.app/getsubschemebystatecentercode/' . $scheme->state_code . '/' . $scheme->center_code . '/2023-24');
        $api_subschemes = $response->json();
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
        $response = Http::acceptJson()->get('https://fantastic-bat-tux.cyclic.app/getscheme/' . $demand_no . '/2023-24');
        $api_schemes = $response->json();
        $local_schemes = MigScheme::select('id', 'state_code', 'center_code')->where('division_id', $id)->get();
        $migrated_schemes = collect($api_schemes)->filter(function ($value, $key) use ($local_schemes) {
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
        $response = Http::acceptJson()->get('https://fantastic-bat-tux.cyclic.app/getsubschemebystatecentercode/' . $scheme->state_code . '/' . $scheme->center_code . '/2023-24');
        $api_subschemes = $response->json();
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
}
