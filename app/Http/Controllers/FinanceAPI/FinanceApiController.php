<?php

namespace App\Http\Controllers\FinanceAPI;

use App\Http\Controllers\Controller;
use App\Models\Division;
use App\Models\MigScheme;
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
        $pending_schemes = collect($api_schemes)->filter(function ($value, $key) use ($local_schemes) {
            return !$local_schemes->contains(function ($lvalue, $lkey) use ($value, $key) {
                //dd ($lvalue['state_code']);exit;
                return ($lvalue['state_code'] == $value['state_code'] &&  $lvalue['center_code'] == $value['center_code']);
            });
            //dd ($value['state_name']);exit;
        });
        return response()->json([
            'status' => 200,
            'pending_schemes' => $pending_schemes->values()->all(),
        ]);
    }
}
