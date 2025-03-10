// ¿Cómo comparar si un número está entre un rango y otro?

let numero = 5;

// if (1 <= numero <= 5 )

if (numero >= 1 && numero <= 5) {
  console.log("El número está entre 1 y 5");
}

// trimestre
let mes = 4;
let mensaje;

if (mes >= 1 && mes <= 3) {
  mensaje = "Estamos en el primer trimestre";
} else if (mes >= 4 && mes <= 6) {
  mensaje = "Estamos en el segundo trimestre";
}

// ifs anidados

// Si la maquina esta activa, puedo trabajar (calcular el mensaje para el score)
// Si no, simplemente escribir un mensaje que encienda la maquina

/**
 * Si estoy dormido, me tengo que despertar
 * Si estoy despierto y son las 9, desayuno
 * Si estoy despiert y son las 23h me acuesto
 */

let estoyDespierto = false;
let hora = 9;

if (!estoyDespierto) {
  console.log("Me tengo que despertar");
} else {
  // Que pasa cuando estoy despierto?
  if (hora == 9) {
    console.log("Desayuno");
  } else if (hora == 23) {
    console.log("Me acuesto");
  }
}
