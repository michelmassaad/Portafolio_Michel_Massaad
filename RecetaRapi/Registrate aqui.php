<?php
session_start();

if ($_SESSION == null || $_SESSION == '') {

}else{
	header('Location:MIPERFIL.php');
	die();
}
?>
<!DOCTYPE html>
<html>
<head>
	<title>REGISTRAR</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
<!--FICHERO DE CSS-->


<?php
include 'caja-registro.html'
?>

  <!--PIE DE PAGINA-->
<?php
include 'footer.html'
?>
</body>
</html>