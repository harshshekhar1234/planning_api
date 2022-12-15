<?php

namespace App\Http\Controllers\Verifier;

use App\Http\Controllers\Controller;
use App\Models\SubSchemeVerificationRemark;
use Illuminate\Http\Request;
use App\Models\SubScheme;
use App\Models\AorSubSchemeVerificationRemark;

class SubSchemeVerificationRemarkController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  \App\Models\SubScheme  $subscheme
     * @return \Illuminate\Http\Response
     */
    public function index($subscheme)
    {
        $subScheme = SubScheme::find($subscheme);
        if ($subScheme->verified_status == 'R') {
            $reviewRemarks = SubSchemeVerificationRemark::
                where('subscheme_id', $subscheme)
                ->latest()->first();
            return response()->json([
                'status' => 200,
                'reviewRemarks' => $reviewRemarks
            ]);
        } else {
            return response()->json([
                'status' => 200,
                'message' => 'Not Applicable'
            ]);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SubSchemeVerificationRemark  $subSchemeVerificationRemark
     * @return \Illuminate\Http\Response
     */
    public function show(SubSchemeVerificationRemark $subSchemeVerificationRemark)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SubSchemeVerificationRemark  $subSchemeVerificationRemark
     * @return \Illuminate\Http\Response
     */
    public function edit(SubSchemeVerificationRemark $subSchemeVerificationRemark)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SubSchemeVerificationRemark  $subSchemeVerificationRemark
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SubSchemeVerificationRemark $subSchemeVerificationRemark)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SubSchemeVerificationRemark  $subSchemeVerificationRemark
     * @return \Illuminate\Http\Response
     */
    public function destroy(SubSchemeVerificationRemark $subSchemeVerificationRemark)
    {
        //
    }

    /*---------- Functions for AS ON DATE repoprts -----------*/
    public function aor_index($subscheme)
    {
        $subScheme = SubScheme::find($subscheme);
        if ($subScheme->aor_verified_status == 'R') {
            $reviewRemarks = AorSubSchemeVerificationRemark::
                where('subscheme_id', $subscheme)
                ->latest()->first();
            return response()->json([
                'status' => 200,
                'reviewRemarks' => $reviewRemarks
            ]);
        } else {
            return response()->json([
                'status' => 200,
                'message' => 'Not Applicable'
            ]);
        }
    }
}
