// 1. Seleccionar los elementos del DOM que necesitamos
const formTransaccion = document.getElementById('form-transaccion');
const inputDescripcion = document.getElementById('descripcion');
const inputMonto = document.getElementById('monto');
const selectTipo = document.getElementById('tipo');

// 2. Escuchar el evento "submit" del formulario
formTransaccion.addEventListener('submit', function (e) {
    // Evitar que el navegador recargue la página por defecto
    e.preventDefault();

    // Capturar los valores ingresados por el usuario
    const descripcion = inputDescripcion.value;
    const monto = Number(inputMonto.value);
    const tipo = selectTipo.value;

    // Mostrar los datos en la consola de prueba
    console.log('Nueva Transacción:', { descripcion, monto, tipo });

    // Limpiar los campos del formulario
    formTransaccion.reset();
});