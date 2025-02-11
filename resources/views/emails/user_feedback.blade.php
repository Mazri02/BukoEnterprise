<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Your Feedback</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }

        .container {
            width: 100%;
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }

        .header {
            background-color: #007bff;
            color: #ffffff;
            padding: 20px;
            text-align: center;
        }

        .content {
            padding: 20px;
            line-height: 1.6;
        }

        .footer {
            background-color: #f4f4f4;
            text-align: center;
            padding: 10px;
            font-size: 0.9em;
            color: #666;
        }

        a {
            color: #007bff;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            <h1>Thank You for Your Feedback!</h1>
        </div>
        <div class="content">
            <p>Dear {{ $feedback->first_name }} {{ $feedback->last_name }},</p>
            <p>We received your message:</p>
            <blockquote style="border-left: 4px solid #007bff; padding-left: 10px; color: #555;">
                {{ $feedback->message }}
            </blockquote>
            <p>We appreciate your feedback. Have a great day!</p>
        </div>
        <div class="footer">
            <p>&copy; 2024 BUKO ORI PHILIPPINES. All rights reserved.</p>
        </div>
    </div>
</body>

</html>