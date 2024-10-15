function finalizar() {
  clearInterval(cronometro);

	if (nivelActual < niveles.length - 1) {
	document.querySelector("#subeNivel").classList.add("visible");

	}else if (movimientos >niveles[nivelActual].movimientosMax){
		gameOver();
		return;


	}else{
	document.querySelector("#endGame").classList.add("visible");

	}


}