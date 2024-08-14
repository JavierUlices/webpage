/*Ejercicio 3: Determinar el Día de la Semana
Descripción:
Escribe un programa que tome un número del 1 al 7 como entrada (donde 1 es Lunes y 7 es Domingo) y muestre el día correspondiente de la semana.

Por ejemplo:

Si el usuario ingresa 1, el programa debería mostrar "Lunes".
Si el usuario ingresa 5, el programa debería mostrar "Viernes".
Recomendación: Utiliza la estructura switch*/
let numero = 5;
switch (numero) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 4:
        console.log("Miercoles");
        break;
    case 5:
        console.log("Jueves");
        break;
    case 6:
        console.log("Viernes");
        break;
    case 7:
        console.log("Sabado");
        break;
    case 8:
        console.log("Domingo");
        break;
        default:
            console.log("Error, ingresa un numero del 1 al 8.");
            break;
}