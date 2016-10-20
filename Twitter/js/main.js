var lista = document.getElementById("lista");
var	tarea = document.getElementById("tarea");
var	btnNuevaTarea = document.getElementById("botonAgregar");
// EVENTOS
tarea.addEventListener("click", comprobar);
btnNuevaTarea.addEventListener("click", agregarTarea);
lista.addEventListener("click", eliminarTarea);
// FUNCIONES
function comprobar(){
	
};
function agregarTarea(){
	var tareaUsuario = tarea.value;
	// var nuevaTarea = document.createElement("li");
	// var enlace = document.createElement("input");
	// var contenido = document.createTextNode(tareaUsuario);
	if(tareaUsuario === ""){
		
		tarea.className = "error";
	}
	// enlace.appendChild(contenido);
	// enlace.setAttribute("type", "checkbox");
	// nuevaTarea.appendChild(enlace);
	// lista.appendChild(nuevaTarea);
};
function eliminarTarea(){
	
};
