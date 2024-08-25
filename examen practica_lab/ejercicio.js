//Javier Eulices Martínez Martínez

let camisetas = 50;
let zapatos = 90;
let pantalones = 120;
 
let totalProductos = camisetas + pantalones + zapatos;
console.log("El total de productos en el inventario es:", totalProductos);
 
if ( camisetas < 100 || zapatos < 100) {
    console.log("Es necesario reponer camisetas y zapatos si es necesario");
    
    } else if (pantalones < 100) {
        console.log("Es necesario reponer pantalones");
         
        
            } else {
                console.log("No es necesario reponer ningún producto");
                 
            }



 
