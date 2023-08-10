import { Auto } from "./Auto";
import { Motor } from "./Motor";
import { Rueda } from "./Rueda";

console.log('hola mundo TS!')

const m1 = new Motor(1600)
const m2 = new Motor(2000)

const arrayRuedas = [new Rueda(29), new Rueda(39), new Rueda(30), new Rueda(20)]

/* Creo un objeto, lo guardo en una constante, y ejecuto el constructor con new Auto(aqui se exigen 3 argumentos) */
const a1 = new Auto('Gol', 'Rojo', 4, 'VW', m1, [new Rueda(29), new Rueda(35), new Rueda(20), new Rueda(20)])
console.log(a1)

const a2 = new Auto ('Focus', 'Azul', 5, 'Ford', m2, arrayRuedas)
console.log(a2)

const a3 = new Auto ('147', 'Verde', 2, 'Fiat', m1, arrayRuedas)
console.log(a3)

a3.acelerar()
a3.motor.getCilindrada()

//console.log(a3.motor.cilindrada) /* En este caso, la propiedad cilindrada esta en privado, y no se puede acceder a ella. Solo puede se puede acceder, por medio de un método.*/
console.log(a3.motor.getCilindrada())