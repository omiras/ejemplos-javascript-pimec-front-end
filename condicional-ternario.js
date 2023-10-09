/**
 * En ocasiones, es más cómo escribir una condición boleana en una sola línea, y asignar un valor u otro a la variable
 */

let nota = 0;
let calificacion;
console.log("He realizado mi examen. Mi resultado es el siguiente:");

// if (nota < 5) {
//   // Acción A: nota es menor que 5
//   calificacion = "suspendido";
// } else {
//   // Acción B: Cualquier otro caso diferente a A (nota es mayor o igual que 5)
//   calificacion = "aprobado";
// }

calificacion = nota < 5 ? "suspendido" : "aprobado";

console.log("Estoy", calificacion);

// variable boleana que me indica si estoy aprobado o suspendido
let estoyAprobado = nota >= 5;
console.log("Estoy aprobado? ", estoyAprobado);
