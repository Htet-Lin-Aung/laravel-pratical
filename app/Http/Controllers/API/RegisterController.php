<?php

namespace App\Http\Controllers\API;

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
            'token' => $user->createToken('User-Token')->plainTextToken,
            'token_type' => 'Bearer',
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

        $user = User::where('email', $request['email'])->firstOrFail();

        return response()->json([
            'user' => $user,
            'token' => $user->createToken('User-Token')->plainTextToken,
            'token_type' => 'Bearer',
        ]);
    }

    /**
     * Logout api
     *
     * @return \Illuminate\Http\Response
     */
    public function logout()
    {
        auth()->user()->tokens()->delete();

        return [
            'message' => 'You have successfully logged out and the token was successfully deleted'
        ];
    }
}
