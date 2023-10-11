/**
 * Queremos pintar tantos círculso verdes como puntuación tenga el restaurante/actividad
 */

/**
 * for - palabra reservada
 * let i=0; inicialización del bucle. Indica en que valor vamos a empezar a iterar este bucle. La usaremos para saber cuando tenemos que terminar de iterar
 *  i < 10. Condicación de finalización. Cuando esta expresión NO se cumpla (se evalue como false), debemos terminar inmediatamente el bucle
 * i++. Incremento o actualización de variable de iteración.
 */
// for (let i = 0; i < 10; i++) {
//   console.log("Pintar circulo");
//   console.log("----------------");
// }

/**
 * Parametrizar el for.
 *
 * Tenemos una variable puntuación que nos indica realmente cuantas veces hay que pintar el circulo
 */

let puntuacion = 3;

for (let i = 0; i < puntuacion; i++) {
  console.log("Pintar circulo");
}

console.log("----------------");
