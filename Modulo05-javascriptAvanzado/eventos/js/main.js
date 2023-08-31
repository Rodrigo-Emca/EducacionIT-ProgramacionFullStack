console.log(document.querySelector("title").textContent);

/* Eventos */
/* Los eventos son acciones o sucesos que ocurren en una página.
Pueden ser disparados por el usuario o por acciones que ocurran dentro del navegador.
Basado en las acciones o sucesos, permite disparar acciones específicas a estos eventos o sucesos.
Los eventos pueden ser generados por el usuario, haciendo click, moviendo el mouse, o pueden ser generados por el navegador en respuesta a ciertas situaciones.
*/

/* Seleccionar el div */
const eventoClick = document.querySelector('#evento-click')
//console.log(eventoClick)

/* elemento .addEventListener recibe dos elementos ('evento', callback) */
eventoClick.addEventListener('click', function() {
    console.log('Hicieron Click')
    eventoClick.style.backgroundColor = 'crimson'
})

const eventoDobleClick = document.querySelector('#evento-doble-click')
//console.log(eventoDobleClick)

eventoDobleClick.addEventListener('dbclick', function(objEvento) {
    console.log('Hicieron Doble Click')
    console.log(objEvento)
    objEvento.target.style.backgroundColor = 'yellow'
})