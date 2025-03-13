// Iteration 3.1
let driver = "Alex";

// Creo una variable para almacenar el nuevo string
let driverUppercase = "";

for (let i = 0; i < driver.length; i++) {
    // A cada iteración de bucle, concateno una letra convertida en mayúsculas y un espacio en blanco adicional
    
    driverUppercase = driverUppercase + driver[i].toUpperCase() + " ";
}

// ¿Por qué no funciona mi código? Métodos para depurar tu código

// Consejo 1: Intentad hacer cosas pequeñitas cada vez. No intentar resolver todo el problema de golope.
// Consejo 2: Poner chivatos. Mostrar por el terminal información interesante para saber si mi código está
// haciendo lo que le espera
// Consejo 3: Usar el depurador del IDE (Visual Studio Code)
console.log("String en uppercase: ", driverUppercase);