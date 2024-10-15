function validar() {
	var nombre, apellido, correo, password;
	nombre= document.getElementById("nombre").value;
	apellido= document.getElementById("apellido").value;
	correo= document.getElementById("correo").value;
	password= document.getElementById("password").value;

	expresion =/\w+@\w+\.+[a-z]/;
	solotexto =/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
	sinespacios =/\S/;
	if (nombre  === ""|| apellido=== ""|| correo=== ""||password=== ""){
		Swal.fire({
			title: '<span class="titulo-alerta">Todos los campos son obligatorios</span>',
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
			title:'<span class="titulo-alerta">El nombre es muy largo</span>',
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
			title:'<span class="titulo-alerta">El apellido es muy largo</span>',
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
			title:'<span class="titulo-alerta">El correo es muy largo</span>',
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
			title:'<span class="titulo-alerta">La clave debe tener entre 8 a 16 carácteres</span>',
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
			title:'<span class="titulo-alerta">La clave debe tener entre 8 a 16 carácteres</span>',
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
			title:'<span class="titulo-alerta">El correo no es válido</span>',
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
			title:'<span class="titulo-alerta">El Nombre no es texto</span>',
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
			title:'<span class="titulo-alerta">El Apellido no es texto</span>',
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
			title:'<span class="titulo-alerta">El Nombre no puede estar en blanco</span>',
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
			title:'<span class="titulo-alerta">El Apellido no puede estar en blanco</span>',
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
			title:'<span class="titulo-alerta">La contraseña no puede contener espacios en blanco</span>',
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

// /*ENVIO DE DATOS FORMULARIO */
// $(document).ready(function(){
//   $('#form-login').submit(function(e) {  //Don't foget to change the id form
//   e.preventDefault();
//   $.ajax({
//       url:'registrar.php', //===PHP file name====
//       type:'POST',
//       dataType:'json',
//       data:{nombre:nombre,apellido:apellido,correo:correo,password:password},

//       success:function(data){
//       	if (data=="null") {
//       		Swal.fire({
//       			type:'error',
//       			title: 'Usuario ya usado', 
//       		});

//       	}else{
//       		Swal.fire({
//       			type:'success',
//       			title:'Conexion exitosa',
//       		}).then((result)=>{
//       			if (result.value) {
//       				window.location.href ="PAGINA WEB COCINA.php"
//       			}
//       		}

//       		)

//       	}

//       }
//     });
//   });
// });


}

