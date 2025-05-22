// Template strings: https://www.w3schools.com/js/js_string_templates.asp

let edad = 33;
let nombre = "Palomo";
let aficiones = "Fútbol";

// Aquí uso string templates para formatear el string porque es más sencillo para mi
let message =`Me llamo ${nombre} y mi edad es ${edad}. Mi mayor afición es el ${aficiones.toLowerCase()}. El año que viene cumpliré ${edad + 1} años `;

// console.log nos permite mostrar un mensaje por el terminal
console.log(message);