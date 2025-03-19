/**
 * En este juego vemos que podemos definir las caracteristicas de cada uno de los animales: https://blockly.games/puzzle?lang=es
 * 
 * Los animales tinen
 * 
 * 1. Número de patas
 * 2. Foto (descripcion)
 * 3. Un conjunto de rasgos
 */

let patasCaracol = 0;
let rasgosCaracol = ["Baba", "Caparazón"];
let descripcionCaracol = "Tiene una concha y es tiene un cuerpo gelatinoso.";

// Objeto abeja

const abeja = {
    patas: 6,  // propiedad:valor
    descripcion: "Bicho peludito pequeñito que recolecta polen",
    rasgos: ["Miel", "Aguijón"]
}

const pato = {
    patas: 2,
    descripcion: "Bípedo aquático",
    rasgos: ["Plumas", "Pico"]
}

// Operaciones habituales: consultar una propiedad

/* Cuantas patas tiene la abeja ? */
// console.log(pato.patas);

/* Dime los rasgos de la abeja */
// console.log(abeja.rasgos);

/* Dime el número de rasgos que tiene la abeja */
// console.log(abeja.rasgos.length);

// Podemos tener arrays de objetos
const animales = [abeja, pato];
// console.log("Array de animales: ", animales);

// Itera este array y muestrame por consola la descripción de cada animal. 
for (let i=0; i<animales.length; i++) {
    console.log(animales[i].descripcion);
}

let numPatas = 0;
// Crear otro bucle para sumar todas las patas de los animales del array de animales
for (let i=0; i<animales.length; i++) {
    numPatas = numPatas + animales[i].patas;
}

console.log("La suma de las patas de todos los animales es: ", numPatas);