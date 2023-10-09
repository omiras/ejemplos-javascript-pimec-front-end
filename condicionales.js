/**
 * Las estrcturas condicionales en JS nos permiten tomar decisiones. Nos permiten ejecutar bloques de código de manera condicional
 */

/**
 * Si la palabra introducida por el usuario en www.palabradeldia.com es correcta, informa al usuario que el juego ha acabado y ha ganado. En caso contrario, informa al usuario que puede seguir jugando
 */

let palabraCorrecta = "razon";
let palabraProbada = "raton";

/**
 * Si la expresión se cumple...
 * Si la expresión es cierta....
 * Si el valor de palabraCorrecta es igual al valor de palabraProbada...
 */
if (palabraCorrecta == palabraProbada) {
  console.log("Has acertado la palabra correcta. Fin de juego");
  console.log("Efectivamente, la palabra era " + palabraCorrecta);
} else {
/**
 * En caso contrario....ejecuta esto
 */
  console.log("Lástima! Te has equivocado! Sigue jugando!");
}
