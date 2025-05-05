// Accedemos al elemento donde vamos a mostrar el contador
const contadorElemento = document.getElementById('contador-visitas');

// Leemos el contador actual del LocalStorage
let contador = localStorage.getItem('contadorVisitas');

// Verificamos si ya había un contador guardado
if (contador) {
    // Si existe, lo convertimos a número y le sumamos 1
    contador = parseInt(contador) + 1;
} else {
    // Si no existía, es la primera visita
    contador = 1;
}

// Guardamos el nuevo valor en el LocalStorage
localStorage.setItem('contadorVisitas', contador);

// Mostramos el contador en pantalla
contadorElemento.textContent = `Número de visitas a esta página: ${contador}`;
