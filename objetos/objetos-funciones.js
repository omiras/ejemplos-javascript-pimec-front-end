/**
 * Queremos crear una función que recibe una objeto que representa una persona y devuelve el número de carácteres de dicha persona
 */

function getNameLength(person) {
    // 1. Acceder a la propiedad del objeto person que contiene el nombre

    // 2. Devolver el número de carácteres de dicho string
    return person.nombre.length;
}






const persona1 = {
    nombre: "Denisse",
    edad: 26
}

const persona2 = {
    nombre: "Katya",
    edad: 26
}

console.log(getNameLength({nombre: "Christian", edad: 26}));