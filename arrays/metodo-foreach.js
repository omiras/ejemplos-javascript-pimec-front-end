const movements = [1000000, -50000, 30000];

// los métodos (función) de array SIEMPRE se aplican sobre un array
// el método forEach ejecuta una función (llamada función de callback) para cada elemento del array. Dicho de otro modo, nos pide una función como parámetro (NO EJECUTARA!)

// La función de callback va a ser ejecutada tantas veces como elementos hay en el array.
// Como hay 3 elementos en el array, la función va a ser ejecutada 3 veces
// La 'm' es cada uno de los elementos del array
function showMovement(m) {
  console.log(m);
}

// movements.forEach(showMovement);

// Que sentido tiene esto? Hemos comentado que muchas veces queremos recorrer los array para hacer algun tipo de operación. Por ejemplo, usemos el forEach para calcular el saldo total de estos movimientos bancarios
let totalMoney = 0;

// movements.forEach(function (m) {
//   console.log("EStoy en el otro foreach: ", m);
//   totalMoney = totalMoney + m;
// });

// console.log("Saldo final: ", totalMoney);

// Otra forma alternativa muy usada es utilizar la función flecha
// Exactamente lo mismo que el método anterior

movements.forEach((m) => {
  console.log("EStoy en el otro foreach: ", m);
  totalMoney = totalMoney + m;
});

console.log("Saldo final: ", totalMoney);
