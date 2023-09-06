const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
alert(array) 
 
// recorre todo el array 
for (var i = 0; i < array.length; i++) console.log(array[i]) 
 
var agregarini = prompt("Agrege un numero al inicio: ") 
var agregarfin = prompt("Agrege un numero al final: ") 
 
array.push(agregarfin) // agrega al final 
array.unshift(agregarini) // agrega al inicio 
  
for (var i = 0; i < array.length; i++) console.log("Nuevos numeros: " + array[i]) 
 
var eliminar = prompt("Elimine el primer (i) o ultimo (f) elemento: ") 
 
if (eliminar == "i"){ 
    array.shift(); 
} else if (eliminar == "f"){ 
    array.pop(); 
} 
 
for (var i = 0; i < array.length; i++) console.log("Eliminados: " + array[i])  
 
var separacion = prompt("Elige como separar los numeros (ejem: , ; *): ") 
console.log(array.join(separacion)); 
 
const buscar = prompt("Existe este numero?: ") 
 
if (array.indexOf(buscar) !== -1) { 
    console.log("Si existe este numero: " + buscar); 
} else console.log("No existe este numero: " + buscar); 
 

