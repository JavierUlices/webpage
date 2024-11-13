// Jvier Eulices Martínez



//Detener un Temporizador Después de 5 Ejecuciones

//Crea un programa que muestre "Ejecutando tarea..." cada segundo, pero que se detenga automáticamente después de 5 ejecuciones.
let i = 0;
function tarea() {
  console.log("Ejecutando tarea...");
  i++;
  if (i < 5) {
    setTimeout(tarea, 1000);
  }
}
tarea();