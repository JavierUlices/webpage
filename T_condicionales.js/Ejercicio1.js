/*Ejercicio 1: Verificar Edad para Ingresar a una Discoteca
Descripción:
Escribe un programa que solicite al usuario su edad y luego determine si puede ingresar a una discoteca. Las condiciones son las siguientes:

Si el usuario tiene 18 años o más, mostrar el mensaje: "Puedes ingresar a la discoteca."
Si el usuario tiene menos de 18 años, mostrar el mensaje: "No puedes ingresar a la discoteca."
Si el usuario ingresa un valor no numérico o negativo, mostrar el mensaje: "Por favor, ingresa una edad válida."
Recomendación: Utiliza la estructura if, else if, else.*/


let edad = 18;
let nombre = "Juan";
if (isNaN(edad) || edad < 0) {
    console.log("La edad no es válida"); 
    

} else if (edad >= 18) {
    console.log("Ya puedes ingresar a la discoteca.");
    } else {
        console.log("No puedes ingresar a la discoteca.");
}
