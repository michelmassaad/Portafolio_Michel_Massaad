<?php
if (!$_POST) {
	die('No autorizado');
}
$correo=$_POST['correo'];

//CONECTAR BASE DE DATOS 
include '../conexion.php';

//CONSULTA 
$consulta= "SELECT  *FROM usuario WHERE correo='$correo' ";
$resultado = mysqli_query($conexion,$consulta);
$row= mysqli_fetch_assoc($resultado);



$incorrecto='null';
//validar
$filas=mysqli_num_rows($resultado);

if ($filas>0) {

	$token = uniqid();

	$actualizar =mysqli_query($conexion,"UPDATE usuario SET token = '$token' WHERE correo = '$correo' ");

/*Enviar Email*/
include 'enviar-correo.php';

}
else{
	echo "$incorrecto";
}

mysqli_free_result ($resultado);
mysqli_close($conexion);



?>
