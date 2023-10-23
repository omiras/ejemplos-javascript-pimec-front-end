function firstNonConsecutive(arr) {
  let i = 1; //Inicio de la variable del contador
  let result = null;

  while (i < arr.length && result == null) {
    // mentre no hagi arribar al fi de l'array I no hagi trobat un número no consecutiu, tinc feina
    //Recorremos el array de  números mientras se cumpla la condición

    if (arr[i] - arr[i - 1] !== 1) {
      //Comprobamos si el número actual y el número anterior no se incrementan en 1
      result = arr[i]; //Si se cumple, mostramos el número
    }
    i++;
  }

  return result; //Si al recorrer todo el array, se cumple mostramos null
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])); // 6
// console.log(firstNonConsecutive([1, 2, 3, 4])); //  null (porque todos son consecutivos)
// console.log(firstNonConsecutive([7, 8, 10])); // 10
