// la más vintage

// function saludar() {
//   return "Hola!!";
// }

// Guardar la función en una variable
const saludar = function () {
  return "HOLI!!!";
};

// Invocar la función
console.log(saludar());

// Utilizar una notiación que se llama función flecha o arrow function
const despedir = () => {
  return "ADEU!!!";
};

// Invocar la función
console.log(despedir());

// No puedes mezclar tipo de declaraciones de funciones
// ESTO ES ERRONEO:

// const greet = function() => {
//     return "BYE!!";
// }

// Las funciones flecha se pueden escribir en una línea. Si lo hacemos así, implícitamente retornan la expresión que le ponemos a la derecha de la flecha

// He declarado una función que guardo en una variable de nomnre benvinguda, y que DEVUELVE un string "Bon dia!". Hay un return implícito
const benvinguda = () => "Bon dia!";

console.log(benvinguda); // mostrar el valor de la variable
console.log(benvinguda()); // ejecutar la función contenido en esta variable

// Las funciones flecha también pueden tener parámetros
const soyMayorEdad = (edad) => (edad >= 18 ? "Sí" : "No");

console.log(soyMayorEdad(88));
console.log(soyMayorEdad(16));
