<?php

	include '../conexion.php';


	$id		=$_POST['id'];
    $clave		=$_POST['clave'];
    $clave 		=md5($clave);


$consulta= "SELECT  *FROM usuario WHERE id='$id' ";
$resultado = mysqli_query($conexion,$consulta);
$row= mysqli_fetch_assoc($resultado);
$correo = $row ['correo'];


$incorrecto='null';

if ($clave) {
    $act1 		=mysqli_query($conexion,"UPDATE usuario SET clave = '$clave',token = '' WHERE id = '$id' ");

/*Enviar Email*/
include '../enviar-correo/enviar-correo-cambiocontraseña.php';

	
}else{
	echo "$incorrecto";
} 
mysqli_free_result ($resultado);
mysqli_close($conexion);
  
?>
