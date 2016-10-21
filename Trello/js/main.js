var btnPrincipal = document.getElementById('btnPrincipal');
var lista = document.getElementById('lista');
btnPrincipal.addEventListener('click', desplegar);

var texto = document.createElement('input');
var btnFormulario = document.createElement('button');
btnFormulario.setAttribute('class','btn btn-primary');

function desplegar(){
	lista.appendChild(texto);
	lista.appendChild(btnFormulario);
}
btnFormulario.addEventListener('click', guardar);
function guardar(){
	lista.innerHTML = texto.value; 
}