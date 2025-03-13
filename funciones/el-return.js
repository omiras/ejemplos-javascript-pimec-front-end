/**
 * La palabra reserverda return implica que vamos a evaluar la función con el valor que le pongamos a la derecha
 *
 * La palabra return termina inmediatamente la ejecucuión de la función
 *
 */

function misterio() {
  return 1 * 100;

  console.log("Hola!!! Creeis que yo me voy a ejecutar?");
}

function firstNonConsecutive(arr) {
  let result = null;

  for (let i = 1; i < arr.length; i++) {
    //Utilizamos el bucle FOR para recorrer los numeros del array
    if (arr[i] - arr[i - 1] !== 1) {
      return arr[i];
    } else {
      return result;
    }
  }
}

// console.log(firstNonConsecutive([7, 8, 10])); // 10

/**
 * El return es fan servir com a substituts del else, sobretot en funcions petites o en funcions que volem comprbar alguna reestricció
 */

/**
 * La funció retornara "Even" si el número es parell, o "Odd" si el número es senar
 */

function isEven(num) {
  if (num % 2 == 0) {
    return "Even";
  }
  return "Odd";
}

console.log(isEven(2)); // "Even"
// console.log(isEven(1)); // "Odd"
