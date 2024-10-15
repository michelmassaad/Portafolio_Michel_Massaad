//revolver baraja de tarjetas
function barajaTarjetas(lasTarjetas) {

var resultado;
var totalTarjetas = lasTarjetas.concat(lasTarjetas);

resultado = totalTarjetas.sort(function () {
	return 0.5-Math.random();
});
 return resultado;
}


function reparteTarjetas(lasTarjetas) {
// acceder al html con el js
	var mesa = document.querySelector("#mesa");
//eliminando el div comun para acceder al html
	mesa.innerHTML = "";
//crear la variable para la funcion baraja tarjetas
	var tarjetasBarajadas = barajaTarjetas(lasTarjetas);

	tarjetasBarajadas.forEach(function (elemento) {
//crear el div de cada tarjeta
	var Tarjeta = document.createElement("div");
//modificando el contenido de cada div
	Tarjeta.innerHTML=(
		"<div class='tarjeta' data-valor="+elemento+">"+
				"<div class='tarjeta-emoji'>"
				+ elemento + 
				"</div>"+
			"</div>"
		);
//agregando la variable tarjeta para crear un elemento
	mesa.appendChild(Tarjeta);




	})
}