
function darBienvenidaPorNombreYdarNumeroFav(nombre, numeroFav) {
    console.log('Bienvenidx ' + nombre + '. Tu numero favorito es el ' + numeroFav)
}

darBienvenidaPorNombreYdarNumeroFav('Gonzalo', 9) //El dato que le paso a la funcion en la invocacion se llama argunmento
darBienvenidaPorNombreYdarNumeroFav('Luana', 21)
darBienvenidaPorNombreYdarNumeroFav('Maxi', 22)
darBienvenidaPorNombreYdarNumeroFav('Gabriel', 17)

/* Funcion para manipular el DOM */
function cambiarContenido(elementoId, nuevoContenido) {
    const elemento = document.getElementById(elementoId)
    if(elemento){
        elemento.textContent = nuevoContenido
    }
    console.warn('El contenido ha sido cambiado.')
}

//debugger
cambiarContenido( 'parrafo' , 'Soy un texto para el párrafo')
//debugger
cambiarContenido( 'parrafo' , 'Soy otro texto para el párrafo')
//debugger
cambiarContenido( 'parrafo' , 'Soy un nuevo texto para el párrafo')