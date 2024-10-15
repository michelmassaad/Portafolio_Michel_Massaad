$(document).ready(function(){
  $('#formlogin').submit(function(e) {  //Don't foget to change the id form
  e.preventDefault();

    var nombre, apellido, correo, password,expresion,solotexto,sinespacios;
  nombre= document.getElementById("nombre").value;
  apellido= document.getElementById("apellido").value;
  correo= document.getElementById("correo").value;
  password= document.getElementById("password").value;

  solotexto =/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  sinespacios =/\S/;
  expresion =/\w+@\w+\.+[a-z]/;

  if (nombre  === ""|| apellido=== ""|| correo=== ""||password=== ""){
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
  //VALIDAR LARGO DE CAMPO 
  else if(nombre.length>30) {
    Swal.fire({
      title:'<span class="titulo-alerta">El nombre es muy largo.</span>',
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
  else if(apellido.length>50) {
    Swal.fire({
      title:'<span class="titulo-alerta">El apellido es muy largo.</span>',
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
  else if(correo.length>150) {
    Swal.fire({
      title:'<span class="titulo-alerta">El correo es muy largo.</span>',
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
  //VALIDAR EXPRESIONES DE TEXTO SOLAMENTE
  else if(!solotexto.test(nombre)) {
    Swal.fire({
      title:'<span class="titulo-alerta">El Nombre debe ser solo texto.</span>',
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
  else if(!solotexto.test(apellido)) {
    Swal.fire({
      title:'<span class="titulo-alerta">El Apellido debe ser solo texto.</span>',
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
  else if(!sinespacios.test(nombre)) {
    Swal.fire({
      title:'<span class="titulo-alerta">El Nombre no puede estar en blanco.</span>',
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
  else if(!sinespacios.test(apellido)) {
    Swal.fire({
      title:'<span class="titulo-alerta">El Apellido no puede estar en blanco.</span>',
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
  //Validar espacios en blanco
  var espacios = false;
  var cont = 0;

  while (!espacios && (cont < password.length)) {
    if (password.charAt(cont) == " ")
    espacios = true;
    cont++;
  }
  if (espacios) {
    Swal.fire({
      title:'<span class="titulo-alerta">La contraseña no puede contener espacios en blanco.</span>',
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


var datos =$('#formlogin').serialize();
  $.ajax({
      url:'registrar.php', //===PHP file name====
      type:'POST',
      dataType:'json',
      data:datos,

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
        console.log(data);
/*ALERTA DE USUARIO NO DISPONIBLE*/
     $alerta=   Swal.fire({
      title: '<span class="titulo-alerta">Usuario no disponible.</span>',
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
    });
    return false;
      },
/*ALERTA DE USUARIO REGISTRADO CORRECTAMENTE*/

      error:function(jqXHR,estado,error){
  Swal.fire({
      title: '<span class="titulo-alerta">Usuario Registrado Exitosamente.</span>',
      icon:'success',
      allowOutsideClick:false,
      allowEscapeKey:false,
      allowEnterKey:false,
      stopKeydownPropagation:false,
      backdrop: true,
      showConfirmButton: true,
      confirmButtonColor:'darkorange',
      confirmButtonAriaLabel:'OK',
      confirmButtonText:'<span class="letra-boton">Continuar</span>',
      timer:10000,

        customClass:{
      confirmButton:'buttonclass',
  }
    }).then(function() {
    window.location.replace("INGRESAR.php");
});
      }







    });
  });
});
