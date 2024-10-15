$(document).ready(function(){
  $('#recupera').submit(function(e) {  //Don't foget to change the id form
  e.preventDefault();
 

var datos =$('#recupera').serialize();
  $.ajax({
      url:'recupera.php', //===PHP file name====
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
     $correcto=   Swal.fire({
      title: '<span class="titulo-alerta">Este correo no esta registrado.</span>',
      icon:'error',
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

},
      error:function(data){
  
   Swal.fire({
      title: '<span class="titulo-alerta">Le hemos enviado un correo para recuperar la contraseña.</span>',
      html:'<span class="titulo2-alerta">Si no recibió su correo vuelva a intentarlo.</span>',
      icon:'info',
      allowOutsideClick:false,
      allowEscapeKey:false,
      allowEnterKey:false,
      stopKeydownPropagation:false,
      backdrop: true,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor:'darkorange',
      cancelButtonColor:'darkorange',
      confirmButtonAriaLabel:'Inciar Sesion',
      cancelButtonAriaLabel:'Volver',
      confirmButtonText:'<span class="letra-boton">Inciar Sesion.</span>',
      cancelButtonText:'<span class="letra-boton">Volver.</span>',
        customClass:{
      confirmButton:'buttonclass',
      cancelButton:'buttonclass',

  }
    }).then((result) => {

  if (result.value) {
    
    window.location = "../INGRESAR.php";
  
  }


});   
 $('#recupera').trigger("reset");
/*Hubo un error al enviar el mensaje de recuperacion de contraseña*/



  
      }








    });









  });
});
