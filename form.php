<?php
  $name = trim(strip_tags($_POST["name"]));
  $email = trim(strip_tags($_POST["email"]));
  $text = trim(strip_tags($_POST["area"]));
  $subject = "Сообщения с сайта";
  $msg = "Данные формы:\n" ."Имя: $name\n"."Email: $email\n" ."Текст сообщения: $text";
  $headers = "Content-type: text/plain; charset=UTF-8" . "\r\n";
  $headers .= "From: Ваше_имя <ваш_email>" . "\r\n";
  $headers .= "Bcc: arthurq1337@gmail.com". "\r\n";
  if(!empty($name) && !empty($email) && !empty($text) && filter_var($email, FILTER_VALIDATE_EMAIL)){
    mail($email, $subject, $msg, $headers);
    }
?>