const valorRojo = document.getElementById("rojo")
const valorVerde = document.getElementById("verde")
const valorAzul = document.getElementById("azul")

const textoRojo = document.getElementById("textoRojo")
const textoVerde = document.getElementById("textoVerde")
const textoAzul = document.getElementById("textoAzul")

//Variables que almacenes los valores del input 
let inputRojo = valorRojo.value
let inputVerde = valorVerde.value
let inputAzul = valorAzul.value

//Reemplazar el InnerText en la etiqueta p con el value del input
textoRojo.innerText = inputRojo
textoVerde.innerText = inputVerde
textoAzul.innerText = inputAzul

//Crear una funcion para actualizar color 
//3 parametros, uno con cada color, define una varible que construya el color RGB en base a cada parametro. Modifica el color del body con la variable creada.

function actualizarColor(a, b, c) {
const colorRGB = `rgb(${a}, ${b}, ${c})` 
document.body.style.backgroundColor = colorRGB
}

//Actualizar input con addEventListener y el evento change

valorRojo.addEventListener("change", (e) => {
    inputRojo = e.target.value;
    textoRojo.innerText = inputRojo;
    actualizarColor(inputRojo, inputVerde, inputAzul)
})

valorVerde.addEventListener("change", (e) => {
    inputVerde = e.target.value;
    textoVerde.innerText = inputVerde;
    actualizarColor(inputRojo, inputVerde, inputAzul)
})

valorAzul.addEventListener("change", (e) => {
    inputAzul = e.target.value;
    textoAzul.innerText = inputAzul;
    actualizarColor(inputRojo, inputVerde, inputAzul)
})
