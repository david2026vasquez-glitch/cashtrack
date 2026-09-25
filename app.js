// Seleccionar elementos del DOM
const formTransaccion = document.getElementById('form-transaccion');
const inputDescripcion = document.getElementById('descripcion');
const inputMonto = document.getElementById('monto');
const selectTipo = document.getElementById('tipo');
const listaTransacciones = document.getElementById('lista-transacciones');

// Escuchar el evento submit
formTransaccion.addEventListener('submit', function (e) {
    e.preventDefault();

    // Capturar datos
    const descripcion = inputDescripcion.value;
    const monto = Number(inputMonto.value);
    const tipo = selectTipo.value;

    // Crear un nuevo elemento de lista <li> en memoria
    const nuevaLi = document.createElement('li');
    nuevaLi.classList.add('transaccion-item', tipo);

    // Definir el contenido visual dentro del <li>
    nuevaLi.innerHTML = `
        <span>${descripcion}</span>
        <span>${tipo === 'gasto' ? '-' : '+'}$${monto.toFixed(2)}</span>
    `;

    // Insertar el nuevo elemento dentro de la lista <ul> en la pantalla
    listaTransacciones.appendChild(nuevaLi);

    // Limpiar el formulario
    formTransaccion.reset();
});