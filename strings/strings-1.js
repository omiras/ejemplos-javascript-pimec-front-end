/**
 * Se puede definir strings de 3 formas
 */

let lenguaje = "JavaScript";

// Acceder a una posición de un string
// Usamos [] (corchetes) y dentro de ponemos el índice al que queremos acceder
// Y Los índices empiezan en el número 0 (primera posición del string)

console.log("Primera posición: ", lenguaje[2]);

// Tamaño del string
console.log("Tamaño del string: ", lenguaje.length);

// Acceder a la última posición del string
console.log("Última posición: ", lenguaje[9]); // índice manual
console.log("Última posición: ", lenguaje[lenguaje.length - 1]); // índice usando el tamaño del string
console.log("Última posición: ", lenguaje.slice(-1)); // usando slice y un índice negativo

// Quedarme con un trocito del string
let message = "Don't be sad, be happy!";
let withSubstring = message.substring(0, 3);
console.log(withSubstring); // <== Don
 
let withSlice = message.slice(14);
console.log(withSlice); // <==  be happy!
