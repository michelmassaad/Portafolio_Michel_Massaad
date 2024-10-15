<?php  
if (!$_POST) {
	die('No autorizado');
}

session_start();

$correo=$_POST['correo'];
$clave=$_POST['clave'];

/*VARIABLES DE SESION*/
$_SESSION['correo'] = $_POST['correo'];
$varcorreo = $_SESSION['correo'];

//CONECTAR BASE DE DATOS 
include 'conexion.php';

//CONSULTA 
$consulta= "SELECT *FROM usuario WHERE correo='$correo' and clave=md5('$clave')";
$resultado = mysqli_query($conexion,$consulta);



//validar

$alerta='null';


$filas=mysqli_num_rows($resultado);

if ($filas>0) {
	echo "$alerta ";
	return false;
}
else{
	echo "Error al iniciar sesion";
}

mysqli_free_result ($resultado);
mysqli_close($conexion);



?>