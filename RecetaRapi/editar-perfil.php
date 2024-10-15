<?php 
if (!$_POST) {
	die('No autorizado');
}

include 'conexion.php';

//RECIBIR Y ALMACENAR DATOS EN VARIABLES
$nombre = $_POST['nombre'];
$apellido =$_POST['apellido'];
$id =$_POST['id'];

//CONSULTA PARA ACTUALIZAR LOS DATOS
$actualizar = mysqli_query($conexion, "UPDATE usuario SET nombre ='$nombre', apellido = '$apellido' WHERE id = '$id' ");


$alerta="null";


//EJECUTAR CONSULTA 

if (!$actualizar) {
	echo "Error al cambiar los datos";
}else{
	echo "Datos actualizados correctamente";
	return true;

}


// echo mysqli_query($conexion,$insertar);
// CERRAR CONEXION
mysqli_close($conexion);


 ?>

