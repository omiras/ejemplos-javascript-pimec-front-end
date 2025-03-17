/**
 * Nos piden implementar un programa que nos permita almacenar las retiradas de dinero e ingresos de tu cuenta bancaria
 */

let saldo = 650000;
let retirada1 = 20;
let ingresos1 = 1500;
let retirada2 = 45;
let retirada3 = 30;

// ¿Cuál es tu saldo?

let saldoFinal = saldo - retirada1 + ingresos1 - retirada2 - retirada3;
console.log("Mi saldo total es: ", saldoFinal);

let gastosAutonomo = 300;
let gastosDeclaracion = 99;

saldoFinal = saldoFinal - gastosAutonomo;
saldoFinal = saldoFinal - gastosDeclaracion;

console.log("Mi saldo total es: ", saldoFinal);

// Podemos utilizar un array  (arreglo) (vector) para agrupar diferentes valores que, generalmente, estan relacionados entre si []->corchetes 
let movimientos = [650000, 20, 1500, -45, -30, -300, -99, 500, -200];

// Los arrays son tipos de datos ITERABLES (al igual que los strings). 
console.log("Primer movimiento: ", movimientos[0]);

// Obtener el número de movimientos
console.log("Número de movimientos: ", movimientos.length);

// Calcular el saldo
let saldoFinalBucle = 0;

for (let i=0; i<movimientos.length; i++) {
    saldoFinalBucle = saldoFinalBucle + movimientos[i];
}

console.log("Saldo final del bucle: ", saldoFinalBucle);

