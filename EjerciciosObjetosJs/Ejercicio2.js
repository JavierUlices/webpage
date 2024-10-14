/*Defina un objeto, mediante una expresión, que tenga dos propiedades: precio
y descuento y un método neto. El método calculará el precio con el descuento
aplicado. Los valores se pedirán por teclado usando el prompt-sync
En el siguiente ejercicio utilizaras la librería de prompt-sync, para solicitarle a
los usuarios los datos,
• Requerir la librería prompt-sync
• Definir el objeto que contiene el precio, el descuento y un método para
calcular el precio neto:
o Propiedad para el precio
o Propiedad para el descuento
o Método para calcular el precio neto con el descuento aplicado

Precio neto = Precio − (

Descuento
100 )

o Solicitar al usuario que ingrese los valores de precio y descuento
o Calcular el precio neto y mostrar el resultado
• Utiliza parseFloat( ) Para asegurar prompt se tratan como un
número.*/ 
const prompt = require('prompt-sync')();

class Producto {
  constructor(precio, descuento) {
    this.precio = parseFloat(precio);
    this.descuento = parseFloat(descuento);
  }

  calcularPrecioNeto() {
    let precioNeto = this.precio - (this.descuento / 100) * this.precio;
    return precioNeto;
  }

  calcularDescuentoAplicado() {
    return (this.descuento / 100) * this.precio;
  }
}

let precio = prompt('Ingrese el precio: ');
let descuento = prompt('Ingrese el descuento: ');

let producto = new Producto(precio, descuento);

let precioNeto = producto.calcularPrecioNeto();
let descuentoAplicado = producto.calcularDescuentoAplicado();

console.log(`El precio neto es: $${precioNeto.toFixed(2)}`);
console.log(`El descuento aplicado es: $${descuentoAplicado.toFixed(2)}`);
console.log(`El precio total es: $${producto.precio.toFixed(2)}`);
