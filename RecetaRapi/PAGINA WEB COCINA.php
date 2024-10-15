<?php 
session_start();
?>

<!DOCTYPE html>
<html>
<head >
	<title>Rapi Receta</title>
<meta charset="utf-8">
<meta name="viewport" content="widht=device-width; initial-soale=1.0">
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
<meta name="description"content="Encuentra aqui las mejores recetas faciles y caseras de cocina.Puedes encontrar comida facil de cocinar, postres, Vegetarianas, saludables, todo tipo de recetas"/>
<!--FICHERO DE CSS PARA LOS DISPLAY Y LOS ESTILOS-->
<link rel="stylesheet" type="text/css" href="paginacocina/FicherosCSS/base.css">
<link rel="stylesheet" type="text/css" href="paginacocina/FicherosCSS/cajadeinicio.css">


<!--FICHERO DE JAVASCRIPTS-->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
	<script src="paginacocina/js/jquery.flexslider.js"></script>
<!--PAGINA php RECETAS RAPI-->	
<body>
<!--IMAGEN BANNER --> 
<?php  
if ($_SESSION == null || $_SESSION == '') {
    include 'banner-barra.html';    
}else{
    include 'banner-barrasesion.html';
}
?>

<!--Buscador -->
<?php  
include 'buscador.html'
?>
<br>
<div class="visualizartop10">
<?php
include 'paginacocina/top10.html';
?>
</div>
<?php 
include 'Bloque Receta.html'
 ?>
 <div class="cajadeinicio">
 <?php 
if ($_SESSION == null || $_SESSION == '') {
    include 'Caja de inicio.html';    
}else{

}

?>
 </div>
  <!--CAJA DE INICIO DE SESION--> 
<script type="text/javascript" src="jquery-1.7.2.min.js"></script><script type="text/javascript">// <![CDATA[
$(window).scroll(function()
            {
                if ($(this).scrollTop() > 750){
                     $('#cajadeinicio').addClass("fixed").fadeIn();
                }
                else {
                    $('#cajadeinicio').removeClass("fixed");
                }
            });
// ]]></script>
<script type="text/javascript" src="jquery-1.7.2.min.js"></script><script type="text/javascript">// <![CDATA[
$(window).scroll(function()
            {
                if ($(this).scrollTop() > 3230){
                     $('#cajadeinicio').addClass("final").fadeIn();
                }
                else {
                    $('#cajadeinicio').removeClass("final");

                }
            });
// ]]></script>
<script type="text/javascript" src="jquery-1.7.2.min.js"></script><script type="text/javascript">// <![CDATA[
$(window).scroll(function()
            {
                if ($(this).scrollTop() > 3250){
                     $('#cajadeinicio').addClass("finaldos").fadeIn();
                }
                else {
                    $('#cajadeinicio').removeClass("finaldos");

                }
            });
// ]]></script>
<script type="text/javascript" src="jquery-1.7.2.min.js"></script><script type="text/javascript">// <![CDATA[
$(window).scroll(function()
            {
                if ($(this).scrollTop() > 3280){
                     $('#cajadeinicio').addClass("finaltres").fadeIn();
                }
                else {
                    $('#cajadeinicio').removeClass("finaltres");

                }
            });
// ]]></script>
<script type="text/javascript" src="jquery-1.7.2.min.js"></script><script type="text/javascript">// <![CDATA[
$(window).scroll(function()
            {
                if ($(this).scrollTop() > 3300){
                     $('#cajadeinicio').addClass("finalcuatro").fadeIn();
                }
                else {
                    $('#cajadeinicio').removeClass("finalcuatro");

                }
            });
// ]]></script>
<script type="text/javascript" src="jquery-1.7.2.min.js"></script><script type="text/javascript">// <![CDATA[
$(window).scroll(function()
            {
                if ($(this).scrollTop() > 3320){
                     $('#cajadeinicio').addClass("finalcinco").fadeIn();
                }
                else {
                    $('#cajadeinicio').removeClass("finalcinco");

                }
            });
// ]]></script>
<script type="text/javascript" src="jquery-1.7.2.min.js"></script><script type="text/javascript">// <![CDATA[
$(window).scroll(function()
            {
                if ($(this).scrollTop() > 3340){
                     $('#cajadeinicio').addClass("finalseis").fadeIn();
                }
                else {
                    $('#cajadeinicio').removeClass("finalseis");

                }
            });
// ]]></script>


<!--PIE DE PAGINA-->
<?php  
include 'footer.html';
?>
</body>
</head>
</html>