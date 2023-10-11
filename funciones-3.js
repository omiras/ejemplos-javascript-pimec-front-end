/**
 * Vamos a crear una función que dado un precio le aplique el 21% de IVA
 */

function calcularIVA(precio) {
  return precio * 0.21;
}

let tensiometro = 15;
let cartasMagic = 19;

/**
 * Calculame el IVA de estos dos productos y me lo sumas, para saber cuanto vamos a pagar de IVA
 */
let resultado = calcularIVA(tensiometro) + calcularIVA(cartasMagic);
console.log("El IVA total es: " + resultado);
