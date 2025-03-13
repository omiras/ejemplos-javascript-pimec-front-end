/**
 * Vamos a crear una función que dado un precio le aplique el 21% de IVA
 */

//
function calcularIVA(precio) {
  let IVA = precio * 0.21; 
  return IVA;
}

let precioOrdenador = 1000;

/**
 * Dame el precio total del ordenador con el iva ya incluido
*/
let precioTotalOrdenador = calcularIVA(precioOrdenador) + precioOrdenador;
console.log("Precio total ordenador: ", precioTotalOrdenador);


