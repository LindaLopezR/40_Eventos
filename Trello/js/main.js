var btnPrincipal = document.getElementById('btnPrincipal');
var tituloLista = document.createElement('input');
var lista = document.getElementById('lista');
var inicio = document.getElementById('inicio');
btnPrincipal.addEventListener('click', desplegar);
function desplegar(){
	var divLista = document.createElement('div');
	var btnFormulario = document.createElement('button');
	var tache = document.createElement('span');
	inicio.replaceChild(divLista, btnPrincipal);
	lista.appendChild(divLista);
	divLista.className = 'fnd-2';
	divLista.appendChild(tituloLista);
	tituloLista.setAttribute('placeholder', 'Añadir una lista');
	tituloLista.className = 'bloque';
	divLista.appendChild(btnFormulario);
	divLista.appendChild(tache);
	tache.setAttribute('class','glyphicon glyphicon-remove');
	btnFormulario.appendChild(document.createTextNode('Guardar'));
	btnFormulario.setAttribute('class','btn btn-primary btn-xs');
	btnFormulario.addEventListener('click', guardar);
}
function guardar(){
	if(tituloLista.value === ''){
		tituloLista.setAttribute('placeholder', 'Ingresa un titulo');
		return false;
	}
	var divGuardar = document.createElement('div');
	var contenidoTarjeta = document.createElement('input');
	var h3 = document.createElement('h3');	
	var div = document.createElement('div');
	lista.appendChild(divGuardar);
	divGuardar.setAttribute('class', 'fnd-1 col-xs-2');
	h3.innerHTML = tituloLista.value;
	divGuardar.appendChild(h3);
	divGuardar.appendChild(contenidoTarjeta);
	contenidoTarjeta.setAttribute('placeholder', 'Añadir una tarjeta');
	contenidoTarjeta.addEventListener('click', tarjetas);
	tituloLista.value = "";	
	function tarjetas(){
		var btnTarjeta = document.createElement('button');
		var divTarjeta = document.createElement('div');
		var textoTarjeta = document.createElement('textarea');
		divGuardar.replaceChild(textoTarjeta,contenidoTarjeta);
		divGuardar.appendChild(textoTarjeta);
		divGuardar.appendChild(btnTarjeta);
		btnTarjeta.setAttribute('class','btn btn-primary btn-xs');
		btnTarjeta.appendChild(document.createTextNode('Guardar'));
	}
}