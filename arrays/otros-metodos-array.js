const fishes = ["Burbujitas", "Nemo", "Escamitas", "Dory", "Estrellita"];

// forEach de fishes
// fishes.forEach((f) => console.log(f));

// Existe el pez "Nemo" en este array ?

// A la derecha de la flecha tenemos que poner una expresión boleana
// Si la expresión de la derecha de flecha se evalua como true, todo el método .some se evaluará como true
console.log(
  "Existe Nemo en este array?",
  fishes.some((f) => f === "Nemo")
);

console.log(
  "Existe Patitas en este array?",
  fishes.some((f) => f === "Patitas")
);

console.log(
  "Existe algún pez que tenga 4 carácteres o menos?",
  fishes.some((f) => f.length <= 4)
);

// Método de array find
// El método de array find va a devolver el PRIMER elemento del array que cumpla con la condición de la derecha de flecha
const nemoFish = fishes.find((f) => f.length <= 4);
console.log("Dame el primer pez que tenga 4 carácteres o menos: ", nemoFish);

// Método de array filter
// Nos sirve para filtrar un array. Nos quedaremos con todos los elementos que cumplan la condición de la derecha de la flecha
// Dame todos los peces que empiezan por la letra 'E'
const allFishesStartE = fishes.filter((fish) => fish[0] == "E");
console.log("Todos los peces que empiezan por la letra E: ", allFishesStartE);
console.log("El array de peces no ha cambiad!!", fishes);

// Método de array map
// Sirve para TRANSFORMAR un array en otro
// Convierte el array de peces a otro array donde en cada posición, veamos el número de carácteres de cada pez
const lengthFishes = fishes.map((f) => f.length);
console.log(
  "Dame el tamaño de cada uno de los elementos del array: ",
  lengthFishes
);
