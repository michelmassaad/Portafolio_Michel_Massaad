escribeNiveles();
//boton reiniciar
document.querySelectorAll(".reiniciar").forEach(function (elemento){
	
elemento.addEventListener("click",reiniciar);
});
document.querySelectorAll(".boton-cabecera").forEach(function (elemento){
	
elemento.addEventListener("click",reiniciar);
});

// boton siguiente Nivel
document.querySelector("#subir").addEventListener("click",cargaNuevoNivel);

//boton quiero juegar
document.querySelector("#juego-normal").addEventListener("click",iniciaJuegoNormal);

//boton modo relax
document.querySelector("#juego-relax").addEventListener("click",iniciaJuegoRelax);

//boton menu niveles
document
  .querySelector("#control-nivel")
  .addEventListener("click", muestraMenuNiveles);
document
  .querySelector("#cierra-niveles")
  .addEventListener("click", ocultaMenuNiveles);
document.querySelectorAll("button.nivel").forEach(function(elemento) {
  elemento.addEventListener("click", cambiaNivel);
});

//Mostrar pantalla bienvenida siempre
document.querySelector("#bienvenida").classList.add("visible");

document.querySelectorAll(".boton-volver").forEach(function (elemento){
	
elemento.addEventListener("click",mostrarBienvenida);
});

