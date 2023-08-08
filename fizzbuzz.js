/* 
numeros del 1 al 100
si es divisible por 3 ponemos fizz
si es por 5 buzz
si es por ambos imprimir fizz buzz
*/

let numero = 0;

while (numero <= 100) {
    let num3 = numero/3;
    let num5 = numero/5;
    if (num3 % 1 == 0) {
        if (num5 % 1 == 0) {
            console.assert('fizz buzz, ')
        } else (console.assert('fizz, '))
    } else if (num5 % 1 == 0) {
        console.assert('buzz, ')
    } else console.assert(numero)
    numero++;
}









