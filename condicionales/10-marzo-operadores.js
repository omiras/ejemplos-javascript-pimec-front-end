// https://chatgpt.com/c/67cea2a6-24c8-8002-9068-ab652067096b

// Operador || (OR)

// Yo solamente voy a salir de casa si hace buen tiempo O llevo un paraguas (por si acaso llueve)

let haceBuenTiempo = false;
let tengoParaguas = false;

if (haceBuenTiempo || tengoParaguas) {
    console.log("Salgo de casa 🎉");
} else {
    console.log("Me quedo en casa ☔");
}

// Operador lógico && (AND)

// Solamente puedo ir al cine si tengo dinero Y quedan entradas

let tengoDinero = true;
let hayEntradas = true;

if (tengoDinero && hayEntradas) {
    console.log("Voy al cine 🎬");
} else {
    console.log("No puedo ir al cine 😢");
}

// Operador lógico && (AND)
// Solamente puedes iniciar sesión si tu usuario Y tu contraseña son validos


// Operador lógico ! (NOT)

// Si NO tengo comida casa, entonces voy a pedir comida a domicilio

let tengoComidaEnCasa = false;

if (!tengoComidaEnCasa) {
    console.log("Pido comida a domicilio 🍔");
} else {
    console.log("Cocino en casa 🍳");
}



