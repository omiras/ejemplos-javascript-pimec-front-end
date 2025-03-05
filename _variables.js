// https://lenguajejs.com/fundamentos/introduccion/conceptos-previos/

/** Las variables son posiciones de memoria en la cual tu almacenar un valor. Dicho valor lo puedes consultar más adelante para tomar decisiones */

/** Elegir un viaje de renfe */

/**
 * 1. Estacion de origen
 * 2. Estacion de destino
 * 3. Precio por pasajero
 * 4. Cantidad de pasajeros: 1,2,3...
 */

// let es una palabra reservada de JavaScript. Se usa para definir una nueva variable https://lenguajejs.com/fundamentos/estructuras-de-datos/variables-y-constantes/

// ¿Le puedo llamar de cualquier manera a una variable? Hay reestricciones: https://www.w3schools.com/js/js_variables.asp#:~:text=Names%20must%20begin%20with%20a,cannot%20be%20used%20as%20names. 

// origen es el NOMBRE de la variable, y es totalment arbitrario. Significa, que le puedes poner cualquier nombre, pero siempre le pondrás algo que tenga que ver con la información a almacenar https://lenguajejs.com/fundamentos/introduccion/convenciones-de-nombres/
let origen; // el punto y coma significa que esta línea de JavaScript acaba aqui

let destino;
let precio;
let pasajeros; // ¿Habría un nombre de variable más adecuado?


// Asignar valor a una variable
// Origen: Girona, Destino: Barcelona, precio: 13  , Numero de pasajeros: 1
origen = "Girona"; // tipo string (o cadena de texto)
destino = "Barcelona"; // tipo string
precio = 10; // tipo number o número
pasajeros = 2; // tipo number

// ¿Qué tipo de variables existen? https://lenguajejs.com/fundamentos/estructuras-de-datos/tipos-de-datos/

// Eventualmente, vamos a querer consultar el valor de las variables
// console.log es un comando (realmente es una función) que viene con NodeJS. Este te permite mostrar el valor de la evaluación de una variable que pongan como parámetro

console.log("Origen del viaje: ", origen);


// Eventualmente vamos a querer realizar operaciones sobre las variables
// Mari Pili ha conseguido un descuento del 10% para el billete. Y lo ha puesto en el cuadro de la Web del descuento.
console.log("El precio por billete tras aplicar el descuento es: ");
console.log(precio * 0.9);

// Vale, ¡pero son 2 pasajeros! ¿Cuál es el precio final a pagar en la Web de Renfe?
// TODO: calcula el precio final

// ---- tipo strings . Las operaciones que se pueden hacer son diferentes. 

// Quiero añadir texto a un string existente. Concatenar string
let mensajeMovil = "¡Hola! Recuerda que tienes un viaje con destino a " + destino + " en breve!";
console.log("Mensaje al móvil: ", mensajeMovil);

// Los strings pueden ser convertidos a mayúsculas
mensajeMovilUrgente = "¡RECUERDA! Tienes un viaje con destino a " + destino.toLocaleUpperCase() + " mañana!";
console.log("Mensaje al móvil urgente: ", mensajeMovilUrgente);

/* Hay muchas más formas de manipular las cadenas de texto https://lenguajejs.com/javascript/string/variables-texto/ */