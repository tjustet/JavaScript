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
    guardarStorage(inputTarea.value)

    listaTareas.appendChild(nuevaTarea);
    cantidades.appendChild(nuevaCantidad);
    terminado.appendChild(checkbox);
    inputTarea.value = "";
  }

}

function guardarStorage(listaTareas) {
  var storagetarea = localStorage.getItem("textos") || "[]";
  var arregloDeTextos = JSON.parse(storagetarea);
  arregloDeTextos.push(listaTareas);

  localStorage.setItem('tareasguardadas', JSON.stringify(arregloDeTextos));
}

function cargarLocalStorage() {
  var datosGuardados = localStorage.getItem("textos");
  if (datosGuardados) {
      var arregloDeTextos = JSON.parse(datosGuardados);
      arregloDeTextos.forEach(function (listaTareas) {
      agregarTareaTabla(listaTareas);
      });
  }
};

function agregarTareaTabla(inputTarea) {

    cantidad ++;
    var nuevaTarea = document.createElement("li");
    var nuevaCantidad = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.display = "block";
    nuevaTarea.textContent = inputTarea;
    nuevaCantidad.textContent = cantidad;

    listaTareas.appendChild(nuevaTarea);
    cantidades.appendChild(nuevaCantidad);
    terminado.appendChild(checkbox);
  
}


cargarLocalStorage()
botonAgregar.addEventListener("click", agregarTarea);

inputTarea.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    agregarTarea();
  }
});
