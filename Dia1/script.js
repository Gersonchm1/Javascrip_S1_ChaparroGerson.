// Aquí podríamos agregar JavaScript para obtener el nombre del usuario
        // y para redirigir a la página de perfil
        document.getElementById('boton-perfil').addEventListener('click', function() {
            window.location.href = './perfil.html';
        });

        // Simulación del nombre del usuario (esto vendría de tu sistema de autenticación)
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('nombre-usuario').textContent = 'Bienvenido, [Nombre del Usuario]';
        });