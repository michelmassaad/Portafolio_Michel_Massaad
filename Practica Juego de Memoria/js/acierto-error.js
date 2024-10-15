
function acierto(lasTarjetas) {
		lasTarjetas.forEach(function (elemento) {
			elemento.classList.add("acertada");
		});

//poner sonido al acierto
document.querySelector("#sonido-acierto").play();
}


function error(lasTarjetas) {
		lasTarjetas.forEach(function (elemento) {
			elemento.classList.add("error");
		});

//poner sonido al error
document.querySelector("#sonido-error").play();

		setTimeout(
			function () {
		lasTarjetas.forEach(function (elemento) {
			elemento.classList.remove("descubierta");
			elemento.classList.remove("error");




			})
		},1000);

}
	
