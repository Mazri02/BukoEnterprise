<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Log;

class UserController extends Controller {
    public function login(Request $req){
        $data = User::where('email',$req->Username)->get()->first();

        if($data && $data->password == hash('sha256',$req->Userpass)){
            session(['token' => $data->id]);
            return response()->json([
                'message'=>'Login Successfull, Redirecting..',
                'stats'=> 200
            ]);
        }

        return response()->json([
            'message'=>$data,
            'stats'=> 404
        ]);
    }

    public function changePassword(Request $req){
        User::where('StockID',$req->StockID)->update([
            "email" => $req->UserEmail,
            "password" => hash('sha256',$req->UserPass),
        ]);
    }

    public function logout(){
        Session::forget('token'); // Remove specific session data
        return response()->json([
            'message'=>'Logout Successfull, Redirecting..',
            'stats'=> 200
        ]);
    }
}
