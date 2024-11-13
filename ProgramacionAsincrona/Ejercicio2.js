// javier Eulices Martínez

//Temporizador de Cuenta Regresiva

//Crea un temporizador que haga una cuenta regresiva de 5 a 0, mostrando cada número en la consola cada segundo. Cuando llegue a 0, debe mostrar el mensaje "¡Tiempo terminado!" y detenerse.
let i = 5;
function cuentaRegresiva() {
  console.log(i);
  i--;
  if (i >= 0) {
    setTimeout(cuentaRegresiva, 1000);
  } else {
    console.log("¡Tiempo terminado!");
  }
}
cuentaRegresiva();
