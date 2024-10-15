<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
	<title>CATEGORIA</title>
<meta name="viewport" content="widht=device-width; initial-soale=1.0">
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
<!--FICHERO DE CSS-->
<link rel="stylesheet" type="text/css" href="paginacocina/FicherosCSS/base.css">
<link rel="stylesheet" type="text/css" href="paginacocina/FicherosCSS/Categorias/titulo.css">

<!--FICHERO DE JAVASCRIPTS-->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
	<script src="paginacocina/js/jquery.flexslider.js"></script>
	<script src="paginacocina/js/tecnicaslide.js"></script>
	
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
include 'buscador.html';
?>

<h2 class="title-categoria">Desayuno</h2>


  <!--PIE DE PAGINA-->
<?php  
include 'footer.html';
?>

</body>
</html>