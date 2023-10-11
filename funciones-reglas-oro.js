/**
 * 1. Pon un nombre a la función y a los parámetros que representen lo que hacen y lo que son
 * 2. console.log != return. Los console.log solo los usamos para informar al usuario o ver nosotros el valor de una variable como programadores
 * 3. Las funciones son cajas negras (con excepciones que veremos en el futuro)
 */

/**
 * Que significa que una función es una caja negra?
 *
 * 1. Una función debería capaz de hacer el trabajo que tiene que hacer con los parámetros de entrada.
 * 2. Una función no denería consultar variables que hay fuera de ella (expceciones veremos la semana que viene)
 * 3. Des de fuera de una función, NO PODEMOS usar las varibles que se definen DENTRO de una función
 */

/**
 * Funcion para calcular el IVA de un producto. El IVA te lo vamos a pasar como parámetro también
 */

function calcularIVA(precio, IVA) {
  let resultado = precio * (IVA / 100);
  return resultado;
}

let cartasMagic = 19;
let ivaCartas = 24; // 24% de IVA
let zanahorias = 2;
let ivaZanahorias = 4; // 4% de IVA

console.log(calcularIVA(cartasMagic, ivaCartas));
console.log(calcularIVA(zanahorias, ivaZanahorias));
