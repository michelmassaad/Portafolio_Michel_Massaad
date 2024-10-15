$(document).ready(function(){
  $('#inicio').submit(function(e) {  //Don't foget to change the id form
  e.preventDefault();
  
    var  correo, password,expresion,solotexto,sinespacios;

  correo= document.getElementById("correo").value;
  password= document.getElementById("password").value;

  solotexto =/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  sinespacios =/\S/;
  expresion =/\w+@\w+\.+[a-z]/;

  if (correo=== ""||password===""){
    Swal.fire({
      title: '<span class="titulo-alerta">Todos los campos son obligatorios.</span>',
      allowOutsideClick:false,
      allowEscapeKey:false,
      allowEnterKey:false,
      stopKeydownPropagation:false,
      backdrop: true,
      showConfirmButton: true,
      confirmButtonColor:'darkorange',
      confirmButtonAriaLabel:'OK',
      confirmButtonText:'<span class="letra-boton">OK</span>',
        customClass:{
      confirmButton:'buttonclass',
  }
    });
    return false;
  } 
   //VALIDAR EXPRESION DE CORREO 
  else if(!expresion.test(correo)) {
    Swal.fire({
      title:'<span class="titulo-alerta">El correo no es válido.</span>',
        allowOutsideClick:false,
      allowEscapeKey:false,
      allowEnterKey:false,
      stopKeydownPropagation:false,
      backdrop: true,
      showConfirmButton: true,
      confirmButtonColor:'darkorange',
      confirmButtonAriaLabel:'OK',
      confirmButtonText:'<span class="letra-boton">OK</span>',

        customClass:{
      confirmButton:'buttonclass',
  }
    });
    return false;
  }
    else if(password.length>16) {
    Swal.fire({
      title:'<span class="titulo-alerta">La clave debe tener entre 8 a 16 carácteres.</span>',
        allowOutsideClick:false,
      allowEscapeKey:false,
      allowEnterKey:false,
      stopKeydownPropagation:false,
      backdrop: true,
      showConfirmButton: true,
      confirmButtonColor:'darkorange',
      confirmButtonAriaLabel:'OK',
      confirmButtonText:'<span class="letra-boton">OK</span>',

        customClass:{
      confirmButton:'buttonclass',
  }

    });
    return false;
  }
  else if(password.length<8) {
    Swal.fire({
      title:'<span class="titulo-alerta">La clave debe tener entre 8 a 16 carácteres.</span>',
        allowOutsideClick:false,
      allowEscapeKey:false,
      allowEnterKey:false,
      stopKeydownPropagation:false,
      backdrop: true,
      showConfirmButton: true,
      confirmButtonColor:'darkorange',
      confirmButtonAriaLabel:'OK',
      confirmButtonText:'<span class="letra-boton">OK</span>',

        customClass:{
      confirmButton:'buttonclass',
  }
    });
    return false;
  }

 var espacios = false;
  var cont = 0;

  while (!espacios && (cont < password.length)) {
    if (password.charAt(cont) == " ")
    espacios = true;
    cont++;
  }
  if (espacios) {
    Swal.fire({
      title:'<span class="titulo-alerta">La clave no es correcta.</span>',
        allowOutsideClick:false,
      allowEscapeKey:false,
      allowEnterKey:false,
      stopKeydownPropagation:false,
      backdrop: true,
      showConfirmButton: true,
      confirmButtonColor:'darkorange',
      confirmButtonAriaLabel:'OK',
      confirmButtonText:'<span class="letra-boton">OK</span>',

        customClass:{
      confirmButton:'buttonclass',
  }
    }); 
    return false;
}




  /*VALIDACION DATOS MEDIANTE AJAX*/
  $.ajax({
      url:'validar.php', //===PHP file name====
      type:'POST',
      dataType:'json',
      data:$(this).serialize(),

           beforeSend: function() {
Swal.fire({
      title: '<span class="titulo-alerta">Consultando la base de datos...</span>',
      icon:'',
      imageUrl:'paginacocina/loadingcomida.gif',
      imageWidth:'80px',
      imageHeight:'80px',
      imageAlt:'cargando',
      allowOutsideClick:false,
      allowEscapeKey:false,
      allowEnterKey:false,
      stopKeydownPropagation:false,
      backdrop: true,
      // timer:,
      showConfirmButton: false,
      confirmButtonColor:'darkorange',
      confirmButtonAriaLabel:'OK',
      confirmButtonText:'<span class="letra-boton">OK</span>',
        customClass:{
      confirmButton:'buttonclass',
  }
  })
    },

      success:function(data){
 	$alerta=  	Swal.fire({
      title: '<span class="titulo-alerta">Iniciando Sesión...</span>',
      icon:'',
      imageUrl:'paginacocina/loadingcomida.gif',
      imageWidth:'80px',
      imageHeight:'80px',
      imageAlt:'cargando',
      allowOutsideClick:false,
      allowEscapeKey:false,
      allowEnterKey:false,
      stopKeydownPropagation:false,
      backdrop: true,
      timer:2500,
      showConfirmButton: false,
      confirmButtonColor:'darkorange',
      confirmButtonAriaLabel:'OK',
      confirmButtonText:'<span class="letra-boton">OK</span>',
        customClass:{
      confirmButton:'buttonclass',
  }
    }).then(function() {
    window.location = "MIPERFIL.php";
});
},
      error:function(jqXHR,estado,error){
      	Swal.fire({
      title: '<span class="titulo-alerta">Nombre de usuario o contraseña incorrectos.</span>',
      icon:'error',
      allowOutsideClick:false,
      allowEscapeKey:false,
      allowEnterKey:false,
      stopKeydownPropagation:false,
      backdrop: true,
      showConfirmButton: true,
      confirmButtonColor:'darkorange',
      confirmButtonAriaLabel:'OK',
      confirmButtonText:'<span class="letra-boton">OK</span>',
        customClass:{
      confirmButton:'buttonclass',
  }
    });;

      }
    });
  });
});