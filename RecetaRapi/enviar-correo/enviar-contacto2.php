<?php
if (!$_POST) {
    die('No autorizado');
}
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';


enviarEmail();
function enviarEmail()
{
	if (isset($_POST['nombre']) && isset($_POST['Instagram']) && isset($_POST['email']) &&isset($_POST['Mensaje']) && isset($_POST['sexo']) &&  isset($_POST['opinion'])) {

		$nombre=$_POST["nombre"];
		$Instagram=$_POST["Instagram"];
		$email=$_POST["email"];
		$Mensaje=$_POST["Mensaje"];
		$sexo=$_POST["sexo"];
		$opinion=$_POST["opinion"];

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';// para hotmail smtp.live.com para hotmail smtp.office365.com // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'michel01ft@gmail.com';                     // SMTP username
    $mail->Password   = '';                               // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above


    //Recipients
    $mail->setFrom('michel01ft@gmail.com', 'Michel');
    $mail->addAddress('michel_01ft@hotmail.com', '');     // Add a recipient
    // $mail->addAddress('ellen@example.com');               // Name is optional
    // $mail->addReplyTo('info@example.com', 'Information');
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    // Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$contenido="<br/><b>Nombre:</b> " . $nombre . "." .
			"<br/><b>Instagram:</b> " . $Instagram . "." .
			"<br/><b>Correo:</b> " . $email . "." .
			"<br/><b>Mensaje:</b> " . $Mensaje . "." .
			"<br/><b>Sexo:</b> ".$sexo. ".". 
			"<br/><b>Opinion:</b> ".$opinion . ".</br>";

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Correo de Contacto';
    $mail->Body    = "<h1>Formulario de Contacto</h1>".
    				$contenido;
    // $mail->AltBody = 'Mensaje alternativo';

    $mail->send();
    echo 'Mensaje se envió correctamente';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';// para hotmail smtp.live.com para hotmail smtp.office365.com // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'michel01ft@gmail.com';                     // SMTP username
    $mail->Password   = '98751michel';                               // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above


    //Recipients
    $mail->setFrom('michel01ft@gmail.com', 'Michel');
    $mail->addAddress($email);     // Add a recipient
    // $mail->addAddress('ellen@example.com');               // Name is optional
    // $mail->addReplyTo('info@example.com', 'Information');
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    // Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$contenido="<br/><b>Nombre:</b> " . $nombre . "." .
			"<br/><b>Instagram:</b> " . $Instagram . "." .
			"<br/><b>Correo:</b> " . $email . "." .
			"<br/><b>Mensaje:</b> " . $Mensaje . "." .
			"<br/><b>Sexo:</b> ".$sexo. ".". 
			"<br/><b>Opinion:</b> ".$opinion . ".</br>";

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Correo de Contacto';
    $mail->Body    = 
    				"<h1>Los datos del formulario fueron enviados correctamente.</h1>".
    				"<h2>Formulario de Contacto</h2>".
    				$contenido .
    				"</br><h2> Para seguir disfrutando de mas recetas visitenos rapirecetas.com</h2>"
    			;
    // $mail->AltBody = 'Mensaje alternativo';

    $mail->send();
    echo ' Mensaje para el cliente se envio correctamente';

    
} catch (Exception $e) {
    echo "Hubo un error al enviar el mensaje del cliente:", $mail->ErrorInfo;
}



} catch (Exception $e) {
    echo "Hubo un error al enviar el mensaje:", $mail->ErrorInfo;
}












	} 
	else{
		return;
	}
}
?>