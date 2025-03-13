// Podemos definir functiones  nosotros mismos.
// Aquí por ejemplo una función que muestra por consola un mensaje

/**
 * DECLARAR UNA FUNCIÓN
 *
 * Palabra reserva: function
 * Nombre de la función en camelCase, y siempre lleva ().
 * ¿Que nombre le ponemos? Un nombre que nos de información sobre lo que va a hacer
 */
function mostrarMensaje() {
  console.log("Un mensaje!");
  console.log("Otro mensaje!");
  console.log("Etc");
}

/**
 * Definimos funciones para poder utilizarlas más adelante
 *
 * - Usar una función
 * - Invocar una función
 * - Ejecutar una función
 */

mostrarMensaje();
// mostrarMensaje();
// mostrarMensaje();

/**
 * Escribir una función que dado un nombre de una persona, la salude por el terminal
 *
 * Parámetro: Entradas de la función. Van dentro del paréntesis. Les pondremos un nombre que tenga que ver con lo que representa ese paráemtro
 */

function saludar(nombre) {
  console.log("Hola " + nombre);
}

/**
 * Para usar una función parámetro, simplemente le pasamos un valor entre los paréntesis
 */

// saludar("Patata");
// console.log("He llegado aquí!");

/**
 * Vamos a definir una función con VARIOS parámetros (dos)
 * SAludar a una persona con nombre y apellido
 * Para separar los parámetros, usamos el signo de ,
 */

function saludoCompleto(nombre, apellidos) {
  console.log("Hola " + nombre + " " + apellidos);
}

// saludoCompleto("Maria", "Gómez López");
