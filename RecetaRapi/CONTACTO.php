<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
	<title>CONTACTO</title>
<meta name="viewport" content="widht=device-width; initial-soale=1.0;">
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
<!--FICHERO DE CSS-->
<link rel="stylesheet" type="text/css" href="paginacocina/FicherosCSS/base.css">

<style type="text/css">
input#buscador{
	margin-bottom: 0;
	padding-top: 12px ; 
	padding-bottom: 12px ; 
}
</style>
</head>

<body>
	<!--IMAGEN BANNER --> 
<?php  
if ($_SESSION == null || $_SESSION == '') {
    include 'banner-barra.html';    
}else{
    include 'banner-barrasesion.html';
}
?>
<!--BUSCADOR-->
<?php
include 'buscador.html'
?>
<br>
<?php
include 'paginacocina/FicherosCSS/formulario contacto/formulario-contacto.html';
?>
  <!--PIE DE PAGINA-->
<?php 
 include 'footer.html';

 ?>

</body>
</html>