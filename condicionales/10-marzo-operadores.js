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

// Operador OR (EOI)
let B1Aprobado = false;
let pruebaNivelB2 = 8; // nota mínima para entrar

if (B1Aprobado || pruebaNivelB2>=8) {
    console.log("Puedo empezar B2");
} else {
    console.log("Deber hacer antes el B1");
}


// Operador lógico && (AND)

// Solamente puedo ir al cine si tengo dinero Y quedan entradas

let tengoDinero = false;
let hayEntradas = true;

if (tengoDinero && hayEntradas) {
    console.log("Voy al cine 🎬");
} else {
    console.log("No puedo ir al cine 😢");
}

// Operador lógico && (AND)
// Solamente puedes iniciar sesión si tu usuario Y tu contraseña son validos


// Operador lógico ! (NOT)

// Si NO tengo comida en casa, entonces voy a pedir comida a domicilio

let tengoComidaEnCasa = false;

if (!tengoComidaEnCasa) {
    console.log("Pido comida a domicilio 🍔");
} else {
    console.log("Cocino en casa 🍳");
}

// Si hay comida en casa, no pido a domicilio
let hayComidaEnCasa = false;

if (hayComidaEnCasa) {
    console.log("como en casa");
} else {
    console.log("pido a domicilio");
}



