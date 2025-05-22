

// for (let i = 0; i < 5; i++) { 
//     console.log("Hola");
// }

let i = 0;

while (i < 5) {
  console.log("Hola");
  i++; // 0,1,2,3,4,5
}

console.log("He acabado mi trabajo en el bucle while");

// En el formulario de registro que estoy implementando, la seguridad social me pide qe introduzca mi numero de la seguridad social. Todos sabemos que dicho numero son numeros, no pude incluir letras 171243243243
// Implementa una validacion del formulario para detectar si el usuario ha puesto solo numeros en esa información
let numeroIntroducido = "124521P135453453453453453453453453454353453453";
let j = 0;
let hayError = false; // si el usuario ha metido alguna letra en el numero de la seguridad social

while (!hayError && j<numeroIntroducido.length) { // si hemos encontrado algun error && si hemos llegado al final del string
  // Comprobar si el siguiente numero es una letra
  if (!"0123456789".includes(numeroIntroducido[j])) {
    hayError = true;
  }
  j++;
}

if (hayError) {
  console.log("Revisa el número introducido");
} else {
  console.log("Número OK");
}




/**
 * Quiero printar 2 veces por pantalla un texto
 */
// variable de iteración. Te la tienes que crear y gestionarla tú
// let i = 0;

// while (i < 2) {
//   console.log(`Me encuentra en la iteración ${i + 1}`)
//   console.log("Hola! Me ejecuto");
//   console.log("Yo también!");
//   console.log(`Fin de  la iteración ${i + 1}`)

//   // incrementar la variable de iteración 
//   i = i + 1;
// }

// /**
//  * Para entrar en el curso de IronHack tenemos que cumplir con 10 condiciones
//  * 
//  * 1. Usamos un while para ir comprobando una a una cada una de estas condiciones
//  *   1.2 - residir españa
//  *   1.3 - estar trabajando
//  *   1.4 ....
//  *   1.30.....
//  * 
//  * while (i<numCondiciones && estasTrabajando) {
//  * }
//  */

