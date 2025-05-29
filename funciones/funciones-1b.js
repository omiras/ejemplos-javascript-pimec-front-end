const comidaGato = 10;
const colageno = 5;
const pelota = 3;

function calcularIva(producto) {
    return (producto * 0.3) + producto
}

console.log("Comida Gato", calcularIva(comidaGato));
console.log("Colageno", calcularIva(colageno));
console.log("Pelota", calcularIva(pelota));
