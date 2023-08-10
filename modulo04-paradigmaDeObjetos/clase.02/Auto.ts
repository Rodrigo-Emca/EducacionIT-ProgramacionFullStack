import { Motor } from "./Motor"
import { Rueda } from "./Rueda"

export class Auto {
    
    color: string
    modelo: string
    cantidadPuertas: number
    marca: string
    motor: Motor
    ruedas: Array<Rueda>

    /* Metodo especial que me permite construir la instancia de esta clase */
    /* El metodo constructor se ejecuta cuando se hace un new de Auto() */
    constructor(modelo: string, color: string, cantidadPuertas: number, marca: string, motor: Motor, ruedas: Array<Rueda>) {
        console.log('Se ejecutó el constructor')
        this.modelo = modelo
        this.color = color
        this.cantidadPuertas = cantidadPuertas
        this.marca = marca
        this.motor = motor
        this.ruedas = ruedas
    }

    /* Metodos (funciones) */
    acelerar() {
        console.log('Voy a ir a 10km/h.')
    }

    // acelerar(km: number) {
    //     console.log('Voy a ir a ${km} km/h.')
    // }

    // acelerar(km: number, tieneNitro: boolean) {
    //     console.log('Voy a ir a ${km} km/h-')
    // }
}