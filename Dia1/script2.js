document.getElementById('boton-perfil-header').addEventListener('click', function() {
    window.location.href = './perfil.html';
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('nombre-usuario-header').textContent = 'Bienvenido, [Nombre del Usuario]';
});

function mostrarListaEstudiantes() {
    const salonSeleccionado = document.getElementById('salon-selector').value;
    const contenedorTabla = document.getElementById('contenedor-tabla-estudiantes');
    const tbody = document.getElementById('tabla-estudiantes').getElementsByTagName('tbody')[0];

    if (salonSeleccionado) {
        contenedorTabla.style.display = 'block';
        tbody.innerHTML = ''; // Limpiar la tabla anterior

        // Simulación de datos de estudiantes por salón (reemplazar con tu lógica de API)
        let estudiantes = [];
        if (salonSeleccionado === '1A') {
            estudiantes = [
                { id: '101', nombres: 'Ana', apellidos: 'Gómez' },
                { id: '102', nombres: 'Carlos', apellidos: 'López' }
            ];
        } else if (salonSeleccionado === '1B') {
            estudiantes = [
                { id: '103', nombres: 'Sofía', apellidos: 'Martínez' },
                { id: '104', nombres: 'Mateo', apellidos: 'Rodríguez' }
            ];
        }
        // Agrega más lógica para otros salones

        // Llenar la tabla con los datos del salón seleccionado
        estudiantes.forEach(estudiante => {
            const newRow = tbody.insertRow();
            const cellId = newRow.insertCell();
            const cellNombres = newRow.insertCell();
            const cellApellidos = newRow.insertCell();
            const cellAcciones = newRow.insertCell();

            cellId.textContent = estudiante.id;
            cellNombres.textContent = estudiante.nombres;
            cellApellidos.textContent = estudiante.apellidos;
            cellAcciones.innerHTML = `
                <div class="acciones">
                    <button class="boton-editar" onclick="window.location.href='./editar_estudiante.html?id=${estudiante.id}'">Editar</button>
                    <button class="boton-eliminar" onclick="eliminarEstudiante('${estudiante.id}')">Eliminar</button>
                </div>
            `;
        });
    } else {
        contenedorTabla.style.display = 'none';
        alert('Por favor, selecciona un salón.');
    }
}

function eliminarEstudiante(id) {
    if (confirm(`¿Seguro que quieres eliminar al estudiante con ID ${id}?`)) {
        // Aquí iría la lógica para enviar una solicitud de eliminación a tu servicio JSON
        console.log(`Eliminar estudiante con ID: ${id}`);
        // Después de eliminar, podrías recargar la lista de estudiantes del salón actual
        mostrarListaEstudiantes(); // Por ahora, solo recargamos la lista
    }
}