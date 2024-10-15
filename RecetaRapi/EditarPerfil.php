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
<head>
	<title>Editar Perfil</title>

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

<!--FICHEROS PARA EL JAVASCRIPT-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="https://code.jquery.com/jquery-3.0.0.js"></script>
<script src="https://code.jquery.com/jquery-migrate-3.3.0.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="paginacocina/js/jquery-3.5.1.min.js"></script>
<script src="paginacocina/js/editarperfil.js"></script>
<script src="paginacocina/js/editarcontraseña.js"></script>
<script src="olvido de contraseña/recupera-adentro.js"></script>
</head>
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

	<form id="EditarPerfil" method="POST">
<!--NOMBRE-->

		<label class="titulolabel" style="color: black;">Nombre</label>
		<div class="espacio">
		<input type="text" id="nombre" name="nombre" maxlength="20" minlength="3" style="width: 40%;text-transform: capitalize;" value="<?php echo ucwords($row["nombre"])?>">
		</div><br>
<!--APELLIDO-->

		<label class="titulolabel" style="color: black;">Apellido</label>
		<div class="espacio">
		<input type="text" id="apellido" name="apellido" maxlength="20" minlength="3" style="width: 40%;text-transform: capitalize;" value="<?php echo ucwords($row["apellido"])?>"><br><br>
		</div>

<!--NO MOSTRAR-->
		<div id="nomostrar" class="nomostrar" style="display: none;">
<!--ID-->
		<label class="titulolabel" style="color: black;">Id</label>
		<div class="espacio">

		<input type="text" name="id" id="id" maxlength="80" minlength="8" style="width: 40%;" readonly="readonly" value="<?php echo $row['id']; ?>"><br><br>
<!--NOMBREBUENO-->
		<label class="titulolabel" style="color: black;">Nombre BUENO</label>
		<div class="espacio">
		<input type="text" id="nombrebueno" name="nombrebueno" maxlength="20" minlength="3" style="width: 40%;text-transform: capitalize;" value="<?php echo ucwords($row["nombre"])?>" readonly="readonly" >
		</div><br>

<!--APELLIDOBUENO-->

		<label class="titulolabel" style="color: black;">Apellido BUENO</label>
		<div class="espacio">
		<input type="text" id="apellidobueno" name="apellidobueno" maxlength="20" minlength="3" style="width: 40%;text-transform: capitalize;" value="<?php echo ucwords($row["apellido"])?>" readonly="readonly" ><br><br>
		</div>

		</div>
		</div>
<!--BOTON-->
		<input class="boton"  type="submit" id="boton" name="boton" value="Cambiar">
		<div class="agregado" id="agregado" style="margin-top: 10px;"></div>

	</form>
	<div class="nombre-correo">
</div>
	</div>
</div>
<div class="cuadro-perfil">
	<p class="lapiz"><a href="EditarPerfil.php">✏️</a></p> 	
	<div class="usuario">
	<img class="usuario" src="paginacocina/llave.png" >
	</div>
	<div class="nombre-correo">

	<form id="EditarContraseña" method="POST">
<!--Contraseña Actual-->

		<label class="titulolabel" style="color: black;">Contraseña Actual</label>
		<div class="espacio">
		<input type="password" id="contraseñaac" name="contraseñaac" maxlength="16" minlength="8" style="width: 40%;" value="" required="" >
		</div><br>
<!--Contraseña nueva-->

		<label class="titulolabel" style="color: black;">Contraseña Nueva</label>
		<div class="espacio">
		<input type="password" id="clave" name="clave" required="" maxlength="16" minlength="8" style="width: 40%;" value="" ><br><br>
		</div>
<!--Confirmar Contraseña-->
		<label class="titulolabel" style="color: black;">Confirmar Contraseña</label>
		<div class="espacio">
		<input type="password" id="clave2" name="clave2"  style="width: 40%;" value="" maxlength="16" minlength="8" required="" ><br><br>
		</div>
<!--BOTON-->
	<div class="espacio">
		<input class="boton"  type="submit" id="boton2" name="boton2" value="Cambiar">	
	</div>
<!--Olvido de contraseña-->
<div class="espacio">
	<p class="enlace" style="margin-bottom: 20px;"><a type="submit"  id="boton3" class="enlace" href="#">¿Olvidó su Contraseña?</a></p>

</div>
<!--NO MOSTRAR-->
		<div id="nomostrar" class="nomostrar" style="display: none;">
<!--ID-->
		<label class="titulolabel" style="color: black;">Id</label>
		<div class="espacio">

		<input type="text" name="id" id="id" maxlength="80" minlength="8" style="width: 40%;" readonly="readonly" value="<?php echo $row['id']; ?>"><br><br>
</div>


	</form>
</div></div></form></div>
</div>


<!--FOOTER-->
<?php
include 'footer.html';
?>		


<script type="text/javascript">
	document.getElementById('nomostrar').style.display ="none";


</script>


<script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.11.0/sweetalert2.js"></script>



</body>

</html>