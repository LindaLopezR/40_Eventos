var lista = document.getElementById("lista");
var	texto = document.getElementById("tarea");
var	btnTarea = document.getElementById("botonAgregar");
btnTarea.addEventListener("click", agregarTarea);
function agregarTarea(){
	if(texto.value===""){
		texto.setAttribute('placeholder', 'Ingresa una tarea válida');
		return false;
	}
	var checkbox = document.createElement('input');
	checkbox.type = "checkbox";
	var nuevaTarea = document.createElement('li');
	nuevaTarea.setAttribute('class', 'list-group-item fondoGris');
	var enlace = document.createTextNode(texto.value);
	var icono = document.createElement('i');
	icono.setAttribute('class', 'glyphicon glyphicon-trash text-left');
	lista.appendChild(nuevaTarea);
	nuevaTarea.appendChild(checkbox);
	nuevaTarea.appendChild(enlace);
	nuevaTarea.appendChild(icono);
	texto.value = "";
	nuevaTarea.addEventListener('click', eliminarTarea);
};
function eliminarTarea(){
	this.parentNode.removeChild(this);
}