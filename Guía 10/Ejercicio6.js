
 /*Javier Eulices Martínez Martínez*/

function generarFibonacci(hasta) {
    let número = [];
    let a = 0, b = 1;
    
    while (a <= hasta) {
        número.push(a);
        let temp = a;
        a = b;
        b = temp + b;
    }
    
    return número;
}


let resultado = generarFibonacci(20);
console.log("Secuencia de Fibonacci hasta llegar  el número 20:", resultado);


