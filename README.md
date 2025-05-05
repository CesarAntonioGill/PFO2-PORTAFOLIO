
----------------------------VALIDAR FORMULARIO------------------------------
Se valida automaticamente al enviar el formulario, se agregaron ensajes de error claros debajo de cada campo, ademas de que no se envia si hay errores o si algun campo esta incompleto.
Los campos email y telefono deben usar expresiones regulares para validar.




-----------------------------MODO OSCURO / CLARO------------------------------
Se crea e implementa un botón flotante en el margen inferior derecho para cambiar de modo claro a oscuro. Al hacer clic en el boton se alternan estilos CSS que modifican el estilo de la pagina, si el usuario recarga la pagina se mantiene el modo seleccionado anteriormente usando localStorage.




-------------------------OCULTAR/MOSTRAR----------------------------------------
Se selecciona la sección de presentación personal mediante su id "sobre-mi" que se quiere ocultar/mostrar, se crea el boton flotante en JS, se le asigna un id texto y estilo para que quede visible en el margen inferior derecho, luego se agrega al body para que aparezca en pantalla y por ultimo se programa la funcionalidad del boton para que al hacer clic oculte o muestre la seccion seleccionada.




------------------------------GALERIA DINAMICA-----------------------------------
Se modifica el HTML eliminando los <p>, tambien se eliminan los hover.
Se define un arra con las imagenes nuevas que se agregaron a la carpeta "img", inicializando en cero.
La funcion "mostrarImagenes" muestra 3 imagenes desde el indice actual, al hacer clic en las flechas el indice se actualiza y se vuelve a mostrar la galeria con nuevas imagenes. Esta galería se actualiza automáticamente al cargar la página mostrando las primeras 3 imágenes.




-------------------------------CONTADOR VISITAS----------------------------------
Se lee el número de visitas guardado en localStorage y si ya hay un valor, este se incrementa en 1; si no, se inicia en 1.
Se actualiza el valor en localStorage y luego se muestra el número de visitas en un elemento del HTML.





---------------------MEJORAS------------------------------
1-Se implementa una transicion suave de modo claro a oscuro y viceversa agregando unas lineas al final del archivo CSS afectando body, header y section sin tocar html o js.

2-Se cambió el tono de la pagina a celeste modificando todo lo verde en el archivo CSS.



