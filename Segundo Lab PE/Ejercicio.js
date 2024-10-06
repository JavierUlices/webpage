// Javier Eulices martínez


// Definiendo el array de notas
let notas = [8, 9, 7];
// Definiendo la función para calcular el promedio
function calcularPromedio(notas) {
// Calculando la suma de las notas
    let sumaNotas = 0;
    for (let i = 0; i < notas.length; i++) {
        sumaNotas += notas[i];
        }
// Calculando el promedio
let promedio = sumaNotas / notas.length;
// Mostrando el resultado en la consola
console.log("El promedio de las notas es: " + promedio);
}

// Llamamos la función con el array de notas
calcularPromedio(notas);

