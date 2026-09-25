// 1. Cargar datos de LocalStorage o iniciar un arreglo vacío
let transacciones = JSON.parse(localStorage.getItem('cashtrack_transacciones')) || [];

// 2. Seleccionar elementos del DOM
const formTransaccion = document.getElementById('form-transaccion');
const inputDescripcion = document.getElementById('descripcion');
const inputMonto = document.getElementById('monto');
const selectTipo = document.getElementById('tipo');
const listaTransacciones = document.getElementById('lista-transacciones');

const elBalanceTotal = document.getElementById('balance-total');
const elTotalIngresos = document.getElementById('total-ingresos');
const elTotalGastos = document.getElementById('total-gastos');

// 3. Función para guardar en LocalStorage
function guardarEnLocalStorage() {
    localStorage.setItem('cashtrack_transacciones', JSON.stringify(transacciones));
}

// 4. Función para actualizar los totales del resumen
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

    elBalanceTotal.textContent = `$${balanceTotal.toFixed(2)}`;
    elTotalIngresos.textContent = `+$${totalIngresos.toFixed(2)}`;
    elTotalGastos.textContent = `-$${totalGastos.toFixed(2)}`;
}

// 5. Función para eliminar una transacción por su ID
function eliminarTransaccion(id) {
    // Filtrar el arreglo excluyendo la transacción con ese ID
    transacciones = transacciones.filter(function (t) {
        return t.id !== id;
    });

    // Guardar cambios y volver a renderizar todo
    guardarEnLocalStorage();
    renderizarTodo();
}

// 6. Función para renderizar toda la lista de transacciones en pantalla
function renderizarTodo() {
    // Limpiar la lista actual en HTML
    listaTransacciones.innerHTML = '';

    // Dibujar cada elemento
    transacciones.forEach(function (nuevaTransaccion) {
        const nuevaLi = document.createElement('li');
        nuevaLi.classList.add('transaccion-item', nuevaTransaccion.tipo);
        
        nuevaLi.innerHTML = `
            <span>${nuevaTransaccion.descripcion}</span>
            <div>
                <span>${nuevaTransaccion.tipo === 'gasto' ? '-' : '+'}$${nuevaTransaccion.monto.toFixed(2)}</span>
                <button class="btn-eliminar" onclick="eliminarTransaccion(${nuevaTransaccion.id})">✕</button>
            </div>
        `;

        listaTransacciones.appendChild(nuevaLi);
    });

    // Actualizar los números del resumen
    actualizarResumen();
}

// 7. Escuchar el evento submit del formulario
formTransaccion.addEventListener('submit', function (e) {
    e.preventDefault();

    const nuevaTransaccion = {
        id: Date.now(),
        descripcion: inputDescripcion.value,
        monto: Number(inputMonto.value),
        tipo: selectTipo.value
    };

    transacciones.push(nuevaTransaccion);

    // Guardar y renderizar
    guardarEnLocalStorage();
    renderizarTodo();

    formTransaccion.reset();
});

// 8. Cargar los datos guardados al abrir la app
renderizarTodo();