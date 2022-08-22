
<?php

$name = $_GET['Nombre'];
$email =$_GET['Email'];
$mensaje = $_GET['Mensaje'];

require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;

$mail = new PHPMailer;

$mail->isSMTP();

$mail->SMTPDebug = 2;

$mail->Host = 'smtp.hostinger.com';

$mail->Port = 587;

$mail->SMTPAuth = true;

$mail->Username = 'contacto@ochocuentos.com';

$mail->Password = '@Pass8cuentos';

$mail->setFrom('contacto@ochocuentos.com', 'Enviado por: '.$name);

$mail->addAddress('ochocuentos@gmail.com', 'Ochocuentos');

$mail->addReplyTo('contacto@ochocuentos.com', 'Enviado por: '.$name);

$mail->Subject = 'Correo enviado desde Formulario Web';

$mail->Body = 'Nombre: '.$name.', E-Mail: '.$email.', Mensaje: '.$mensaje;


if (!$mail->send()) {

echo 'Mailer Error: ' . $mail->ErrorInfo;

} else {

echo 'The email message was sent.';

}

?>