// Programa que nos va a dar una clasificación de la nota en función de un valor entero

let nota = 1;
let calificacion;
console.log("He realizado mi examen.");

// Condición
if (nota < 5) {
  calificacion = "Insuficiente";
} else if (nota < 6) { // si no...si...
  calificacion = "Suficiente";
} else if (nota < 8) {
  calificacion = "Bien";
} else if (nota <= 9) {
  calificacion = "Notable";
} else { // No le ponemos el "if"
  calificacion = "Sobresaliente";
}

console.log("He obtenido un", calificacion);
