
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var cantidadarray = document.getElementById("cantidadarray");
var existearray = document.getElementById("existearray");
var agregararray = document.getElementById("agregararray");
var eliminararray = document.getElementById("eliminararray");
var eliminarinputarray = parseInt(document.getElementById('numeroarray').value);
var inputarray = document.getElementById("numeroarray");
var parray = document.getElementById("parray");

/* muestra el contenido del array */
function mostrararray() {
  var numero = 0;
  while(parray.firstChild) parray.removeChild(parray.firstChild);
  for (var i = 0; i < array.length; i++) {
    var num = document.createElement("p");
    num.textContent = array[i];
    parray.appendChild(num);
  }
}
cantidadarray.addEventListener("click", mostrararray);

/* agrega un nuevo elemento al aray */
function agregarNumArray() {
  var numarray = inputarray.value;
  if (numarray.trim() != '') {
    array.push(numarray);
  }
}
agregararray.addEventListener("click", agregarNumArray);

/* se fija si tiene el valor o no */

function existeray(){
existe = array.includes(inputarray.value);
while(parray.firstChild) parray.removeChild(parray.firstChild);
if (existe == true) {
  var exis = document.createElement("p");
  exis.textContent = "Si existe el contenido: " + parray;
  parray.appendChild(exis);
} else {
  var exis = document.createElement("p");
  exis.textContent = "No existe el contenido: " + parray;
  parray.appendChild(exis);
}
}
existearray.addEventListener("click", existeray); 

/* elimina el numero seleccionado */

function eliminar(){
var indice = array.indexOf(eliminarinputarray);
console.log(indice);
if (indice == -1) {
  array.splice(indice, 1);  
} else {
  console.log('aaa')
}

}
eliminararray.addEventListener("click", eliminar); 

