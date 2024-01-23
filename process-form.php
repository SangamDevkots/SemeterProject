<?php
if (isset($_POST['exchange-submit'])) {
    // Retrieve form data
    $bookName = htmlspecialchars($_POST["book_name"]);
    $author = htmlspecialchars($_POST["author"]);
    $bookCondition = htmlspecialchars($_POST["book_condition"]);
    $reasonToExchange = htmlspecialchars($_POST["reason_to_exchange"]);
    $firstName = htmlspecialchars($_POST["first_name"]);
    $lastName = htmlspecialchars($_POST["last_name"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);


    $to = "sangamdevkota02@gmail.com";
    
  
    $subject = "New Book Exchange Request";


    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";


    $emailMessage = "Book Name: $bookName\n";
    $emailMessage .= "Author: $author\n";
    $emailMessage .= "Book Condition: $bookCondition\n";
    $emailMessage .= "Reason to Exchange: $reasonToExchange\n";
    $emailMessage .= "First Name: $firstName\n";
    $emailMessage .= "Last Name: $lastName\n";
    $emailMessage .= "Phone: $phone\n";
    $emailMessage .= "Email: $email\n";


    $smtpServer = 'smtp.gmail.com';
    $smtpPort = 465;
    $smtpUsername = 'sangamdevkota02@gmail.com';
    $smtpPassword = 'rxpqxychyppvuwrx'; 
 
    if (mail($to, $subject, $emailMessage, $headers, "-f $smtpUsername")) {
        echo "Email sent successfully!";
    } else {
        echo "Error sending email. Please check your server configuration.";
    }
} else {

    header("Location: Exchange.php");
}
?>
