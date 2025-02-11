<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Order;
use App\Mail\OrderConfirmationMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function addCustomerOrder(Request $req)
    {
        $customer = new Customer();
        $customer->CustomerPhone = $req->input('phone');
        $customer->CustomerEmail = $req->input('email');
        $customer->CustomerAddress1 = $req->input('address1');
        $customer->CustomerAddress2 = $req->input('address2');
        $customer->CustomerPostcode = $req->input('postcode');
        $customer->CustomerCity = $req->input('city');
        $customer->CustomerPayment = $req->input('paymentType');
        $customer->save();

        // Fetch the CustomerID
        $customerID = $customer->CustomerID;

        $products = $req->input('products');
        $orderedProducts = []; // Store all ordered products

        foreach ($products as $product) {
            $order = new Order();
            $order->ProductID = $product['id'];
            $order->CustomerID = $customer->CustomerID;
            $order->OrderDate = now()->format('Y-m-d');
            $order->OrderStatus = 'Pending';
            $order->OrderQuantity = $product['quantity'];
            $order->save();

            // Add product details to the array
            $orderedProducts[] = $product;
        }

        // ✅ Send a **single** email after all orders are created
        Mail::to($customer->CustomerEmail)->send(new OrderConfirmationMail($customer, $orderedProducts));

        return response()->json([
            "status" => 200,
            "message" => 'Success, Customer and Order Added. Email Sent.'
        ]);
    }
}
