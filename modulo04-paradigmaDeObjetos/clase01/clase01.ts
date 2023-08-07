console.log("Hola mundo desde TypeScript!")

let nombre : string = "Maxi"

nombre = "Juan" //Reasignación de la variable. Typescript ayuda cuando aparecen errores. Por ejemplo, si quiero reasignar un number a un string.
//nombre = 2 //En este caso, habría un error y TS me ayuda a detectarlo rápidamente. 

let numero : number = 22
let booleano: boolean = true
let alumno: string = "Valentina"

class auto {

    //Defino las propiedades/atributos(Son las caracteristicas de los autos
    marca: string
    modelo: string
    cantidadRuedas: number
    cantidadPuertas: number

    //Constructor es un método o una función que se va a ejecutar siempre que se cree un objeto a partir de esta clase.
    constructor(marca: string, modelo: string, cantidadRuedas: number, cantidadPuertas: number) { 
        console.log('¡Se creó un auto!')
        this.marca = marca
        this.modelo = modelo
        this.cantidadRuedas = cantidadRuedas
        this.cantidadPuertas = cantidadPuertas
    }

}
class Estudiante {

    nombre : string //defino el atributo y el tipo de dato del atributo.
    edad : number = 0

    constructor(nom: string, age: number) {
        this.nombre = nom;
        this.edad = age;
        console.log('Se creó la instancia estudiante (El objeto)')
    }
}

const e1 = new Estudiante("Agustín", 23); //Siempre que haga un new, se va a ejecutar el constructor.
const e2 = new Estudiante("Federico", 19);
const e3 = new Estudiante("Rodrigo", 27);
const e4 = new Estudiante("Sofia", 25);
const e5 = new Estudiante("Carolina", 30);
console.log(e1)
console.log(e2)
console.log(e3)
console.log(e4)
console.log(e5)
