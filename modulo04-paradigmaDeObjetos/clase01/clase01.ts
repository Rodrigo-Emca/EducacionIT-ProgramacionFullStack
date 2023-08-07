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