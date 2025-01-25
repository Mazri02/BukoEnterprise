<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\MyTestMail;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function sendEmail(Request $request)
    {
        $details = [
            'title' => 'New Contact Form Submission',
            'body' => "Name: {$request->firstName} {$request->lastName}\n
                       Email: {$request->email}\n
                       Message: {$request->message}",
        ];

        Mail::to($request->email)->send(new MyTestMail($details));

        return response()->json(['message' => 'Email sent successfully.'], 200);
    }
}
