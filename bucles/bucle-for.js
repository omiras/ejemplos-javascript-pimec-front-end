
/** Estrcutra básica:  */

// Escribe la palabra "hola" 5 veces por el terminal
// Usar un bucle para repetir un código un número determinado de veces
// for-->palabara reservada para indicar que empieza un bucle
// Inicialización. Tipicamente le ponemos de nombre i 
// La parte central del for se llama condición de finalización. Decimos que mientras el valor de i sea menor a 5, seguiremos dentro del bucle 
// i++ -> incremento. Indica de que forma tenemos que progresar en el bucle. En este caso, sumamos 1 al valor de la variable i.

for (let i = 0; i < 100; i++) { 
    console.log("Hola");
}

// console.log("He acabado el trabajo dentro del bucle");




/**
 * for - palabra reservada
 * let i=0; inicialización del bucle. Indica en que valor vamos a empezar a iterar este bucle. La usaremos para saber cuando tenemos que terminar de iterar
 *  i < 4. Condicación de finalización. Cuando esta expresión NO se cumpla (se evalue como false), debemos terminar inmediatamente el bucle
 * i= i +1 Incremento o actualización de variable de iteración.
 */

// for (let i = 0; i < 2; i = i + 1) {
//     console.log(`Me encuentra en la iteración ${i + 1}`)

//     console.log("Hola! Me ejecuto");
//     console.log("Yo también!");
//     console.log(`Fin de  la iteración ${i + 1}`)

// }

// console.log("----Yo me ejecutaré después de que el bucle for se ejecute dos veces---");


// /**
//  * Conceptos:
//  *
//  * 1. Bucle
//  * 2. Iteración. El bucle anterior realiza 2 iteraciones. O se ejecuta dos veces. También usamos el concepto iteración para referinos al número de repetición
//  * 3. Cuerpo del bucle. Todas las instrucciones que se van a ejecutar en cada iteración. Es definido por las llaves {}
//  */


// /**
//  * Parametrizar el for.
//  *
//  * Estamos en una taquilla de cine. Nos piden 5 entradas. Debemos ejecutar la misma operación (imprimir entrada) 2 veces
//  */

let numEntradas = 2;

// for (let i = 0; i < numEntradas; i++) {
//     console.log("Imprimir entrada.");
// }

// /**
//  * Strings son un tipo de dato iterable. Recorrer un string del principio a fin
//  */

let ecuacionUsuario = "19+28=47";

for (let i=0; i<ecuacionUsuario.length; i++) {
    console.log(`Comprobar el carácter ${ecuacionUsuario[i]}`);
}
