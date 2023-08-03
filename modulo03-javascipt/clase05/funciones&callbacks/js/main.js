
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

console.warn('---------------------------------------------------------------------------------------')
/* Scope | Ámbito */
/* El alcance o visibilidad que va a tener una variable en una determinada sección del código. */

/* Bloque principal */
const globalVariable = 'Soy una variable global'

function mostrarGlobalVariable() { /* Bloque de la función */
    console.log(globalVariable)
}

mostrarGlobalVariable() //Resultado: "Soy una variable global"
console.log(globalVariable)

function otroEjemplo() { /* Bloque otroEjemplo */

    let variableOtroEjemplo = 'Soy la variable dentro de la función'

    if (true) { /* Bloque IF */
        let variableIF = 'Soy la variable IF'
        console.log(globalVariable)
    }

    /* Tanto las variables variableOtroEjemplo como variableIF, no se pueden usar fuera de la función. Solo existen para y dentro de la función. */
}

//console.log(variableOtroEjemplo) /* No existe, porque esta definida dentro del bloque otroEjemplo */
//console.log(variableIF) /* No existe porque está definida dentro del bloque IF */
//console.log(globalVariable) /* SI EXISTE. Es global. */

console.warn('---------------------------------------------------------------------------------------')
/* CALLBACKS */
/* Un callback es una función que se pasa como argumento de otra función. */

function imprimirTexto1() {
    console.log('imprimirTexto1')
}

function imprimirTexto2() {
    console.log('imprimirTexto2')
}

imprimirTexto1() //llamo a la función
imprimirTexto2()
console.log(imprimirTexto1) //imprimirTexto1 tengo la referencia de la función "imprimirTexto1"
console.log(imprimirTexto2)

console.warn('---------------------------------------------------------------------------------------')

function prueba(item, callback){ //Callback o cb
    console.log(item)
    console.log(callback)

    if (typeof callback === 'function') {
        callback()
    } else {
        console.log(`Prueba: el callback " ${callback} " no es una función.`)
    }
}

prueba(2, imprimirTexto1)
prueba(10, 'holiiis')