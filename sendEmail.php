<?php
  if(isset($_POST['submit-button'])) {
    $email = filter_var($_POST['email-input'], FILTER_SANITIZE_EMAIL);   
    $message = htmlspecialchars(filter_var($_POST['message-input']), FILTER_FLAG_STRIP_HIGH);
    mail("riakudev@gmail.com", "Messaggio dal sito", $message, "From: $email");
  } 