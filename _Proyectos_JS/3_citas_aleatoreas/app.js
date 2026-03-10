let botonElem = document.getElementById("boton-cambiar-cita")
let citaElem = document.getElementById("cita")
let autorElem = document.getElementById("autor")


function generarEntero(max) {
    return Math.floor(Math.random() * max)
}

function cambiarCita() {
    let indiceAleatoreo = generarEntero(citas.length)
    citaElem.innerText = citas[indiceAleatoreo].cita
    autorElem.innerText = citas[indiceAleatoreo].autor
}
cambiarCita() // llama a una cita aleatorea al recargar la pagina

botonElem.addEventListener("click", cambiarCita) 


