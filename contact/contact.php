<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = filter_var($_POST["email"], FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars($_POST["message"]);

    if ($email && !empty($name) && !empty($message)) {
        $to = "lebe.kevin.06@gmail.com";
        $subject = "Nouveau message de contact";
        $headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";

        $body = "Nom: $name\nEmail: $email\nMessage:\n$message";

        if (mail($to, $subject, $body, $headers)) {
            echo "Message envoyé avec succès !";
        } else {
            echo "Erreur lors de l'envoi du message.";
        }
    } else {
        echo "Veuillez remplir tous les champs correctement.";
    }
}
?>