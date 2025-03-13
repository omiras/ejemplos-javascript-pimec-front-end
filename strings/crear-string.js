/**
 * Dada una palabra, escribe la misma palabra pero eliminando las vocales
 */

let nombre = "Alejandro";

// variable para acumular el resultado. La inicializamos como un valor vacío
let resultado = ""; // string vacío

// recorrer el string nombre e ir acumulando en la variable resultado solamente las letras que NO son vocales
for (let i = 0; i < nombre.length; i++) {
    // Si la letra que estoy recorriendo en esta iteración no es ni a ni e ni i ni o ni u, la concateno con el resultado final
    if (!"aeiou".includes(nombre[i])) {
        resultado = resultado + nombre[i];
    }
}

console.log(resultado);