/**
 * Me he ido ha hacer unos análisis a ver que tal tengo el azúcar y las grasas. Tenemos que generar un aviso por cada valor que esté incorrecto
 */

let medicionAzucar = 150;
let medicionGrasas = 400;

/**
 * Tenemos que mostrar una alerta si el azucar esta por encima de 200, pero si está más bajo de 100, también lo tenemos que informar, porque es peligroso. Si todo está bien, informa al usuario
 * Tenemos que mostrar una alerta si las grasas estan por encima de 300
 */

/**
 * Necesitamos comprobar los dos parámetros. Necesitamos dos ifs independientes
 */

if (medicionAzucar < 100) {
  console.log("Tienes el azúcar muy bajito, comete un bollito");
} else if (medicionAzucar > 200) {
  console.log("El azúcar por las nubes");
} else {
  console.log("Tú azucar está OK.");
}

/** Los Ifs anteriores acaban aqui, despues del else. En cuanto ponemos un nuevo 'if' sin else, empezamos una nueva rama condicional */
if (medicionGrasas > 300) {
  console.log("Las grasas desbordadas");
}
