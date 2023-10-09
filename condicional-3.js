let nota = 10;
console.log("He realizado mi examen.");

// Condición
if (nota < 5) {
  calificacion = "Insuficiente";
} else if (nota < 6) {
  calificación = "Suficiente";
} else if (nota < 8) {
  calificacion = "Bien";
} else if (nota <= 9) {
  calificacion = "Notable";
} else { // No le ponemos el "if"
  calificacion = "Sobresaliente";
}

console.log("He obtenido un", calificacion);
