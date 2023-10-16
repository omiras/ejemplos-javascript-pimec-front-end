/**
 * Edades: Tenemos un array de edades y queremos detectar si alguna de ellas es menor de edad < 18 . Con que detectemos una persona que sea menor de edad, las alarmas deben saltar y no dejaremos a etnrar al evento a toda este gente
 */

let edades = [20, 30, 40, 50, 60, 18, 56, 77, 21, 100, 55, 55];

let hayMenor = false;
let i = 0;

while (!hayMenor && i < edades.length) {
  hayMenor = edades[i] < 18;
  i++;
}

if (hayMenor) {
  console.log("Hemos detectado una persona menor de edad, no podeis entrar");
} else {
  console.log("Podeis pasar todos");
}
