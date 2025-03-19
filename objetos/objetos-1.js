/**
 * En un formulario de registro, me gustaría almacenar la información de reservar un escape room en escaperoombarcelona.com
 *
 * - dia
 * - hora
 * - nombre del escape
 * - numero participantes
 * - codigo descuento
 * - nom
 * - telefono
 * - email
 * - comentarios (me dan miedo las arañas)
 *
 */

// let registro = ["30-10-2023", "21:00", "Alien", 10];

// // Me tengo que acordar en que posición está en cada información
// console.log("Nombre del escape: ", registro[2]);

let registro = {
  dia: "30-10-2023",
  hora: "21:00",
  nomEscape: "Alien",
  numParticipantes: 10,
  caracteristicas: ["Miedo", "Sustos", "Oscuro"],
  direccion: {
    calle: "Carmen 23",
    codigoPostal: "08017",
    ciudad: "Barcelona",
  },
};

// Ey! Que al final no vamos a ser 10 participantes..vamos a ser 9 porque alguien se ha dado de baja
registro.numParticipantes = 9;
console.log(registro);


// Dime si este escape tiene la característica "Fantasia". Dame un true si la tiene, o un false si no la tiene
console.log("¿Este escape room tiene una característica de Fantasía?: ", registro.caracteristicas.includes("Fantasia"));

// // ¿Cómo se llama el escape que hemos reservado?
console.log("¿Cómo se llama el room escape?: ", registro.nomEscape);

// // Dime una carácteristica de este escape, la primera
// console.log(registro.caracteristicas[0]);

// // Llamamos nosotros y decimos que el 30 de Octubre no va bien porque no puede venir Galis. 01-11-2023
// // Para actualizar un objeto:

// registro.dia = "01-11-2023";
// console.log(registro);

// // Despues de muchos de escapes, nos han dicho que realmente este escape no es tan oscuro. Elimina esa caracteristica del escape
// registro.caracteristicas.pop();
// console.log(registro);

// // Al final nos dejan que participe una persona más, un total de 11
// // ¿Cómo actualizamos numParticipates?
// registro.numParticipantes = 11;
// console.log(registro);

// // Añadir comentarios al registro en tiempo de ejecución
// registro.comentarios = "Miedo a las arañas";
// console.log(registro);

// // borrar propiedad
// delete registro.hora;
// console.log(registro);

// // Si quiero acceder a la calle donde se encuentra el escape
// console.log(registro.direccion.calle);
