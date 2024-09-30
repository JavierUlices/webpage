// 3. Crea una función que reciba un string y devuelve el número de vocales que contiene//
//Javier Eulices Martínez Martínez
function contarVocales(cadena) {
    let vocales = "aeiouAEIOU";
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (vocales.includes(cadena[i])) {
            contador++;
        }
    }
    return contador;
}
console.log(contarVocales("eiouAEIOU"));

