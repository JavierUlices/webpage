 
let mes = 8;  

 
let estacion;

if (mes >= 3 && mes <= 5) {
     estacion = "Primavera";
} else if (mes >= 6 && mes <= 8) {
     estacion = "Verano";
} else if (mes >= 9 && mes <= 11) {
      estacion = "Otoño";
} else if (mes === 12 || mes === 1 || mes === 2) {
      estacion = "Invierno";
} else {
     console.log("mes incorrecto");
}
console.log("La estación del año es " + estacion);