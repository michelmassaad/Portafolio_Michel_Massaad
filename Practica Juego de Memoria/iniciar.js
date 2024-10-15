function iniciar() {
movimientos = 0;

reparteTarjetas(niveles[nivelActual].tarjetas);
maxContador();

	document.querySelector("#mov").innerText = "00";
	document.querySelector(".selecciona-nivel").classList.remove("visible");
	document.querySelector("#endGame").classList.remove("visible");
	document.querySelector("#subeNivel").classList.remove("visible");
	document.querySelector("#gameOver").classList.remove("visible");
	document.querySelector("#timeOver").classList.remove("visible");


document.querySelectorAll(".tarjeta").forEach(
	function (elemento) {
	elemento.addEventListener("click",descubrir);
});

if (!modoRelax) {
	iniciaCronometro();

}else{
	document.querySelector(".cronometro").classList.add("cronometro-oculto");
}

}

function reiniciar() {
	var segundos = niveles[nivelActual].tiempoMax;
      clearInterval(cronometro);



	actualizaNivel();
	iniciar();
}

function iniciaJuegoNormal() {
	modoRelax = false;
	document.querySelector("#bienvenida").classList.remove("visible");
	iniciar();
	document.querySelector(".control-nivel").classList.add("control-oculto");

}
function iniciaJuegoRelax() {
	modoRelax = true;
	document.querySelector("#bienvenida").classList.remove("visible");
	iniciar();
	
}


function mostrarBienvenida() {
window.location.reload();
}

