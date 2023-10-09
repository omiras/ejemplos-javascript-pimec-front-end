/** Las variables son posiciones de memoria en la cual tu almacenar un valor. Dicho valor lo puedes consultar más adelante para tomar decisiones */
/** Elegir un viaje de renfe */

/**
 * No nos preocupamos como se entran estos datos, si del concepto de variable
 *
 * 1. Estacion de origen
 * 2. Estacion de destino
 * 3. Precio por pasajero
 * 4. Num pasajeros
 */

// let es una palabra reservada de JavaScript. Se usa para definir una nueva variable
// origen es el NOMBRE de la variable, y es totalment arbitrario. Significa, que le puedes poner cualquier nombre, pero siempre le pondrás algo que tenga que ver con la información a almacenar
let origen; // el punto y coma significa que esta línea de JavaScript acaba aqui

let destino;
let precio;
let pasajeros; // let numPasajeros

// Asignar valor a una variable
// Origen: Girona, Destino: Barcelona, precio: 13  , Numero de pasajeros: 1
origen = "Girona"; // tipo string (o cadena de texto)
destino = "Barcelona"; // tipo string
precio = 10; // tipo number o número
pasajeros = 1; // tipo number

// Eventualmente, vamos a querer consultar el valor de las variables
// console.log es un comando (realmente es una función) que viene con NodeJS. Este te permite mostrar el valor de la evaluación de una variable que pongan como parámetro

console.log(origen);

// Eventualmente vamos a querer realizar operaciones sobre las variables
// Mari Pili ha conseguido un descuento del 10% para el billete. Y lo ha puesto en el cuadro de la Web del descuento.
console.log("El precio tras aplicar el descuento es: ");
console.log(precio * 0.9);

// Imagina que quiero saber la longitud de un string (o cadena de texto)
console.log("El número de carácteres de patata es:", "patata".length); // dame el número de carácteres del string "patata"
// Quiero convertir un string a mayúsculas
console.log("Maysculas la variable origen", origen.toUpperCase());
// Quiero añadir texto a un string existente. Concatenar string
console.log("La ciudad de destino es " + destino);
