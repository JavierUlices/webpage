// Javier Eulices Martínez Martínez

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const peliculas = [
    { titulo: "Resident Evil", genero: "Drama" },
    { titulo: "Camino hacia el terror", genero: "Terror" },
    { titulo: "La era de hielo", genero: "Animación" },
    { titulo: "Deporte sangriento", genero: "Acción" },
    { titulo: "Despacito", genero: "Musica" }
];
rl.question("¿Qué  película prefieres ver? (Acción, Terror, Animación, Drama, Musica)\n", function(generoSeleccionado) {
    const generosValidos = ["Acción", "Terror", "Animación", "Drama", "Musical"];
    if (!generosValidos.map(g => g.toLowerCase()).includes(generoSeleccionado.toLowerCase())) {
        console.log("Género invalido. Por favor, selecciona ingrese un género de la lista.");
    } else {
        let peliculasRecomendadas = peliculas.filter(pelicula => pelicula.genero.toLowerCase() === generoSeleccionado.toLowerCase());
        if (peliculasRecomendadas.length > 0) {
            console.log("Te invitamos a ver las siguientes películas:");
            peliculasRecomendadas.forEach(pelicula => console.log(pelicula.titulo));
        } else {
            console.log("Lo siento, no hay películas disponibles para el género seleccionado.");
        }
    }

    rl.close();
});
