console.log(document.querySelector('title').textContent)

console.warn('Ejemplo de bloque if')

let edadString = prompt('Ingrese su edad')
let edad = Number(edadString)

if (edad >= 18) {
    //debugger
    console.log('Sos mayor de edad')
    console.log('Podes acceder al contenido')
} else {
    //debugger
    console.log('Sos menor de edad')
    console.log('Olvidate! No podes tomar whisky')
}
/* El debugger es una herramienta para observar internamente como funciona mi programa.
Para activarlo, lo puedo hacer con la palabra reservada 'debugger' (Esto genera un breakpoint) */

console.warn('----------------------------------')

/* Solo pueden ingresar los mayores de 18 y menores de 80 */

if ( edad >= 18 && edad <= 80) {
    console.warn('Podes acceder al contenido')
} else {
    console.error('Olvidate! No podes tomar whisky')
}