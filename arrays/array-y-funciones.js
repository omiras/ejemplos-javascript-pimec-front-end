/**
 * obtenerSaldo: nombre de la función
 * movimientos: parámetro de la función. Es una copia de los valroes que nos pasan entre parentesis
 * 
 * return: palabra reservada que hace dos cosas. 1: termina inmediatamente la función . 2: Devuelve la expresión que tenga su derecha (devuelve el valor de variable saldoFinalBucle)
 */
function obtenerSaldo(movimientos) {
    let saldoFinalBucle = 0;

    for (let i = 0; i < movimientos.length; i++) {
        saldoFinalBucle = saldoFinalBucle + movimientos[i];
    }

    return saldoFinalBucle;
}

console.log(obtenerSaldo([10, -5]));
console.log(obtenerSaldo([300, -200, -100]));