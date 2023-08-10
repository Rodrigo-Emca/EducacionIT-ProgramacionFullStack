export class Rueda {

    presionAire: number

    constructor(presAire: number){
        this.presionAire = presAire
    }

    getPresionAire() {
        console.log('La presión del aire es ', this.presionAire)
    }
}