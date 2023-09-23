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
    guardarStorage(tareaTexto);
    inputTarea.value = "";
  }

}

function guardarStorage(texto) {
  var datosguardados = localStorage.getItem("textos");
  var arreglo = JSON.parse(datosguardados);
  arreglo.push(texto);
  localStorage.setItem("textos", JSON.stringify(arreglo));

}

window.onload = function () {
  var datosguardados = localStorage.getItem("textos");
  if(datosguardados){
    var arreglo = JSON.parse(datosguardados);
    arreglo.forEach(function (texto){
      agregarTareaTabla(texto)
    })

  }
}

function agregarTareaTabla(texto) {
  cantidad++;
  var nuevaTarea = document.createElement("li");
  var nuevaCantidad = document.createElement("li");
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.style.display = "block";
  nuevaTarea.textContent = texto;
  nuevaCantidad.textContent = cantidad;

  listaTareas.appendChild(nuevaTarea);
  cantidades.appendChild(nuevaCantidad);
  terminado.appendChild(checkbox);

  
}



botonAgregar.addEventListener("click", agregarTarea);

inputTarea.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    agregarTarea();
  }
});
