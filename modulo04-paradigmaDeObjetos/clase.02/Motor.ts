export class Motor {

    private cilindrada: number

    constructor(cilin: number) {
        this.cilindrada = cilin
    }

    getCilindrada() {
        //console.log('La cilindrada es: ', this.cilindrada)
        return this.cilindrada
    }
}