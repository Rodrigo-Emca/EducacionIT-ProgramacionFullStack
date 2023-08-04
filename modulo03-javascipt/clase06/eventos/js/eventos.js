const btnCambiarColorRed = document.querySelector('#btn-cambiar-color-red')
const btnCambiarColorGolden = document.querySelector('#btn-cambiar-color-dorado')

const fondoColor = document.querySelector('#fondo-color')
//console.log(btnCambiarColorRed, fondoColor)

function cambiaColor(clr) {
    fondoColor.style.backgroundColor = clr
}

btnCambiarColorRed.addEventListener('click', function(){
    //cambiaColor('red')
    fondoColor.style.backgroundColor = 'crimson'
})

btnCambiarColorGolden.addEventListener('click', function(){
    //cambiaColor('red')
    fondoColor.style.backgroundColor = 'gold'
})