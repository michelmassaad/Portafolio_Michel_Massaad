$(document).ready(function(){
  $('#EditarPerfil').submit(function(e) {  //Don't foget to change the id form
  e.preventDefault();

    var nombre, apellido,nombrebueno,apellidobueno,boton,expresion,solotexto,sinespacios;
  nombre= document.getElementById("nombre").value;
  apellido= document.getElementById("apellido").value;
  nombrebueno= document.getElementById("nombrebueno").value;
  apellidobueno= document.getElementById("apellidobueno").value;
  boton= document.getElementById("boton").value;



  solotexto =/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  sinespacios =/\S/;
  expresion =/\w+@\w+\.+[a-z]/;

    if (nombre != nombrebueno|| apellido!=apellidobueno) {
  document.getElementById('agregado').style.display ="none";


    } else {
  $("#agregado").html("<b class='nuevo'>Debe realizar algún cambio.</b>");

    return false;
    }


  if (nombre  === ""|| apellido=== ""){
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
  //habilitar boton submmit


var datos =$('#EditarPerfil').serialize();
  $.ajax({
      url:'editar-perfil.php', //===PHP file name====
      type:'POST',
      dataType:'json',
      data:datos,
           beforeSend: function() {
Swal.fire({
      title: '<span class="titulo-alerta">Cambiando Datos...</span>',
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
     $alerta=   Swal.fire({
      title: '<span class="titulo-alerta">Error al cambiar los datos.</span>',
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
      title: '<span class="titulo-alerta">Datos cambiados correctamente.</span>',
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
    window.location.replace("MIPERFIL.php");
});
      }







    });
  });
});
