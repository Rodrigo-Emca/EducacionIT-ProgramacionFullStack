console.log(document.querySelector('title').textContent)

console.log(Math)

console.log(Math.PI)

/* Math.abs(n) devuelve el valor absoluto. O sea, sin signo. */
console.log(Math.abs(-3)) /* Devuelve 3 */

/* Math.ceil(x) Redondea hacia arriba el numero entero más cercano. */
console.log(Math.ceil(3.6)) //4
console.log(Math.ceil(3.5)) //4
console.log(Math.ceil(3.2)) //4

/* Math.floor(x) Redondea hacia abajo el numero entero mas cercano. */
console.log(Math.floor(3.6)) //3
console.log(Math.floor(3.5)) //3
console.log(Math.floor(3.1)) //3

/* Math.random() Devuelve un numero pseudoaleatorio entre 0 (inclusive) y 1 (excluido) */
console.log(Math.random())

/* Math.round(x) Redondea al numero entero más cercano. */
console.log(Math.round(3.8)) //4
console.log(Math.round(3.5)) //4
console.log(Math.round(3.2)) //3

/* Math.max(x[, y[, ...]]) Devuelve el valor mas grande entre los numeros */
console.log(Math.max(11, 14, 4, -5, 25, 58)) //58

/* Math.min(x[, y[, ...]]) Devuelve el valor mas grande entre los numeros */
console.log(Math.min(11, 14, 4, -5, 25, 58)) //-5