// Seleccionar elementos desde el DOM: llamar al boton y al texto con getElementById
const boton = document.getElementById("boton-color")
const color = document.getElementById("color")
const textColor = document.getElementById("color")

// Generar una funcion que maneje el proceso de generar un color al azar

function generarColor() {
    let digitos = "0123456789ABCDEF"; // Cadena de caracteres con todos los digitos posibles para generar el color (0-9: A-F)
    let colorHex = "#" // guarda el color que se genera

    for (let i = 0; i < 6; i++) { // se define un ciclo for con 6 iteraciones 
        let indiceAleatorio = Math.floor(Math.random() * 16) // arroja un numero aleatoreo entre 0 y 15 (los indices de la cadena digitos)
        colorHex += digitos[indiceAleatorio]
    }
    return colorHex
}

// Se busca asociar la funcion cuando se haga click en el boton

boton.addEventListener("click", function() {
    // llamar con una variable a la funcion que genera el codigo
    let hexColor = generarColor()

    //actualizar color
    color.textContent = hexColor
    color.style.color = hexColor
    boton.style.backgroundColor = hexColor
    document.body.style.background = hexColor
})






