// Javier Eulices Martínez Martínez

let numeros = [5, 9, 10, 12,];
let suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
let media = suma / numeros.length;
console.log(media);
