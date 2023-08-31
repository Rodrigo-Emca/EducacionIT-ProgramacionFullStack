

const sumarDosNumeros = function(a, b) {
    return a + b;
}
console.log(sumarDosNumeros(5,20))

const sumarArrow = (a, b) => {
    return a + b;
}

console.log(sumarArrow(15,3))

const sumarArrowDos = (a, b) => a + b //Cuando tengo una sola sentencia dentro de la función, puedo en las arrow quitar las llaves y el return.

console.log(sumarArrowDos(10,22))

const saludar = nombre => console.log('¡Hola mundo! Soy ' + nombre) //Cuando solo recibe un parametro, no hacen falta los paréntesis.
saludar('Max') 

const bienvenida = () => console.log('¡Bienvenidos, todos!')
bienvenida()