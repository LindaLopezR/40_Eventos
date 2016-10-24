var btnPrincipal = document.getElementById('btnPrincipal');
var tituloLista = document.createElement('input');
var lista = document.getElementById('lista');
btnPrincipal.addEventListener('click', desplegar);
function desplegar(){
	var divLista = document.createElement('div');
	var btnFormulario = document.createElement('button');
	document.getElementById('inicio').replaceChild(divLista, btnPrincipal);
	lista.appendChild(divLista);
	divLista.appendChild(tituloLista);
	tituloLista.setAttribute('placeholder', 'Añadir una lista');
	divLista.appendChild(btnFormulario);
	btnFormulario.setAttribute('class','btn btn-primary btn-xs');
	btnFormulario.appendChild(document.createTextNode('Guardar'));
	btnFormulario.addEventListener('click', guardar);
}

function guardar(){
	if(tituloLista.value === ''){
		tituloLista.setAttribute('placeholder', 'Ingresa un titulo');
		return false;
	}
	var divLista = document.createElement('div');
	var contenidoTarjeta = document.createElement('textarea');
	var h3 = document.createElement('h3');	
	var div = document.createElement('div');
	lista.appendChild(divLista);
	divLista.setAttribute('class', 'fnd-1 col-xs-2');
	h3.innerHTML = tituloLista.value;
	divLista.appendChild(h3);
	divLista.appendChild(contenidoTarjeta);
	contenidoTarjeta.setAttribute('placeholder', 'Añadir una tarjeta');
	contenidoTarjeta.addEventListener('click', tarjetas);
	tituloLista.value = "";
	divLista.appendChild(div);
}
function tarjetas(){
	var btnTarjeta = document.createElement('button');
	divLista.appendChild(btnTarjeta);
	btnTarjeta.appendChild(document.createTextNode('Guardar'));
		
	// btnTarjeta.setAttribute('class', 'btn btn-primary btn-xs');
	// btnTarjeta.appendChild(document.createTextNode('Guardar'));
}


// function reemplazar(){
//         var nuevoParrafo = document.createElement('p');
//         nuevoParrafo.appendChild(document.createTextNode('...como queríamos demostrar.'));
//         var viejoParrafo = document.getElementById('ej-rCh').getElementsByTagName('p')[0];
//         document.getElementById('ej-rCh').replaceChild(nuevoParrafo,viejoParrafo);
//     }