let mes = 2;
let dias;  
switch (mes) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
        dias = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        dias = 30;
        break;
    case 2:
        let year = 2024;
        dias = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 29 : 28;
        break;
    default:
        dias = "Mes incorrecto";
}

console.log("El mes " + mes + " tiene " + dias + " días.");