/**
 * Nos piden implementar un programa que nos permita almacenar las retiradas de dinero e ingresos de tu cuenta bancaria
 */

// let saldo = 650000;
// let retirada1 = 20;
// let ingresos1 = 1500;
// let retirada2 = 45;
// let retirada3 = 30;

// Que rollo almacenar todo esto en variables diferentes. Además, imagínate que tienens que seguir poniendo más y mas retiradas e ingresos

let movimientos = [650000, -20, 1500, -45, -30];

// Los arrays son muy versátiles. Una de las cosas que podemos hacer , es recorrerlo. Se recorren igual que un string. Es un tipo de dato iterable

// for (let i = 0; i < movimientos.length; i++) {
//   console.log(movimientos[i]);
// }

function calcSaldo(movimientos) {
  // Podria calcular mi saldo actual
  let saldo = 0;

  for (let i = 0; i < movimientos.length; i++) {
    saldo = saldo + movimientos[i];
  }

  return saldo;
}

console.log("Saldo total: ", calcSaldo(movimientos));

console.log(
  "¿Cuál fue el primer movimiento que hice en mi cuenta bancaria?",
  movimientos[0]
);

// Eventualmente, va a haber más movimientos en mi cuenta bancaria.
// PAgar la reparación de la caldera 202 €

movimientos.push(-202); // push es una función, que toma por parámetro el valor que le queremos poner al array al final

console.log(
  " Movimientos bancarios despues de pagar la caldera: ",
  movimientos
);

console.log("Saldo total: ", calcSaldo(movimientos));

// Quiero obtener todos los movimientos bancarios EXCEPTO el primero
console.log("Movimientos sin el ingreso inicial: ", movimientos.slice(1));

// Quiero eliminar el último movimiento de mi array . Para ello usamos el método pop
movimientos.pop(); // modifica la variable movimientos
console.log("Eliminar el ultimo movimiento: ", movimientos);

// Quiero eliminar el 1500
movimientos.splice(2, 1); // modifica el array original
console.log("Eliminamos el 1500: ", movimientos);

// He activado una alerta en mi BancSabadell para detectar si hay retiradas superiores a 1000 €
movimientos.push(-2000);
movimientos.push(-111111);
console.log("--", movimientos);
/**
 * Algoritmo típico: Recorrer un array en busca de algo
 */

let movimientoEncontrado;
for (let i = 0; i < movimientos.length; i++) {
  if (movimientos[i] < -1000) {
    movimientoEncontrado = movimientos[i];
  }
}

console.log(
  "hay algun movimiento que hayamos retirado más de 1000€?: ",
  movimientoEncontrado
);


