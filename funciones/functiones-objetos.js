/**
 * Devuelve true si puedo entrar en la disco, o false en caso contrario. Si tengo 18 años o más
 */
function puedoEntrarDiscoteca(persona) {
  // corrregimos 9.59
  return persona.edad >= 18;
}

const persona1 = {
  nombre: "Ester",
  edad: 39,
};

const persona2 = {
  nombre: "Diego",
  edad: 17,
};

console.log(puedoEntrarDiscoteca(persona1)); // true
console.log(puedoEntrarDiscoteca(persona2)); // false
