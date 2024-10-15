	$(document).ready(function(){
  $('#cambiar').submit(function(e) {  //Don't foget to change the id form
  e.preventDefault();

    var password;
  password= document.getElementById("password").value;

  solotexto =/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  sinespacios =/\S/;
  expresion =/\w+@\w+\.+[a-z]/;

/*VALIDAR LARGO DE CAMPO */
  if (password=== ""){
    Swal.fire({
      title: '<span class="titulo-alerta">La contraseña no puede estar en blanco.</span>',
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

  if(password.length>16) {
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
  } else if(password.length<8) {
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



var datos =$('#cambiar').serialize();
  $.ajax({
      url:'cambiar.php', //===PHP file name====
      type:'POST',
      dataType:'json',
      data:datos,
      
            beforeSend: function() {
Swal.fire({
      title: '<span class="titulo-alerta">Consultando la base de datos...</span>',
      icon:'',
      imageUrl:'../paginacocina/loadingcomida.gif',
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

   $incorrecto= Swal.fire({
      title: '<span class="titulo-alerta">Error al realizar el cambio de contraseña.</span>',
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
},
      error:function(data){
  

  Swal.fire({
      title: '<span class="titulo-alerta">El cambio de clave fue realizado exitosamente.</span>',
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

    window.location.replace('../INGRESAR.php');
});      








      }

    });

  });
});
