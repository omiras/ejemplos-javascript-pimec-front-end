/**
 * Strings son un tipo de dato iterable
 * Ultimo ejercicio de variables del 5 de octubre hay ejemplos
 */

let lenguaje = "JavaScript";
console.log(
  "quiero acceder a la primera letra del string almacenado en la variable lenguaje: ",
  lenguaje[0]
);

console.log("Quedarme con un trocito del string: ", lenguaje.substring(0, 4));

// Recorrer un string porque es un dato iterable
lenguaje = "JavaScript";
for (let i = 0; i < lenguaje.length; i++) {
  console.log(lenguaje[i]);
}
