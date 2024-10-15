<?php
session_start();

$varcorreo = $_SESSION ['correo'];
$correo = $_SESSION ['correo'];

if ($varcorreo == null || $varcorreo = '') {
	header("Location:INGRESAR.php");
	die();
}
include 'conexion.php';

$consulta= "SELECT  *FROM usuario WHERE correo='$correo' ";
$resultado = mysqli_query($conexion,$consulta);
$row= mysqli_fetch_assoc($resultado);




?>

<!DOCTYPE html>
<html>
<head >
	<title>Receta Rapi</title>
<meta charset="utf-8">
<meta name="viewport" content="widht=device-width; initial-soale=1.0">
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
<meta name="description"content="Encuentra aqui las mejores recetas faciles y caseras de cocina.Puedes encontrar comida facil de cocinar, postres, Vegetarianas, saludables, todo tipo de recetas"/>
<!--FICHERO DE CSS PARA LOS DISPLAY Y LOS ESTILOS-->
<link rel="stylesheet" type="text/css" href="paginacocina/FicherosCSS/base.css">
<link rel="stylesheet" type="text/css" href="paginacocina/FicherosCSS/estilos.css">
<link rel="stylesheet" type="text/css" href="paginacocina/FicherosCSS/Mi-Perfil/miperfil.css">
<link rel="stylesheet" type="text/css" href="paginacocina/FicherosCSS/Mi-Perfil/Recetas Completas/great.css" media="screen and (min-width:1145px)">
<link rel="stylesheet" type="text/css" href="paginacocina/FicherosCSS/Mi-Perfil/Recetas Completas/medium.css"media="screen and (min-width: 1050px) and (max-width:1144px)">
<link rel="stylesheet" type="text/css" href="paginacocina/FicherosCSS/Mi-Perfil/Recetas Completas/mini.css"  media="screen and (min-width:950px) and (max-width:1049px)">
<link rel="stylesheet" type="text/css" href="paginacocina/FicherosCSS/Mi-Perfil/Recetas Completas/mini2.css"  media="screen and (min-width:880px)  and (max-width:949px)">
<link rel="stylesheet" type="text/css" href="paginacocina/FicherosCSS/Mi-Perfil/Recetas Completas/mini3.css"  media="screen and (min-width:760px)  and (max-width:879px)">
<link rel="stylesheet" type="text/css" href="paginacocina/FicherosCSS/Mi-Perfil/Recetas Completas/mini4.css"  media="screen and (min-width:680px)  and (max-width:759px)">
<link rel="stylesheet" type="text/css" href="paginacocina/FicherosCSS/Mi-Perfil/Recetas Completas/mini5.css"  media="screen and (min-width:655px)  and (max-width:679px)">
<link rel="stylesheet" type="text/css" href="paginacocina/FicherosCSS/Mi-Perfil/Recetas Completas/mini7.css"  media="screen and (min-width:580px)  and (max-width:654px)">
<link rel="stylesheet" type="text/css" href="paginacocina/FicherosCSS/Mi-Perfil/Recetas Completas/mini8.css"  media="screen and (min-width:530px)  and (max-width:579px)">
<link rel="stylesheet" type="text/css" href="paginacocina/FicherosCSS/Mi-Perfil/Recetas Completas/mini9.css"  media="screen and (min-width:460px)  and (max-width:529px)">
<link rel="stylesheet" type="text/css" href="paginacocina/FicherosCSS/Mi-Perfil/Recetas Completas/mini10.css"  media="screen and (min-width:420px)  and (max-width:459px)">
<link rel="stylesheet" type="text/css" href="paginacocina/FicherosCSS/Mi-Perfil/Recetas Completas/mini11.css"  media="screen and (min-width:360px)  and (max-width:419px)">
<link rel="stylesheet" type="text/css" href="paginacocina/FicherosCSS/Mi-Perfil/Recetas Completas/mini12.css"  media="screen and (min-width:320px)  and (max-width:359px)">
<link rel="stylesheet" type="text/css" href="paginacocina/FicherosCSS/Mi-Perfil/Recetas Completas/mini13.css"  media="screen and (min-width:310px)  and (max-width:319px)">
<link rel="stylesheet" type="text/css" href="paginacocina/FicherosCSS/Mi-Perfil/Recetas Completas/mini14.css"  media="screen and (min-width:265px)  and (max-width:309px)">
<link rel="stylesheet" type="text/css" href="paginacocina/FicherosCSS/Mi-Perfil/Recetas Completas/mini15.css"  media="screen and (min-width:175px)  and (max-width:264px)">
<link rel="stylesheet" type="text/css" href="paginacocina/FicherosCSS/Mi-Perfil/Recetas Completas/mini16.css"  media="screen and (min-width:0px)  and (max-width:174px)">


<!--FICHERO DE JAVASCRIPTS-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
<script src="paginacocina/js/jquery.flexslider.js"></script>
<script src="paginacocina/js/tecnicaslide.js"></script>
<!--PAGINA php RECETAS RAPI-->	
<body>
<!--IMAGEN BANNER --> 
<?php  
include 'banner-barrasesion.html'
?>
<!--Buscador -->
<?php  
include 'buscador.html'
?>
<br>
<!--Mi perfil-->
<div class="cuadro-perfil">
	<p class="lapiz"><a href="EditarPerfil.php">✏️</a></p> 	
	<div class="usuario">
	<img class="usuario" src="paginacocina/usuario1.png" >
	</div>
	<div class="nombre-correo">
	<h2 class="nombre">-<?php echo ucwords($row["nombre"])." ".ucwords($row['apellido']);?></h2>
	<div class="nombre-correo">
	<h2 class="correo">-<?php echo $_SESSION['correo']; ?></h2>
