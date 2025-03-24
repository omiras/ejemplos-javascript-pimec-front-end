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


