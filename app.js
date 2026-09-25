// 1. Arreglo principal para almacenar los datos en memoria
let transacciones = [];

// 2. Seleccionar elementos del DOM
const formTransaccion = document.getElementById('form-transaccion');
const inputDescripcion = document.getElementById('descripcion');
const inputMonto = document.getElementById('monto');
const selectTipo = document.getElementById('tipo');
const listaTransacciones = document.getElementById('lista-transacciones');

const elBalanceTotal = document.getElementById('balance-total');
const elTotalIngresos = document.getElementById('total-ingresos');
const elTotalGastos = document.getElementById('total-gastos');

// 3. Función para actualizar los totales en pantalla
function actualizarResumen() {
    let totalIngresos = 0;
    let totalGastos = 0;

    transacciones.forEach(function (t) {
        if (t.tipo === 'ingreso') {
            totalIngresos += t.monto;
        } else {
            totalGastos += t.monto;
        }
    });

    const balanceTotal = totalIngresos - totalGastos;

    // Actualizar los elementos HTML
    elBalanceTotal.textContent = `$${balanceTotal.toFixed(2)}`;
    elTotalIngresos.textContent = `+$${totalIngresos.toFixed(2)}`;
    elTotalGastos.textContent = `-$${totalGastos.toFixed(2)}`;
}

// 4. Escuchar evento de envío del formulario
formTransaccion.addEventListener('submit', function (e) {
    e.preventDefault();

    // Crear el objeto de la transacción
    const nuevaTransaccion = {
        id: Date.now(),
        descripcion: inputDescripcion.value,
        monto: Number(inputMonto.value),
        tipo: selectTipo.value
    };

    // Agregar al arreglo
    transacciones.push(nuevaTransaccion);

    // Crear elemento en la lista visual
    const nuevaLi = document.createElement('li');
    nuevaLi.classList.add('transaccion-item', nuevaTransaccion.tipo);
    nuevaLi.innerHTML = `
        <span>${nuevaTransaccion.descripcion}</span>
        <span>${nuevaTransaccion.tipo === 'gasto' ? '-' : '+'}$${nuevaTransaccion.monto.toFixed(2)}</span>
    `;

    listaTransacciones.appendChild(nuevaLi);

    // Recalcular los valores del resumen
    actualizarResumen();

    // Limpiar formulario
    formTransaccion.reset();
});