<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order Confirmation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 70%;
            margin: auto;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: black;
            color: red;
            text-align: center;
            padding: 15px;
            font-size: 24px;
            font-weight: bold;
        }

        .header img {
            display: block;
            margin: 0 auto;
            width: 200px;

        }
        .content {
            padding: 20px;
        }
        .highlight {
            font-weight: bold;
        }
        .table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        .table th, .table td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: left;
        }
        .table th {
            background: #f8f8f8;
        }
        .total {
            font-weight: bold;
            text-align: right;
            padding-top: 10px;
        }
        .button {
            display: block;
            width: 100%;
            text-align: center;
            background: black;
            color: white;
            padding: 15px;
            border-radius: 5px;
            text-decoration: none;
            font-size: 16px;
            margin-top: 20px;
        }

        .button a {
            color: white;
            text-decoration: none;
        }

        .footer {
            margin-top: 20px;
            font-size: 14px;
            text-align: center;
        }
    </style>
</head>
<body>

    <div class="container">
        <!-- Header -->
        <div class="header">
            <img class="LogoComp" src="{{ $message->embed(public_path('assets/logo.jpg')) }}" />
        </div>

        <!-- Email Content -->
        <div class="content">
            <p>Dear <span class="highlight">{{ $customer->CustomerEmail }}</span>,</p>
            <p>Thank you for ordering from Buko Ori Philippines.</p>
            <p>Your payment has been successfully completed.</p>
            <p>Your Customer ID is <span class="highlight">#{{ $customer->CustomerID }}</span>.</p>

            <!-- Order Table -->
            <table class="table">
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($products as $product)
                    <tr>
                        <td><strong>{{ $product['name'] }}</strong></td>
                        <td>{{ $product['quantity'] }}</td>
                        <td>RM{{ number_format($product['price'], 2) }}</td>
                        <td>RM{{ number_format($product['price'] * $product['quantity'], 2) }}</td>
                    </tr>
                    @endforeach
                </tbody>
            </table>

            <!-- Subtotal and Total -->
            @php
                $total = 0;
                foreach ($products as $product) {
                    $total += $product['price'] * $product['quantity'];
                }
            @endphp
            <p class="total">Total: RM{{ number_format($total, 2) }}</p>

            <p>Please use your Customer ID for tracking.</p>

            <!-- Buy Again Button -->
            <div class="button">
                <a href="https://yourwebsite.com/shop">Buy Again</a>
            </div>

            <!-- Footer -->
            <div class="footer">
                <p>Thank you for shopping with us. We look forward to serving you again soon.</p>
                <p>Kind regards, <br> <strong>Buko Enterprise</strong></p>
            </div>
        </div>
    </div>

</body>
</html>
