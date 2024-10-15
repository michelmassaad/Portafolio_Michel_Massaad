<?php
    header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
    header("Cache-Control: post-check=0, pre-check=0", false);
    header("Pragma: no-cache");
    header('Cache-Control: no cache'); 

if (!$_GET['nombre']) {
	die('No Autorizado');
} elseif (!$_GET['apellido']) {
	die('No Autorizado');
}elseif (!$_GET['token']) {
	die('No Autorizado');
}elseif (!$_GET['id']) {
	die('No Autorizado');
}else{

	
	include '../conexion.php';
	$nombre		=($_GET['nombre']);
	$apellido	=($_GET['apellido']);
	$token		=($_GET['token']);
	$id       =($_GET['id']);

$consulta= "SELECT  *FROM usuario WHERE id='$id' ";
$resultado = mysqli_query($conexion,$consulta);
$row= mysqli_fetch_assoc($resultado);

if ($row['token'] == $token) {


}
else{
	header("Location:cambiarclave.php");
	exit();
}
}

?>

<!DOCTYPE html>
<html>
<head>
	<title>Nueva contraseña</title>

<meta charset="utf-8">
<link rel="stylesheet" type="text/css" href="olvidaste tu contraseña.css">
<link rel="stylesheet" type="text/css" href="pantallas-olvido-contraseña/great2.css" media="screen and (min-width:700px)">
<link rel="stylesheet" type="text/css" href="pantallas-olvido-contraseña/medium.css" media="screen and (min-width: 300px) and (max-width:699px)">
<link rel="stylesheet" type="text/css" href="pantallas-olvido-contraseña/mini.css"  media="screen and (min-width:230px) and (max-width:299px)">
<link rel="stylesheet" type="text/css" href="pantallas-olvido-contraseña/mini2.css"  media="screen and (min-width:0px)  and (max-width:229px)">

<!--FICHERO DE JAVASCRIPT-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="https://code.jquery.com/jquery-3.0.0.js"></script>
<script src="https://code.jquery.com/jquery-migrate-3.3.0.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="../paginacocina/js/jquery-3.5.1.min.js"></script>

<style type="text/css">
	.nomostrar{ 
		display: none;
	}
</style>

 </head>


 <body>
  <div class="nomostrar">    

  </div>
    <div class="login" id="cajadeinicio" >

      <a href="../PAGINA WEB COCINA.php"><img src="../paginacocina/Recetas Rapi.jpg" class="avatar" alt="recetas Rapi"></a>
      <h1 >Cambiar Contraseña</h1>
      <form  method="POST" id="cambiar">
        <!-- USERNAME INPUT -->
        <label for="username" style="margin-top: 15px;">Contraseña</label>
        <input id="password" type="password" name="clave" placeholder="Ingresa Tu Nueva Contraseña." style="margin-bottom: 20px;" maxlength="16" >
        <input type="hidden" name="id" value="<?php echo $row['id'] ?>">
      
        <!-- PASSWORD INPUT -->
        <!-- <input type="submit" value="Iniciar"> -->
        <input type="submit" id="boton" name="cambiar" value="Cambiar">
        <p class="abajo" id="inicio" style="margin-top: -5px;"><a href="../INGRESAR.php">Iniciar sesión...</a></p>
        <p class="abajo"><a href="../Registrate aqui.php">Registrate aqui...</a></p>
      </form>
    </div>
<br>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.11.0/sweetalert2.js"></script>

<?php
include 'footer.html'
?>
<script src="cambiar.js"></script>

</body>
</html>