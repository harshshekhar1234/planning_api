<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\SdgMap;

class SdgMapController extends Controller
{

    public function index()
    {
        $sdgmap = SdgMap::all();
        return response()->json($sdgmap, 200);
    }

    public function store(Request $request){
        $sdgmap = new SdgMap;
        $sdgmap->district = $request->name;
        $sdgmap->score = $request->score;
        $sdgmap-> save();

        return response()->json([
            'status' => 200,
            'message' => 'success'
        ]);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(),[
            'name' => 'required|string|max:255',
            'score' => 'required|numeric|min:1|max:100'
        ]);

        if($validator->fails()){
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
        ]);       
        }

        $sdgmap = SdgMap::find($id);
        if (is_null($sdgmap)) {
            return response()->json([
                'status' => 404,
                'message' => 'District not found'
            ]);
            }
        $sdgmap->score = $request->score;
        $sdgmap->save();
        
        return response()->json([
            'status' => 200,
            'message'=> 'Score updated successfully.'
        ]);
    }
}
