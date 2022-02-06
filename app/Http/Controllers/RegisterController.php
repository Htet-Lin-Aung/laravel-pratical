<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\RegisterRequest;
use App\Models\User;

class RegisterController extends Controller
{
    /**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */
    public function register(RegisterRequest $request)
    {   
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        
        return response()->json([
            'name' => $user->name,
            'token' => $user->createToken('User-Token')->plainTextToken
        ]);
    }
   
    /**
     * Login api
     *
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        if (!auth()->attempt($request->only('email', 'password')))
        {
            return response()->json(['message' => 'Invalid Credentials'], 401);
        }

        $user = auth()->user();

        return response()->json([
            'user' => $user,
            'token' => $user->createToken('User-Token')->plainTextToken
        ]);
    }
}

