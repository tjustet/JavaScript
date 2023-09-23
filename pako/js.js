// Función para agregar texto a la tabla y guardar en localStorage
function agregarTexto() {
    // Obtener el texto ingresado por el usuario
    var texto = document.getElementById("inputTexto").value;

    // Validar si el texto no está vacío
    if (texto.trim() !== "") {
        // Crear una nueva fila en la tabla
        var tabla = document.getElementById("miTabla");
        var tbody = tabla.getElementsByTagName("tbody")[0];
        var newRow = tbody.insertRow();

        // Agregar el texto como una celda en la nueva fila
        var cell = newRow.insertCell(0);
        cell.innerHTML = texto;

        // Guardar el texto en localStorage
        guardarEnLocalStorage(texto);

        // Limpiar el input
        document.getElementById("inputTexto").value = "";
    }
}

// Función para guardar datos en localStorage
function guardarEnLocalStorage(texto) {
    // Obtener los datos existentes de localStorage (si los hay)
    var datosGuardados = localStorage.getItem("textos") || "[]";

    // Convertir los datos a un arreglo JavaScript
    var arregloDeTextos = JSON.parse(datosGuardados);

    // Agregar el nuevo texto al arreglo
    arregloDeTextos.push(texto);

    // Convertir el arreglo de nuevo a formato JSON y guardar en localStorage
    localStorage.setItem("textos", JSON.stringify(arregloDeTextos));
}

// Cargar los datos almacenados en localStorage al cargar la página (si los hay)
window.onload = function () {
    var datosGuardados = localStorage.getItem("textos");
    if (datosGuardados) {
        var arregloDeTextos = JSON.parse(datosGuardados);
        arregloDeTextos.forEach(function (texto) {
            agregarTextoALaTabla(texto);
        });
    }
};

// Función para agregar un texto a la tabla
function agregarTextoALaTabla(texto) {
    var tabla = document.getElementById("miTabla");
    var tbody = tabla.getElementsByTagName("tbody")[0];
    var newRow = tbody.insertRow();

    var cell = newRow.insertCell(0);
    cell.innerHTML = texto;
}
