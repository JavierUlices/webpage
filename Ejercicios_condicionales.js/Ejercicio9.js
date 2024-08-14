let mes = 9;
let estacion;

switch (mes) {
    case 1:
    case 2:
    case 3:
        estacion = "otoño";
        break;
    case 4:
    case 5:
    case 6:
        estacion = "primavera";
        break;
    case 7:
    case 8:
    case 9:
        estacion = "verano";
        break;
    case 10:
    case 1:
    case 0:
        estacion = invierno;
    default:
        estacion = "mes  incorrecta";
     
}
console.log("La estacion del año es " + estacion);