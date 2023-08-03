console.log(document.querySelector('title').textContent)

//Selecionamos elemento/s dentro del DOM
const txt = document.getElementById('txt')
//console.log(txt)

//Creamos nuestro objeto fecha.
const fecha = new Date()
console.log(fecha) //me imprime un string.
console.dir(fecha) //le saco una radiografia. Me permite ver todos los metodos que el objeto acepta.

//Objetener el numero de dia del mes
let diaMes = fecha.getDate()
console.log(diaMes) // 3 => 03
/* Tengo que concatenarle un 0 cuando el número es menor a 10 */
if (diaMes < 10) {
    diaMes = '0'+ diaMes
}
console.log(diaMes)

let mes = fecha.getMonth() + 1
console.log(mes) // Retorna un numero, que siempre es 1 menor al correspondiente. Enero = 0, Febrero = 2, etc. Por eso agregamos el + 1 a la funcion.

if(mes < 10) {
    mes = '0' + mes
}
console.log(mes)

let anio = fecha.getFullYear()
console.log(anio)

//imprimimos con txt.innerText.

//txt.innerText = diaMes + '/' + mes + '/' + anio
txt.innerHTML = `${diaMes}/${mes}/${anio}`

/* ----------------------------------------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------------------------- */

/* Hora Actual */

const txtHora = document.querySelector('#txtHora')
// Puedo acceder al id con el querySelector, pero recordar agregar la etiqueta css, el # delante del nombre.
// Tambien puedo acceder con getElementById.
//const txtHora = document.getElementById('txtHora')
console.log(txtHora)

//creamos el objeto fecha
let hora = new Date()

function getHora() {
        
    //Obtenemos el numero de las horas
    let horas = hora.getHours()
    console.log('horas: ' + horas)

    if (horas < 10) {
        horas = '0' + horas
    }

    // Obtenemos el numero de los minutos.
    let minutos = hora.getMinutes()
    console.log('minutos: '+ minutos)

    if(minutos < 10 ) {
        minutos = '0' + minutos
    }

    // Obtenemos el numero de segundos.
    let segundos = hora.getSeconds()
    console.log('segundos: '+ segundos)

    if(segundos < 10) {
        segundos = '0' + segundos
    }

    //txtHora.textContent = `${horas}:${minutos}:${segundos}`
}

getHora()

//La funcion setInterval sirve para actualizar el llamado a una funcion.
setInterval( getHora ) //recibe una funcion como argumento