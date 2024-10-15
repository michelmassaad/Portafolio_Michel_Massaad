$(document).ready(function(){
  $('#EditarContraseña').submit(function(e) {  //Don't foget to change the id form
  e.preventDefault();

    var contraseñaac,clave,clave2,boton,expresion,solotexto,sinespacios;
  contraseñaac= document.getElementById("contraseñaac").value;
  clave= document.getElementById("clave").value;
  clave2= document.getElementById("clave2").value;
  boton2= document.getElementById("boton2").value;


  solotexto =/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  sinespacios =/\S/;
  expresion =/\w+@\w+\.+[a-z]/;
/*VALIDAR LARGO DE CAMPO */
  if (contraseñaac=== ""){
    Swal.fire({
      title: '<span class="titulo-alerta">La Contraseña Actual no puede estar en blanco.</span>',
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
  if (clave=== ""){
    Swal.fire({
      title: '<span class="titulo-alerta">La Contraseña Nueva no puede estar en blanco.</span>',
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
  if (clave != clave2){
    Swal.fire({
      title: '<span class="titulo-alerta">El campo de Confirmar Contraseña debe coincidir con la Nueva Contraseña.</span>',
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

  if(clave.length>16) {
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
  } else if(clave.length<8) {
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

  while (!espacios && (cont < clave.length)) {
    if (clave.charAt(cont) == " ")
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

var datos =$('#EditarContraseña').serialize();
  $.ajax({
      url:'editar-contraseña.php', //===PHP file name====
      type:'POST',
      dataType:'json',
      data:datos,
           beforeSend: function() {
Swal.fire({
      title: '<span class="titulo-alerta">Cambiando Contraseña...</span>',
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
      // timer:10000,
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
 Swal.fire({
      title: '<span class="titulo-alerta">La Contraseña Actual no coincide.</span>',
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
	  })
    return false;
     
      },
/*ALERTA DE USUARIO REGISTRADO CORRECTAMENTE*/

      error:function(jqXHR,estado,error){
$alerta= Swal.fire({
      title: '<span class="titulo-alerta">Contraseña Cambiada Correctamente.</span>',
      icon:'success',
      allowOutsideClick:false,
      allowEscapeKey:false,
      allowEnterKey:false,
      stopKeydownPropagation:false,
      backdrop: true,
      showConfirmButton: true,
      confirmButtonColor:'darkorange',
      confirmButtonAriaLabel:'OK',
      confirmButtonText:'<span class="letra-boton">Cerrar Sesion</span>',
      timer:10000,

        customClass:{
      confirmButton:'buttonclass',
  }
    }).then(function() {
    window.location.replace("Cerrar Sesion.php");
});



      }






  });



});
});