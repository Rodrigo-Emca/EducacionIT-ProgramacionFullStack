
/* El Switch es una estructura tambien de control, que permite tomar decisiones en multiples casos posibles. Se utiliza para comparar una expresión en varios CASOS y ejecutar el bloque de código correspondiente. */

//let numero = prompt('Ingrese un numero entre 1 y 4')


/* switch (numero) {
    case "1":
        console.log('El usuario ingresó la opción 1')
        break;
    case "2":
        console.log('El usuario ingresó la opción 2')
        break;
    case "3":
        console.log('El usuario ingresó la opción 3')
        break;
    case "4":
        console.log('El usuario ingresó la opción 4')
        break;

    default: 
        // En el caso en que el usuario haya ingresado una opción no válida o no contemplada, puedo agregarlo a continuación.
        console.log('Opción incorrecta')
        break; 
        // El default break, corta el codigo al momento en que se cumpla algún caso, y no seguír ejecutando el código.
} */

/* Escribir un programa que solicite al usuario un número que represente un mes del año 1-12 y determine la cantidad de días que tiene ese mes. Utilizando una estructura de control switch para mostrar la cantidad de días que tiene ese mes. Si se ingresa un número fuera de rango, mostrar el mensaje. (Mes inválido) 
31 días: Enero, marzo, mayo, julio, agosto, octubre y diciembre.  
30 días: Abril, junio, septiembre y noviembre. 
Tienen 28 días: Febrero
*/

let numeroMes = prompt('Ingrese un número acorde al mes del año. Ej.: Para ENERO ingrese 1, para NOVIEMBRE ingrese 11.')
let mesIngresado = Number(numeroMes)

switch (numeroMes) {
    case "1":
    case "3":
    case "5":
    case "7":
    case "8":
    case "10":
    case "12":
        console.log('El mes ingresado tiene 31 dias')
        break;

    case "4":
    case "6":
    case "9":
    case "11":
        console.log('El mes ingresado tiene 30 dias')
        break;

    case "2":
        console.log('El mes ingresado tiene 28 dias')
        break;

    default:
        console.log("Ingrese un número de mes válido.")
        break;
}
