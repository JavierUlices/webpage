let calificacion = 80;

calificacion = Number(calificacion);

if (isNaN(calificacion) || calificacion < 0 || calificacion > 100) {
    console.log("Ingrese una calificacion correcta.");
} else if (calificacion >= 90) {
    console.log("A");
} else if (calificacion >= 80) {
    console.log("B");

} else if (calificacion >= 70) {
    console.log("C");


} else if (calificacion >= 60) {
    console.log("D");
} else {
    console.log("F");
}