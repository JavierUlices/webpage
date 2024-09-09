// Javier Eulices Martínez Martínez

const gastosFamilia = [
    { categoria: "vivienda", monto: 0.00 },
    { categoria: "alimentos", monto: 300 },
    { categoria: "transporte", monto: 24 },
    { categoria: "entretenimiento", monto: 12 }
];
const ingresoMensual = 400; 
let totalGastos = 0;
gastosFamilia.forEach(gasto => {
    totalGastos += gasto.monto;
});
if (totalGastos < ingresoMensual) {
    const ahorro = ingresoMensual - totalGastos;
    console.log(`El total de ingreso está equilibrado y tienes un ahorro de: $${ahorro}`);
} else if (totalGastos === ingresoMensual) {
    console.log("El presupuesto está equilibrado y no tienes ahorros.");
} else {
    const deficit = totalGastos - ingresoMensual;
    console.log(`El presupuesto total está excedido. Te faltan $${deficit} para cubrir los gastos.`);
}