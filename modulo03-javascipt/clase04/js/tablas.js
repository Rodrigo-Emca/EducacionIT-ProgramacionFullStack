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

console.warn('--------------------------------------------------------------------')

const tbody = document.querySelector('tbody')
console.log(tbody)

let html = ''

for (let i = 0; i<arrayPersonas.length; i++){
    html += `
    <tr>
        <td>${arrayPersonas[i].nombre}</td>
        <td>${arrayPersonas[i].apellido}</td>
    </tr>
    `
}

tbody.innerHTML = html