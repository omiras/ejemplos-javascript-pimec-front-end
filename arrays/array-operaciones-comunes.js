const movimientos = [650000, 20, 1500, -45, -30, -300, -99, 500, -200];

// Añadir o eliminar elementos
movimientos.push(100);
console.log("🚀 ~ movimientos:", movimientos);
console.log("El segundo elemento de este array: ", movimientos[1]);

// Eliminar el último elemento , podemos usar el método .pop

movimientos.pop();
movimientos.pop();
movimientos.pop();
movimientos.pop();
console.log("🚀 ~ movimientos:", movimientos);

// Con esto eliminamos los últimos 4 elementos del array

// Imagina que esgtamos en un formulario de registro y nos piden aceptar todas las condiciones de la ley de protección de datos. Guarda todos los "checks" que han hecho los alumno en cuanto a la ley de proteccion de datos para hacer el curso

const valores = [true, true, true, false, true];

// Si alguno de los valores es "false"; NO permitas continuar con el formulario

/** Guarda información de una persona. El penultimo elemento debe ser un boleano indicando si la persona está trabajando en activo. el último elemento será también un array con todos los cursos del CONSORCI que esta persona ha hecho   */
const infoPersona = [42, "Juan", "1982-04-01", "Calle de Patata 7", true, ["Excel Avanzado", "Kahoot! Gamificación en el aula."] ];
console.log(infoPersona);
