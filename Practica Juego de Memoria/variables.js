var  movimientos=0;

var modoRelax= false;
var cronometro;

var grupoTarjetas =[["🥑","🍓"],["🥝","🍋","🍍"],["🍎","🍒"],["🍄","🍉","🍇"]];


var nivelActual = 0;

var niveles  = [
	{
	tarjetas: grupoTarjetas[0],
	movimientosMax: 3,
	tiempoMax: 10

	},
	{
	tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1]),
	movimientosMax: 10,
	tiempoMax:30

	},	
	{
	tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1],grupoTarjetas[2]),
	movimientosMax: 18,
	tiempoMax:59

	},
	{
	tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1],grupoTarjetas[2],grupoTarjetas[3]),
	movimientosMax: 20,
	tiempoMax:59
	}

];


