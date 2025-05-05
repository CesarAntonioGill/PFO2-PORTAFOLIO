// Seleccionar elementos
const seccionPresentacion = document.getElementById('sobre-mi'); 
const botonToggle = document.createElement('button');

// Configurar el botón
botonToggle.id = 'boton-toggle-presentacion';
botonToggle.textContent = 'Ocultar Presentación';
botonToggle.style.position = 'fixed';
botonToggle.style.bottom = '70px'; // Un poco más arriba que el botón de modo oscuro
botonToggle.style.right = '20px';
botonToggle.style.padding = '10px 15px';
botonToggle.style.borderRadius = '5px';
botonToggle.style.border = 'none';
botonToggle.style.cursor = 'pointer';
botonToggle.style.zIndex = '1000';

// Agregar el botón al body
document.body.appendChild(botonToggle);

// Función para ocultar/mostrar
botonToggle.addEventListener('click', () => {
    if (seccionPresentacion.style.display === 'none') {
        seccionPresentacion.style.display = 'block';
        botonToggle.textContent = 'Ocultar Presentación';
    } else {
        seccionPresentacion.style.display = 'none';
        botonToggle.textContent = 'Mostrar Presentación';
    }
});

