/**
 * Gatos
 */

let gato = {
  nombre: "Bigotes",
  edad: 10,
  comidasFavoritas: ["Jamon dulce del bueno", "moscas"],
  maullar: function () {
    console.log("Miau!!");
  },
  bufar: function () {
    console.log("Bfffffff!!");
  },
  cumpleGato: function () {
    /** Incrementa la edad gato */
    this.edad = this.edad + 1;
  },
  nuevaComidaFavorita: function (comida) {
    this.comidasFavoritas.push(comida);
  },
};

gato.maullar();
gato.bufar();

/**
 * Muchas veces nos interesa que los propios métodos MODIFIQUEN el objeto sobre el cual se aplican
 */
gato.cumpleGato();
gato.cumpleGato();

/**
 * Pues ahora a Bigotes le gusta el queso
 */
gato.nuevaComidaFavorita("Queso");

console.log(gato);
