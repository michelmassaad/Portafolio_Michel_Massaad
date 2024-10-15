<?php 
if (!$_POST) {
	die('No autorizado');
}
session_start();
$varcorreo = $_SESSION ['correo'];
$correo = $_SESSION ['correo'];

include 'conexion.php';

//RECIBIR Y ALMACENAR DATOS EN VARIABLES
$contraseñaac  = $_POST['contraseñaac'];
$clave =$_POST['clave'];
$clave =md5($clave);
$clave2 =$_POST['clave2'];
$id =$_POST['id'];

//CONSULTA PARA ACTUALIZAR LOS DATOS

//CONSULTA 
$consulta= "SELECT  *FROM usuario WHERE id='$id' and clave=md5('$contraseñaac')";
$resultado = mysqli_query($conexion,$consulta);
$row= mysqli_fetch_assoc($resultado);

$alerta="null";

//validar
$filas=mysqli_num_rows($resultado);

if ($filas>0) {
	$actualizar =mysqli_query($conexion,"UPDATE usuario SET clave = '$clave' WHERE id = '$id' ");

/*Enviar Email*/
include 'enviar-correo/enviar-correo-cambiocontraseña.php';


}
else{
	echo "$alerta";
}

mysqli_free_result ($resultado);
mysqli_close($conexion);

 ?>
