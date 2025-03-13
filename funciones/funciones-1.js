/**
 * Nosotros ya hemos estado usando funciones todo el rato en JavaScript
 * ¿Cuales?
 */

console.log("Holi");

// ¿Cómo hace JavaScript para mostrarnos eso por el terminal?
// 1. Se comunica con el canal estandar de salida y muestra el texto por dicho canal

// Comos se llama la función? "log"
// Que parámetro tiene de entrada? Casi cualquier cosa, normalmente, le metemos un string, un number, etc

console.log("patata".toUpperCase());

// Función que redondea un número al entero por defecto
console.log(Math.floor(12.55));

// No solo eso. JavaScript define muchas funciones en "variables" globales para poder usar.
let numeroAleatorio = Math.random();
console.log("Número aleatorio entre 0 y 1 real: " + numeroAleatorio);

// Permite conocer el signo de un número
console.log(Math.sign(-10));
console.log(Math.sign(3));

