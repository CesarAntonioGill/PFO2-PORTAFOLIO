// Selección de elementos del formulario
const formulario = document.querySelector('#contacto form');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const comentarios = document.getElementById('comentarios');

// Función para validar campos obligatorios
function validarCampo(campo, nombreCampo) {
    const valor = campo.value.trim();
    if (valor === '') {
        mostrarError(campo, `El campo ${nombreCampo} es obligatorio.`);
        return false;
    }
    limpiarError(campo);
    return true;
}

// Función para validar email con expresión regular
function validarEmail() {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email.value)) {
        mostrarError(email, 'Por favor, ingresa un email válido (ej: usuario@dominio.com).');
        return false;
    }
    limpiarError(email);
    return true;
}

// Función para validar teléfono (mínimo 8 dígitos)
function validarTelefono() {
    const regexTelefono = /^\d{8,}$/;
    if (!regexTelefono.test(telefono.value)) {
        mostrarError(telefono, 'El teléfono debe tener al menos 8 dígitos numéricos.');
        return false;
    }
    limpiarError(telefono);
    return true;
}

// Funciones auxiliares para mostrar/ocultar errores
function mostrarError(campo, mensaje) {
    // Crea o selecciona el elemento de error
    let errorElement = campo.nextElementSibling;
    if (!errorElement || !errorElement.classList.contains('error-mensaje')) {
        errorElement = document.createElement('span');
        errorElement.className = 'error-mensaje';
        campo.insertAdjacentElement('afterend', errorElement);
    }
    // Muestra el error
    errorElement.textContent = mensaje;
    campo.classList.add('campo-error');
}

function limpiarError(campo) {
    // Oculta el error si existe
    const errorElement = campo.nextElementSibling;
    if (errorElement && errorElement.classList.contains('error-mensaje')) {
        errorElement.textContent = '';
        campo.classList.remove('campo-error');
    }
}

// Evento "submit" del formulario
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío automático

    // Validar todos los campos
    const esValido = [
        validarCampo(nombre, 'Nombre'),
        validarCampo(apellido, 'Apellido'),
        validarEmail(),
        validarTelefono(),
        validarCampo(comentarios, 'Comentarios')
    ].every(result => result === true);

    // Si todo es válido, enviar el formulario
    if (esValido) {
        formulario.submit(); // Esto activará tu modal de éxito
    }
});

// Los campos se validan al perder el foco
[nombre, apellido, email, telefono, comentarios].forEach(campo => {
    campo.addEventListener('blur', function() {
        switch (campo.id) {
            case 'email':
                validarEmail();
                break;
            case 'telefono':
                validarTelefono();
                break;
            default:
                validarCampo(campo, campo.placeholder || campo.id);
        }
    });
});
 