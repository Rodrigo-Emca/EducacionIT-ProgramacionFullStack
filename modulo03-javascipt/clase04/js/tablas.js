console.log(document.querySelector('title').textContent)

const solTorres = {nombre: 'Sol', apellido: 'Torres'}
const leilaRomero = {nombre: 'Leila' , apellido: 'Romero'}
const francoCarril = {nombre: 'Franco', apellido: 'Carril'}
const jeronimoVega = {nombre: 'Jeronimo', apellido: 'Vega'}

const arrayPersonas = [solTorres, leilaRomero, francoCarril, jeronimoVega]

console.log(arrayPersonas) //Puedo acceder al array completo
console.log(arrayPersonas[0]) //Acceder a un objeto dentro del array
console.log(arrayPersonas[1].nombre) //Acceder a alguna propiedad de un objeto particular
console.log(arrayPersonas[2].apellido)