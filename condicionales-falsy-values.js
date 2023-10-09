/**
 * JavaScript considera que algunos valores, cuando se evaluan, se evaluan como false
 */

let nombre;

if (nombre) {
  console.log("Hola " + nombre);
}

/**
 * Los strings vaciós (sin contenido) los evalúa como false
 */

let apellidos = ""; // string vacío

if (apellidos) {
  console.log("Y tus apellidos son " + apellidos);
}
