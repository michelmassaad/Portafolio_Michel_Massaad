
<?php
    header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
    header("Cache-Control: post-check=0, pre-check=0", false);
    header("Pragma: no-cache");
    header('Cache-Control: no cache');

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
	<title>INGRESAR</title>
<meta charset="utf-8">
<meta name="viewport" content="widht=device-width; initial-soale=1.0">
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">

</head>
<!--FICHERO DE CSS-->
<body >
  <!--PIE DE PAGINA-->
<?php
include 'caja-de-inicio.html'
?>
<?php
include 'footer.html'
?>

</body>
</html>