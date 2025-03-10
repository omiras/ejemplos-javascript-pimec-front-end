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


// Declarado las variables
let origen;
let destino;
let precioBillete;
let numeroPasajeros; // camel Case

// ¿Qué tipo de variables existen? https://lenguajejs.com/fundamentos/estructuras-de-datos/tipos-de-datos/

// Inicalizar las variables
// Soy Denisse que quiero ir de Barcelona a Paris. La renfe me dice que el billete cuesta 100 euros y vamos 2 amigas.
origen = "Barcelona";
destino = "París";
precioBillete = 100; // para asignar un valor a una variable de tipo numérico NO se ponen comillas
numeroPasajeros = 2;

// Eventualmente, vamos a querer consultar el valor de las variables
// console.log es un comando (realmente es una función) que viene con NodeJS. Este te permite mostrar el valor de la evaluación de una variable que pongan como parámetro

console.log("Origen del viaje: ", origen);

// Actualizar el valor de una variable
// ¡Se apunta una amiga al viaje, somos 3!
numeroPasajeros = 3;

console.log("Número de pasajeros: ", numeroPasajeros);

// Podemos inicializar y asignar un valor a una variable al mismo tiempo
// Denisse ha encontrado un cupón para un descuento del 10% del billete
let precioBilleteDescuento = precioBillete * 0.9; // * <-- operador de multiplicar. El punto es la forma que tenemos de definir los decimales en JavaScript


console.log("Precio billete con descuento: ", precioBilleteDescuento);

/** STRINGS */
/** Imagina que al poco de la fecha de salida de tu viaje de Renfe te llega un mensaje al móvil */
let mensajeMovil = "¡Hola! Recuerda que tienes un viaje con destino a " + destino + " en breve!";
console.log("Mensaje al móvil: ", mensajeMovil);

// Los strings pueden ser convertidos a mayúsculas
let mensajeMovilUrgente = "¡RECUERDA! Tienes un viaje con destino a " + destino.toLocaleUpperCase() + " mañana!";
console.log("Mensaje al móvil urgente: ", mensajeMovilUrgente);

// Maneras que tenemos de manipular texto https://lenguajejs.com/javascript/string/variables-texto/

// RETO: Calcula el precio final a pagar para reservar el viaje en Renfe con el precioBilleteDescuento. Muestra el precio final del billete por el terminal usando console.log 
let precioFinalBillete = precioBilleteDescuento * numeroPasajeros;
console.log("Precio final billete: ", precioFinalBillete);

