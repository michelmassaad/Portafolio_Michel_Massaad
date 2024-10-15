
function descubrir() {
	var tajetasPendientes;
	var totalDescubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
// limitar la cantidad de cartas descubiertas	
	if (totalDescubiertas.length >1) {
		return;
	}

	this.classList.add("descubierta");


//poner sonido a la carta
document.querySelector("#sonido-carta").cloneNode().play();


//validar 
	var descubiertas;
	var descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
	if (descubiertas.length <2) {
		return;
	}

comparar(descubiertas);
actualizaContador();
tajetasPendientes= document.querySelectorAll(".tarjeta:not(.acertada)");
if (tajetasPendientes.length === 0) {
	setTimeout(finalizar,1000);
	
}

function comparar(tarjetasAComparar) {
	if (tarjetasAComparar[0].dataset.valor === tarjetasAComparar[1].dataset.valor) {
	acierto(tarjetasAComparar);

}else{
	error(tarjetasAComparar);
}
}
};