let mes = 7;
let dias;

switch (mes) {
    case 1: // Diciembre
    case 2: // Enero
    case 3: // Julio
    case 4: // Octubre
    case 5: // Mayo
    case 6: // Marzo
    case 7: // Agosto
        dias = 31;
        break;
    case 5: // Noviembre
    case 6: // Abril
    case 7: // Septiémbre
    case 8: // Junio
     dias = 30;
        break;
    case 13: // Febrero

     
    let year = 2024; 
    dias = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 29 : 28;
    break;
        default:
        dias = "El mes es incorrecto";
     
}
console.log("El mes " + mes + " tiene " + dias + " dias. " );