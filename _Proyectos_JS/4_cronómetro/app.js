const cronometro = document.getElementById("cronometro")
const botonInicioPausa = document.getElementById("boton-inicio-pausa")
const botonReiniciar = document.getElementById("boton-reiniciar")
let interval = null

let totalSegundos = 0

function formatearTiempo(se) {
    let segundos = se % 60
    let minutos = Math.floor((se % 3600) / 60)
    let horas = Math.floor(se / 3600)

    let s = String(segundos).padStart(2, "0")
    let m = String(minutos).padStart(2, "0")
    let h = String(horas).padStart(2, "0")

    return `${h}:${m}:${s}`
}

function iniciar() {
    botonInicioPausa.classList.remove("pausar")
    botonInicioPausa.classList.add("iniciar")
    botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>'
}

function pausar() {
    botonInicioPausa.classList.remove("iniciar")
    botonInicioPausa.classList.add("pausar")
    botonInicioPausa.innerHTML = '<i class="bi bi-pause-fill"></i>'
}

botonInicioPausa.addEventListener("click", function () {

    if (interval === null) {
        interval = setInterval(function () {
            totalSegundos++
            cronometro.innerText = formatearTiempo(totalSegundos)
        }, 1000)

        pausar()

    } else {
        clearInterval(interval)
        interval = null
        iniciar()
    }
})

botonReiniciar.addEventListener("click", function () {
    clearInterval(interval)
    interval = null
    totalSegundos = 0
    cronometro.innerText = "00:00:00"
    iniciar()
})
















