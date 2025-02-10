<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Feedback Received</title>
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
            background-color: #dc3545;
            color: #ffffff;
            padding: 20px;
            text-align: center;
        }

        .content {
            padding: 20px;
            line-height: 1.6;
        }

        .info {
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
        }

        .footer {
            background-color: #f4f4f4;
            text-align: center;
            padding: 10px;
            font-size: 0.9em;
            color: #666;
        }

        .highlight {
            font-weight: bold;
            color: #dc3545;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            <h1>New Feedback Received</h1>
        </div>
        <div class="content">
            <p><strong>Name:</strong> {{ $feedback->first_name }} {{ $feedback->last_name }}</p>
            <p><strong>Email:</strong> <a href="mailto:{{ $feedback->email }}">{{ $feedback->email }}</a></p>
            <div class="info">
                <p><strong>Message:</strong></p>
                <p>{{ $feedback->message }}</p>
            </div>
            <p class="highlight">Please review the feedback and take appropriate action if needed.</p>
        </div>
        <div class="footer">
            <p>&copy; 2024 BUKO ORI PHILIPPINES. All rights reserved.</p>
        </div>
    </div>
</body>

</html>