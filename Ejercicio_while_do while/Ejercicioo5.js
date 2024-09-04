/*Javier Eulices Martínez Martínez*/


function sumarElementosArray(array) {
    let suma = 0;
    let i = 0;
    do {
        suma += array[i];
        i++;
    } while (i < array.length);
    return suma;
}
let array = [9, 7, 6, 3, 5, 2, 4, 12, 24];
console.log(sumarElementosArray(array)); 