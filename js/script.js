// Definir los catetos
let catetoA = 3;
let catetoB = 4;

// Calcular la hipotenusa usando Math.sqrt y Math.pow
let hipotenusa = Math.sqrt(Math.pow(catetoA, 2) + Math.pow(catetoB, 2));

// Mostrar el resultado con dos decimales en consola usando Template String
console.log(`La hipotenusa del triángulo con catetos correspondientes de ${catetoA} y ${catetoB} es: ${hipotenusa.toFixed(2)}`);

