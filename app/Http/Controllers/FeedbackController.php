<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Feedback;
use Illuminate\Support\Facades\Mail;
use App\Mail\FeedbackMail;

class FeedbackController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email',
            'message' => 'required|string',
        ]);

        $feedback = Feedback::create($validated);

        // Send email to admin
        Mail::to(env('MAIL_FROM_ADDRESS'))->send(new FeedbackMail($feedback));

        // Send confirmation email to user
        Mail::to($feedback->email)->send(new FeedbackMail($feedback, true));

        return response()->json(['message' => 'Feedback sent successfully!'], 200);
    }
}
