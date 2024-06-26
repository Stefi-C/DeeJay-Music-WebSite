<?php
if(!empty($_POST['send']))
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$toEmail = $_POST['cristinistif000@icloud.com'];

$mailheader = "From:".$name."<".$email.">\r\n";

$recipient = "cristinistif000@icloud.com"; //his e-mail adress

mail($recipient, $subject, $message, $mailheader) or die("Error!");
if(mail($toEmail,$name,$email,$message))

echo'

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DeeJay-WebSite</title>
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
    <script src="https://kit.fontawesome.com/36ca5abeae.js" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/wavesurfer.js@7"></script>
    
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" /> 
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="stylesheet" href="style.css">


    
</head>
<body>
    <div class="container">
        <h1>Thank you for contacting me. I will get back to you as soon as possible!</h1>
        <p class="back">Go back to the <a href="index.html">Homepage</a>.</p>
        
    </div>
</body>
</html>



';


?>