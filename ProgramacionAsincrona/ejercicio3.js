// Javier Eulices Martínez

//Mostrar Fecha y Hora Actual Cada Segundo

//Escribe un programa que muestre la fecha y hora actual en la consola cada segundo.
function mostrarFechaYHora() {
    let fechaActual = new Date();
    let horaActual = fechaActual.getHours();
    let minutosActual = fechaActual.getMinutes();
    let segundosActual = fechaActual.getSeconds();
    console.log(`${horaActual}:${minutosActual}:${segundosActual}`
        );
        setTimeout(mostrarFechaYHora, 1000);
        }
        mostrarFechaYHora();
