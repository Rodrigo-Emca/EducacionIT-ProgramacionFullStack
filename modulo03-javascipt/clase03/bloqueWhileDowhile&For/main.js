/* Bucle o ciclo While:
Estructura que repite un bloque de codigo mientras se cumple la condición.
 */

/* 
While (condicion) {     < condicion de corte 
    codigo a ejecutar en cada iteración
} 

*/

let indice = 1
let pasos = parseInt(prompt('Ingrese cantidad de pasos: '))

while ( indice <= pasos ) {
    console.log(`Dio ${indice} pasos de 10 pasos`)
    indice++ // indice = indice +1
}

/* Bucle o ciclo Do While:
El bloque Do While es muy similar al while pero garantiza que el bloque de código se ejecute al menos una vez, incluso si la condición es false.
*/


