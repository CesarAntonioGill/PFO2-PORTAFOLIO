// Seleccionar elementos del DOM
const botonModo = document.createElement('button'); // Crearemos el botón dinámicamente
const body = document.body;

// Configurar el botón
botonModo.id = 'boton-modo';
botonModo.textContent = '🌙 Modo Oscuro'; // Texto inicial (modo claro activo por defecto)
botonModo.style.position = 'fixed'; // Posición fija para que sea accesible
botonModo.style.bottom = '20px';
botonModo.style.right = '20px';
botonModo.style.padding = '10px 15px';
botonModo.style.borderRadius = '5px';
botonModo.style.border = 'none';
botonModo.style.cursor = 'pointer';
botonModo.style.zIndex = '1000'; // Para que esté por encima de otros elementos

// Agregar el botón al final del body
document.body.appendChild(botonModo);

const clasesModoOscuro = {
    body: 'modo-oscuro',
    header: 'modo-oscuro-header',
    section: 'modo-oscuro-section',
};

// Verificar preferencia guardada en localStorage
const modoGuardado = localStorage.getItem('modo');
if (modoGuardado === 'oscuro') {
    activarModoOscuro();
}

// Función para activar el modo oscuro
function activarModoOscuro() {
    body.classList.add(clasesModoOscuro.body);
    document.querySelector('header').classList.add(clasesModoOscuro.header);
    document.querySelectorAll('section').forEach(section => {
        section.classList.add(clasesModoOscuro.section);
    });

    botonModo.textContent = '☀️ Modo Claro';
    localStorage.setItem('modo', 'oscuro'); // Guarda la preferencia
}

// Función para activar el modo claro
function activarModoClaro() {
    body.classList.remove(clasesModoOscuro.body);
    // Remueve las clases de otros elementos
    document.querySelector('header').classList.remove(clasesModoOscuro.header);
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove(clasesModoOscuro.section);
    });

    botonModo.textContent = '🌙 Modo Oscuro';
    localStorage.setItem('modo', 'claro');
}

// Evento click para alternar modos
botonModo.addEventListener('click', () => {
    if (body.classList.contains(clasesModoOscuro.body)) {
        activarModoClaro();
    } else {
        activarModoOscuro();
    }
});
