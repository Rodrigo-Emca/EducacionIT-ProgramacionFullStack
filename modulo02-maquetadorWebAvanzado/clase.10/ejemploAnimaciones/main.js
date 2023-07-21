import './styleAnimaciones.css'

const webdev = document.querySelector('#webdev') /* seleccionar un elemento html */
console.log(webdev)

const guy = document.querySelector('#guy')
console.log(guy)

window.addEventListener('scroll', function(){
    /* "Escucho" cuando el usuario haga scroll */

    let posObj = webdev.getBoundingClientRect().top
    console.log(posObj)

    if (posObj < 570 ) {
        webdev.style.animation = 'left-to-right 2s forwards'
        guy.style.animation = 'right-to-left 2s forwards'
    }
})