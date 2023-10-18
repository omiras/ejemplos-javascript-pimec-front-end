/**
 * En general, estructra de datos iterables. Cómo recorrérlas, aparte del típico for y while
 */


/**
 * REcorrer un array con un for...of
 * https://www.w3schools.com/js/js_loop_forof.asp
 */

// Quiero el saldo final de estos movimientos
let movimientos = [650000, -20, 1500, -45, -30];
let saldo = 0;

for (const mov of movimientos) {
  saldo = saldo + mov;
}

console.log(saldo);
