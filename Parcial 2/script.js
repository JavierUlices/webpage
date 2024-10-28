// Javier Eulices Martínez Martínez
function cambiarTexto() {
    document.getElementById("titulo").textContent = "Hola Mundo con JavaScript";
}
function cambiarColor() {
    document.getElementById("titulo").style.color = "blue";
}


function cambiarAlineacion() {
    document.getElementById("titulo").style.textAlign = "center";
}
function crearTexto() {
    if (!document.getElementById("nuevoTexto")) {
        const nuevoTexto = document.createElement("p");
        nuevoTexto.id = "nuevoTexto";
        nuevoTexto.textContent = "JavaScript es un lenguaje de alto nivel que nos permite dar forma y estiloa una página wed";
        document.body.appendChild(nuevoTexto);
    }
}
function borrarTexto() {
    const nuevoTexto = document.getElementById("nuevoTexto");
    if (nuevoTexto) {
        document.body.removeChild(nuevoTexto);
    }
}
document.getElementById("btnCambiarTexto").addEventListener("click", cambiarTexto);
document.getElementById("btnCambiarColor").addEventListener("click", cambiarColor);
document.getElementById("btnCambiarAlineacion").addEventListener("click", cambiarAlineacion);
document.getElementById("btnCrearTexto").addEventListener("click", crearTexto);
document.getElementById("btnBorrarTexto").addEventListener("click", borrarTexto);

