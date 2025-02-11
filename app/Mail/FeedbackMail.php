<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use App\Models\Feedback;

class FeedbackMail extends Mailable
{
    use Queueable, SerializesModels;

    public $feedback;
    public $isUserMail;

    public function __construct(Feedback $feedback, $isUserMail = false)
    {
        $this->feedback = $feedback;
        $this->isUserMail = $isUserMail;
    }

    public function build()
    {
        if ($this->isUserMail) {
            return $this->subject('Thank You for Your Feedback')
                ->view('emails.user_feedback');
        }

        return $this->subject('New Feedback Received')
            ->view('emails.admin_feedback');
    }
}
