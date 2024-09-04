/*Javier Eulices Martínez Martínez*/

function contarNumerosWhile(array, numero) {
    let contador = 0;
    let i = 0;
    
    while (i < array.length) {
        if (array[i] === numero) {
            contador++;
        }
        i++;
    }
    return contador;
}

let arrayNumero = [1, 2, 3, 5, 8, 3, 6, 2];
let numeroEncontrar= 5;
let resultado= contarNumerosWhile(arrayNumero, numeroEncontrar);
console.log("El numero", numeroEncontrar, "aparece", resultado, "veces en el array.");
