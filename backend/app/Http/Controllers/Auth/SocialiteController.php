<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;

class SocialiteController extends Controller
{
    public function redirect()
    {
        return Socialite::driver('google')->stateless()->redirect();
    }

    public function callback()
    {
        try {
            $googleUser = Socialite::driver('google')->stateless()->user();
            
            // Check if user exists by email, otherwise create generic individual account
            $user = User::firstOrCreate(
                ['email' => $googleUser->email],
                [
                    'name' => $googleUser->name,
                    'password' => bcrypt(Str::random(16)),
                    'role' => 'individual',
                ]
            );

            Auth::login($user);

            \Log::info('Google Auth Success', ['user_id' => $user->id, 'email' => $user->email]);

            $frontendUrl = env('FRONTEND_URL', 'http://localhost:5173');
            return redirect($frontendUrl . '/dashboard');
        } catch (\Exception $e) {
            \Log::error('Google Auth Failed', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
            $frontendUrl = env('FRONTEND_URL', 'http://localhost:5173');
            return redirect($frontendUrl . '/login?error=google_auth_failed');
        }
    }
}