</div>
	</div>
</div>
<div class="favoritas">
	<h2 class="favorita">Recetas Favoritas <strong style="color:red;">&#10084;</strong>(0)</h2>
	<p class="fav">No se han añadido recetas favoritas...</p>

		<div class="container" onclick="location.href='TortaAjedrez.php'" style="cursor: pointer;">
	<!--FLEX-SLIDER IMAGENES-->
			<div class="flexslider">
				<ul class="slides">
					<li class="fotoreceta">
						<a href="TortaAjedrez.php"><img src="paginacocina/recetas/tortaajedrez.jpg" alt="Torta Ajedrez"></a>
							<section class="nombre">	
							</section>
					</li>
					<li class="fotoreceta">
						<a href="TortaAjedrez.php"><img src="paginacocina/recetas/tortaajedrez2.jpg" alt="Torta Ajedrez"></a>
							<section class="nombre">
							</section>
					</li>
					<li class="fotoreceta">
						<a href="TortaAjedrez.php"><img src="paginacocina/recetas/tortaajedrez4.jpg" alt="Torta Ajedrez"></a>
							<section class="nombre">	
							</section>
					</li>
				</ul>
			</div>
	<!--INFORMACION receta-->
	<content>
	<a class="titulo" href="TortaAjedrez.php"><h2 class="titulo"><strong>Torta Ajedrez</strong> </h2></a>

	<p class="etiquetas">	
		<a href="Postres.php">#Postres</a> <a href="Postres.php">#Tortas</a> <a href="Postres.php">#Chocolate</a></p>
	
	<form class="clasificacion"><!--
	--><input id="radio1" type="radio" name="estrellas" value="5"><!--
    --><label for="radio1">★</label><!--
    --><input id="radio2" type="radio" name="estrellas" value="4" ><!--
    --><label class="active" for="radio2">★</label><!--
    --><input id="radio3" type="radio" name="estrellas" value="3"><!--
    --><label class="active" for="radio3">★</label><!--
    --><input id="radio4" type="radio" name="estrellas" value="2"><!--
    --><label class="active" for="radio4">★</label><!--
    --><input id="radio5" type="radio" name="estrellas" value="1"><!--
    --><label class="active" for="radio5">★</label> 
	</form>
	  <time class="cooktime"><strong class="cooktime">&#x23F0;<a id="cooktime" href="TortaAjedrez.php"> 1 hora 20 min</a> </strong></time>

<p class="ingredientes"><a class="ingredientes" href="TortaAjedrez.php">
-1/2kg de margarina 
-4 tazas de azúcar 
-3tazas de leche liquida 
-Ralladura de limón 
-1 kg de harina
-Esencia de vainilla
-8 huevo grandes o 10 pequeños...</a><a href="TortaAjedrez.php">VER MAS</a></p>
			</content>
		</div>
	<br><br>

<!--BLOQUE DE RECETA -->
		<div class="container" onclick="location.href='Pan Campesino.php'" style="cursor: pointer;">
	<!--FLEX-SLIDER IMAGENES-->
			<div class="flexslider">
				<ul class="slides">
					<li class="fotoreceta">
						<a href="Pan Campesino.php"><img src="paginacocina/recetas/Pan Campesino.jpg" alt="Pan Campesino"></a>
							<section class="nombre">	
							</section>
					</li>
					<li class="fotoreceta">
						<a href="Pan Campesino.php"><img src="paginacocina/recetas/Pan Campesino2.jpg" alt="Pan Campesino"></a>
							<section class="nombre">
							</section>
					</li>
				</ul>
			</div>
	<!--INFORMACION receta-->
	<content>
	<a class="titulo" href="Pan Campesino.php"><h2 class="titulo"><strong>Pan Campesino </strong> </h2></a><p class="etiquetas">
		
		<a href="Panes y Masas.php">#Panes</a> <a href="Desayuno.php">#Desayuno</a> <a href="Panes y Masas.php">#Masa</a></p>
	
	<form class="clasificacion"><!--
	--><input id="radio1" type="radio" name="estrellas" value="5"><!--
    --><label for="radio1">★</label><!--
    --><input id="radio2" type="radio" name="estrellas" value="4" ><!--
    --><label class="active" for="radio2">★</label><!--
    --><input id="radio3" type="radio" name="estrellas" value="3"><!--
    --><label class="active" for="radio3">★</label><!--
    --><input id="radio4" type="radio" name="estrellas" value="2"><!--
    --><label class="active" for="radio4">★</label><!--
    --><input id="radio5" type="radio" name="estrellas" value="1"><!--
    --><label class="active" for="radio5">★</label> 
	</form>
	  <time class="cooktime"><strong class="cooktime">&#x23F0;<a id="cooktime" href="Pan Campesino.php">1 hora 10min</a> </strong></time>

<p class="ingredientes"><a class="ingredientes" href="Pan Campesino.php">
-1 Kg. de harina
-500cc de agua
-38 gr. de leche en polvo
-25gr de margarina 
-100gr de huevo (2 huevos pequeños)
-1 cucharada de levadura Inst.
-30 gr de azúcar...</a><a href="Pan Campesino.php">VER MAS</a></p>
			</content>
		</div>
	</content><br><br>
</div>

<br>

<?php
include 'footer.html';
?>

</body>
</head>
</html>


