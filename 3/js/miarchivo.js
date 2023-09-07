var inputTarea = document.getElementById("tareas");
var botonAgregar = document.getElementById("btnagregar");
var listaTareas = document.getElementById("listaTareas");
var cantidades = document.getElementById("cantidades");
var cantidad = 0
var terminado = document.getElementById("terminado");

function agregarTarea() {
  var tareaTexto = inputTarea.value;
  if (tareaTexto.trim() !== "") {
    cantidad ++;
    var nuevaTarea = document.createElement("li");
    var nuevaCantidad = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.display = "block";
    nuevaTarea.textContent = tareaTexto;
    nuevaCantidad.textContent = cantidad;

    listaTareas.appendChild(nuevaTarea);
    cantidades.appendChild(nuevaCantidad);
    terminado.appendChild(checkbox);
    inputTarea.value = "";
  }
}

botonAgregar.addEventListener("click", agregarTarea);

inputTarea.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    agregarTarea();
  }
});
