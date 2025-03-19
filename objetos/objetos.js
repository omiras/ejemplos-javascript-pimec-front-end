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
    descripción: "Bípedo aquático",
    rasgos: ["Plumas", "Pico"]
}

// Operaciones habituales: consultar una propiedad

/* Cuantas patas tiene la abeja ? */
console.log(pato.patas);

/* Dime los rasgos de la abeja */
console.log(abeja.rasgos);

/* Dime el número de rasgos que tiene la abeja */
console.log(abeja.rasgos.length);