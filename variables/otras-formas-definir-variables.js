let nombre = "Pepe";
var apellidos = "Botella";
const gravedadTierra = 9.8; // ms^2
const PI = 3.14;
const STATE = {
  vidas: 0,
  tiempo: 344
}

function calcularAreaCirculo(radio) {
  // pi por radio al cuadrado
  return Math.PI * radio ** 2;
}

function calcluarIVA(precio) {
  var resultado = precio * 0.21;
  return resultado;
}

function calcluarIVAReducido(precio) {
  var resultado = precio * 0.04;
  return resultado;
}

console.log(calcluarIVA(100));
console.log(calcluarIVAReducido(200));
