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

/**
 * For...in
 */
for (const index in movimientos) {
  console.log("Estoy dentro del for..in: ", index);
}

/**
 * Recorrer arrays
 *
 * Una actividad muy común en programación es recorrer los arrays en busca de un elemento
 *
 * Añade un condicional if... que compruebe si, la variable "siguentePez" es "Nemo". Si es "Nemo" muestra por el terminal un mensaje: "He encontrado a Nemo!". En caso contrario, debe escribir "Este pez NO es Nemo!";
 *
 * Tu código debería escribir un total de 4 mensajes.
 */

let muchosPeces = ["Dory", "Nemo", "Shipho", "Estrella"];

for (const siguientePez of muchosPeces) {
  // Modifica SOLAMENTE a partir de aquí
  if (siguientePez == "Nemo") {
    console.log("He encontrado a Nemo");
  } else {
    console.log("Este pez NO es nemo");
  }
}
