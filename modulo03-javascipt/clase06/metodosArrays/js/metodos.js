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
Método pop(): Eliminar el último elemento del array y lo devuelve.

Método unshift():  Agregar el primero de los elementos del array y lo devuelve.
Método shift(): Elimina uno o más elementos al principio del array

Método splice(): Agregar, eliminar o reemplazar elementos en posiciones específicas.
 */

console.warn('isArray(): Método que permite averiguar si una variable es un array. Retorna un booleano.')
let nombre = 'Rodrigo'
let isStudent = true

console.log(typeof nombre) //string
console.log(typeof isStudent) // boolean
console.log(typeof {x: 1, y: 2}) //objeto
console.log(Array.isArray(arrayColores)) //true

/* push() */
console.warn('Método push(): Agregar uno o mas elementos al final del array.')
arrayColores.push('manzana')
console.log(arrayColores)
console.log(arrayColores.length)

/* pop() */
console.warn('Método pop(): Eliminar el último elemento del array y lo devuelve.')
const elementoEliminado = arrayColores.pop()
console.log(elementoEliminado)
console.log({arrayColores})

/* unshift() */
console.warn('Método unshift():  Agregar el primero de los elementos del array y lo devuelve.')
arrayColores.unshift('magenta')
arrayColores.unshift('marrón')
console.log(arrayColores)


/* shift() */
console.warn('Método shift(): Elimina uno o más elementos al principio del array')
arrayColores.shift() //elimina el elemento en el primer lugar. En este caso, Marrón.
console.log(arrayColores)

/* splice() */
/* Quiero agregar 'naranja' */
console.warn('Método splice(): Agregar, eliminar o reemplazar elementos en posiciones específicas.')
console.log(arrayColores)
/* Agregar 2 elementos, sin eliminar ninguno (0, 0, ...) */
arrayColores.splice(2, 0, 'naranja', 'celeste')
console.log(arrayColores)

/* Eliminar 1 de la posición 3 (3, 1) */
console.log(arrayColores)
arrayColores.splice(3,1)
console.log(arrayColores)

/* Reemplazar 1 elemento en la posición 4 */
console.log(arrayColores)
arrayColores.splice(4, 1, 'morado')
console.log(arrayColores)

/* CRUD = CREATE | READ | UPDATE | DELETE 
CREATE (Agrega un elemento)
READ ALL (Leer todos loe elementos del array)
READ ONE (Leer un elemento del array)
UPDATE (Modificar un elemento)
DELETE (Eliminar un elemento del array)
*/

console.warn('\n/*** */ CRUD = CREATE | READ | UPDATE | DELETE ***/')

datos = ''

/* CREATE: Crear elemento */
function agregarElemento(elemento){
    datos.push(elemento)
}