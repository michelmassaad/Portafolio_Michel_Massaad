<?php 
if (!$_POST) {
	die('No autorizado');
}

include 'conexion.php';

//RECIBIR Y ALMACENAR DATOS EN VARIABLES
$nombre = $_POST['nombre'];
$apellido =$_POST['apellido'];
$correo = $_POST['correo'];
$clave = $_POST['clave'];

//CONSULTA PARA INSERTAR DATOS
$insertar = "INSERT INTO usuario(nombre, apellido, correo, clave) VALUES('$nombre','$apellido','$correo',md5('$clave'))";


$alerta="null";

/*RESPUESTAS*/

	$verificar_usuario = mysqli_query ($conexion,"SELECT * FROM usuario WHERE correo= '$correo'");

if (mysqli_num_rows ($verificar_usuario) > 0) {
	echo "$alerta";
	return true;
	exit();
}



//EJECUTAR CONSULTA 
$resultado = mysqli_query ($conexion,$insertar);

if (!$resultado) {
	echo "Error al registrarse";
}else{
	echo "Usuario Registrado Exitosamente";
	return true;

}


// echo mysqli_query($conexion,$insertar);
// CERRAR CONEXION
mysqli_close($conexion);


 ?>



<!-- 
// <script type="text/javascript">
// $(document).ready(function(){
//   $('#form-login').submit(function(e) {  //Don't foget to change the id form
//   e.preventDefault();
//   var nombre = $.trim($("nombre").val());
//   var apellido = $.trim($("apellido").val());
//   var correo = $.trim($("correo").val());
//   var password = $.trim($("password").val());
//   $.ajax({
//       url:'registrar.php', //===PHP file name====
//       type:'POST',
//       dataType:'json',
//       data:{nombre:nombre,apellido:apellido,correo:correo,password:password},

//       success:function(data){
//         console.log(data);
//         //Success Message == 'Title', 'Message body', Last one leave as it is
// 	    swal("¡Success!", "Message sent!", "success");
//       },
//       error:function(data){
//         //Error Message == 'Title', 'Message body', Last one leave as it is
// 	    swal("Oops...", "Something went wrong :(", "error");
//       }
//     });
//   });
// });
// </script> -->