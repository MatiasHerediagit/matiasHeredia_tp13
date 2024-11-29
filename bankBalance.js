// Creo la función calculateBalances()
function calculateBalances(operaciones) {
    let saldoTotalDepositos = 0;
    let saldoTotalRetiros = 0;
    let saldoActual = 0;
    //Ahora creo el array que contendra las operaciones realizadas por los clientes.
    for (let i = 0; i < operaciones.length; i++) {//mientras que esta condicion sea verdadera se seguira ejecutando el bucle
        if (operaciones[i] > 0) {
            saldoTotalDepositos += operaciones[i];
            //si operaciones es mayor que 0 se entiende entonces que es un deposito, caso contrario se va a tomar como un retiro en el else
        } else {
            saldoTotalRetiros += operaciones[i];
        }
        saldoActual += operaciones[i];
    }
    return {
        totalDepositos: saldoTotalDepositos,
        totalRetiros: saldoTotalRetiros,
        saldoActual: saldoActual
        //Agregue un return para que me devuelva un objeto con los resultados de las 3 variables anteriormente creadas dentro del function.
    };
}
function bankBalance(nombre, apellido, operaciones) {//Segunda function que contiene como parametros el nombre y apellido del cliente y los datos obtenidos en el return del array
    let balances = calculateBalances(operaciones);
    return `Estimad@ ${nombre} ${apellido}: El monto total de los depósitos es de: $${balances.totalDepositos}, mientras que el monto total de los retiros es de: $${balances.totalRetiros}. Por lo tanto, su saldo actual en la cuenta es de: $${balances.saldoActual}`;
    //Aplico un return con los parametros nombre, apellido y operaciones.
}
// Hago un console log para probar la función con diferentes valores.
console.log(bankBalance("Matias", "Heredia", [10000, -4000, 1500, -2500, 30000, -8000]));
// Ahora uso un module exports para exportar la funcion.
module.exports = bankBalance;
