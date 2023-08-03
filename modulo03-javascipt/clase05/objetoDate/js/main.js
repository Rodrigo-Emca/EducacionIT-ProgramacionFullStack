console.log(document.querySelector('title').textContent)

//Selecionamos elemento/s dentro del DOM
const txt = document.getElementById('txt')
//console.log(txt)

//Creamos nuestro objeto fecha.
const fecha = new Date()
console.log(fecha)

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