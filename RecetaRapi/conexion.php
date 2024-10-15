<?php

    $servidor = "localhost";
    $nombreusuario = "root";
    $password = "";
    $db="recetarapi";
    $conexion = new mysqli($servidor, $nombreusuario, $password,$db);

    if($conexion-> connect_error){
        die("Conexión fallida: " . $conexion-> connect_error);
    }

//    echo "Conexión exitosa...";
    
?>