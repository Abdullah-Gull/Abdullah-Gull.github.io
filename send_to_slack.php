<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Form se data receive karna
    $fname = $_POST['first_name'];
    $lname = $_POST['last_name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $web   = $_POST['website_url'];
    $comp  = $_POST['company_name'];
    $msg   = $_POST['message'];

    // Aapka Slack Webhook URL
    $webhook_url = 'https://hooks.slack.com/services/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';

    // Slack message ka format
    $message_content = [
        "text" => "📩 *New Website Inquiry from Abdullah Gull's Portfolio*",
        "attachments" => [
            [
                "color" => "#D4AF37", // Gold color sidebar in Slack
                "fields" => [
                    ["title" => "Name", "value" => "$fname $lname", "short" => true],
                    ["title" => "Email", "value" => $email, "short" => true],
                    ["title" => "Phone", "value" => $phone, "short" => true],
                    ["title" => "Website", "value" => $web, "short" => true],
                    ["title" => "Company", "value" => $comp, "short" => true],
                    ["title" => "Message", "value" => $msg, "short" => false]
                ]
            ]
        ]
    ];

    // Slack ko data bhejne ka process
    $ch = curl_init($webhook_url);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($message_content));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    
    $result = curl_exec($ch);
    curl_close($ch);

    // Message bhejney ke baad user ko wapis portfolio par bhej dena ya message dikhana
    if ($result) {
        echo "<script>alert('Thank you! Your message has been sent to Slack.'); window.location.href='contact.html';</script>";
    } else {
        echo "Error: Message could not be sent.";
    }
}
?>
