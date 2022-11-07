<?php


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$name = $_POST['username'];
$email = $_POST['email'];
$message = $_POST['message'];

$mail = new PHPMailer(true);

try{
  $mail->isSMTP();
  $mail->Host = 'smtp.gmail.com';
  $mail->SMTPAuth   = true;
  $mail->Username   = 'example@mail.com';
  $mail->Password   = 'pin';
  $mail->SMTPSecure = 'ssl';
  $mail->Port = 465;

  $mail->setFrom('example@mail.com');

  $mail->addAddress('example@mail.com');

  $mail->isHtml(true);

  $mail->Subject = 'Обратная связь по W-Wave';
  $mail->Body = 'Пользователь '  .$name. ' оставил отзыв, его почта ' .$email. '<br>
  <strong>Отзыв:</strong> <br>'
  .$message;
  $mail->send();
  echo 'Message has been sent';
}
  catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
  }

