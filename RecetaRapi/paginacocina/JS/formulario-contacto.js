$(document).ready(function(){
  $('#formulario1').submit(function(e) {  //Don't foget to change the id form
 e.preventDefault();
    var nombre, correo, mensaje,expresion,solotexto,sinespacios;
  nombre= document.getElementById("nombre").value;
  correo= document.getElementById("correo").value;
  mensaje= document.getElementById("mensaje").value;

  solotexto =/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  sinespacios =/\S/;
  expresion =/\w+@\w+\.+[a-z]/;



  if (nombre  === ""||  correo=== ""||mensaje=== ""){
    Swal.fire({
      title: '<span class="titulo-alerta">Los campos con (*) son obligatorios.</span>',
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
  /*Validar expresiones Solo texto*/

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
  /*Validar expresiones sin espacios*/

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
     else if(!sinespacios.test(mensaje)) {
    Swal.fire({
      title:'<span class="titulo-alerta">El Mensaje no puede estar en blanco.</span>',
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
  /*Validar expresiones largas*/
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
  else if(nombre.length<2) {
    Swal.fire({
      title:'<span class="titulo-alerta">El nombre es muy corto.</span>',
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
 else if(mensaje.length<8) {
    Swal.fire({
      title:'<span class="titulo-alerta">El mensaje es muy corto.</span>',
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

/*VALIDAR MEDIANTE AJAX*/

  $.ajax({
      url:'enviar-correo/enviar-contacto.php', //===PHP file name====
      type:'POST',
      dataType:'json',
      data:$(this).serialize(),
  
       beforeSend: function() {
Swal.fire({
      title: '<span class="titulo-alerta">Enviando Mensaje...</span>',
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
     $correo=   Swal.fire({
      title: '<span class="titulo-alerta">Mensaje Enviado Correctamente.</span>',
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
    });
 $('#formulario1').trigger("reset");






},
      error:function(data){
  
   Swal.fire({
      title: '<span class="titulo-alerta">Error al enviar mensaje.</span>',
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
      timer:10000,

        customClass:{
      confirmButton:'buttonclass',
  }
    });   
  
      }



    });


    });
  });
