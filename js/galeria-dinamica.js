const contenedorBonus = document.getElementById('contenedor-bonus');
const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// Lista de imágenes
const imagenesGaleria = [
    'img/michis-1.jpg',
    'img/michis-2.jpg',
    'img/michis-3.jpg',
    'img/michis-4.jpg',
    'img/michis-5.jpg',
    'img/michis-6.jpg',
    'img/michis-7.jpg',
    'img/michis-8.jpg',
    'img/michis-9.jpg',
    'img/michis-10.jpg',
    'img/michis-11.jpg',
    'img/michis-12.jpg',
    'img/michis-13.jpg',
    'img/michis-14.jpg',
    'img/michis-15.jpg',
    'img/michis-16.jpg',
    'img/michis-17.jpg',
    'img/michis-18.jpg',
];

let indiceInicio = 0; // Empieza en la primera imagen

// Función para renderizar 3 imágenes a partir del índice
function mostrarImagenes() {
    contenedorBonus.innerHTML = ''; // Limpia el contenedor

    for (let i = 0; i < 3; i++) {
        let indiceImagen = (indiceInicio + i) % imagenesGaleria.length;

        const divImagen = document.createElement('div');
        divImagen.classList.add('bonus-track');

        const img = document.createElement('img');
        img.src = imagenesGaleria[indiceImagen];

        divImagen.appendChild(img);
        contenedorBonus.appendChild(divImagen);
    }
}

// Botón izquierda
flechaIzquierda.addEventListener('click', () => {
    indiceInicio = (indiceInicio - 1 + imagenesGaleria.length) % imagenesGaleria.length;
    mostrarImagenes();
});

// Botón derecha
flechaDerecha.addEventListener('click', () => {
    indiceInicio = (indiceInicio + 1) % imagenesGaleria.length;
    mostrarImagenes();
});

// Mostrar al cargar la página
mostrarImagenes();

