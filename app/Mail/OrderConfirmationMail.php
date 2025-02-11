<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class OrderConfirmationMail extends Mailable
{
    use Queueable, SerializesModels;

    public $customer;
    public $products;

    public function __construct($customer, $products)
    {
        $this->customer = $customer;
        $this->products = $products; // Store all products in an array
    }

    public function build()
    {
        return $this->subject('Order Confirmation')
                    ->view('emails.order_confirmation')
                    ->with([
                        'customer' => $this->customer,
                        'products' => $this->products, // Pass all products to the email view
                    ]);
    }
}
