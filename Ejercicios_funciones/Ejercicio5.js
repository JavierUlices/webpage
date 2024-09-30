// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario//
// Javier Eulices Martínez Martínez
function esPrimo(num) {
    if (num <= 1) {
        return false;
        }
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
const numeros = [4,9,6,5,2];
numeros.forEach(num => console.log(`${num} es primo: ${esPrimo(num)}`));