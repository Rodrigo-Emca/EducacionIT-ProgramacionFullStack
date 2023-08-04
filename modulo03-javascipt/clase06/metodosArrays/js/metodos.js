console.log(document.querySelector('title').textContent)

/* Métodos de los arrays */

const arrayColores = ['rojo', 'verde', 'azul', 'violeta']

console.log(arrayColores)

//Esta es otra forma de agregar más elementos al array:
arrayColores[4] = 'rosa'
arrayColores[5] = 'negro'
arrayColores[6] = 'blanco'

console.log(arrayColores)

console.warn('\n/*** Métodos de los Arrays ***/')

/* 
isArray(): Método que permite averiguar si una variable es un array. Retorna un booleano.

Método push(): Agregar uno o mas elementos al final del array.
Método shift(): Elimina uno o más elementos al principio del array

Método pop(): Eliminar el último elemento del array y lo devuelve.
Método unshift():  Agregar el primero de los elementos del array y lo devuelve.

Método splice(): Agregar, eliminar o reemplazar elementos en posiciones específicas.
 */

let nombre = 'Rodrigo'
let isStudent = true

console.log(typeof nombre) //string
console.log(typeof isStudent) // boolean
console.log(typeof {x: 1, y: 2}) //objeto
console.log(Array.isArray(arrayColores)) //true

