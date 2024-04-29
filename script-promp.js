// Definir la variable para almacenar el total de gastos
let totalGastos = 0;

// Definir el número de días en una semana
const diasSemana = 7;

// Bucle para iterar sobre cada día de la semana
for (let dia = 1; dia <= diasSemana; dia++) {
    // Solicitar al usuario que ingrese los gastos del día
    let gastosDia = parseFloat(prompt(`Ingrese los gastos del día ${dia}:`));

    // Agregar los gastos del día al total de gastos
    totalGastos += gastosDia;
}

// Mostrar el total de gastos al final de la semana
console.log(`El total de gastos de la semana es: $${totalGastos.toFixed(2)}`);