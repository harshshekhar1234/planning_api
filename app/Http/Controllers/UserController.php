<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index()
    {
        //$users = User::where('role', 'user')->orderby('id')->get();
        $users = DB::table('users AS u')
            ->join('divisions AS div', 'div.id', '=', 'u.division_id')
            ->select('u.*', 'div.name as div_name')
            ->whereIN('u.role', ['user', 'verifier'])
            ->orderby('u.id')->get();
        return response()->json($users, 200);
    }

    public function update_password(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required|numeric|min:1',
            'password' => 'required|string|min:6|required_with:confirm_password|same:confirm_password',
            'confirm_password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
            ]);
        }
        $id = $request->id;

        $user = User::find($id);

        if (is_null($user)) {
            return response()->json([
                'status' => 404,
                'message' => 'User Not Found'
            ]);
        } else {
            $user->password = bcrypt($request->password);
            $user->save();

            return response()->json([
                'status' => 200,
                'message' => 'Password Changed Successfully'
            ]);
        }
    }

    public function update_email(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required|numeric|min:1',
            'name' => 'required|string|max:255',
            'email' => 'required|string|email',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
            ]);
        }
        $id = $request->id;

        $user = User::find($id);

        if (is_null($user)) {
            return response()->json([
                'status' => 404,
                'message' => 'User Not Found'
            ]);
        } else {
            $user->name = $request->name;
            $user->email = $request->email;
            $user->save();

            return response()->json([
                'status' => 200,
                'message' => 'User Updated Successfully'
            ]);
        }
    }

    public function all_users()
    {
        $users = User::orderby('id')->get();
        return response()->json($users, 200);
    }

    public function user_update_password(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'password' => 'required|string|min:6|required_with:confirm_password|same:confirm_password',
            'confirm_password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 401,
                'message' => $validator->errors()
            ]);
        }

        $user = User::find(Auth::user()->id);

        if (is_null($user)) {
            return response()->json([
                'status' => 404,
                'message' => 'User Not Found'
            ]);
        } else {
            $user->password = bcrypt($request->password);
            $user->save();

            return response()->json([
                'status' => 200,
                'message' => 'Password Changed Successfully'
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $id)
    {
        try {
            $id->delete();
            return response()->json([
                'status' => 200,
                'message' => 'User Deleted Successfully.'
            ]);
        } catch (\Throwable $e) {
            return response()->json([
                'status' => 404,
                'message' => 'Record not Found'
                //'message' => $e
            ]);
        }
    }
}
