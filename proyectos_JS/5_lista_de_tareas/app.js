const ingresarTarea = document.getElementById("ingresar-tarea")
const crearTarea = document.getElementById("boton-crear")
const listaTareas = document.getElementById("lista-de-tareas")
const eliminarTarea = document.querySelector(".trash")
const tareaIndividual = document.querySelector(".tarea")


function nuevaTarea() {
    const texto = ingresarTarea.value.trim()
    const div = document.createElement("div")

    div.classList.add("tarea")
    listaTareas.prepend(div)

    const inp = document.createElement("input")
    inp.setAttribute("type", "checkbox")
    div.appendChild(inp)

    const p = document.createElement("p")
    p.textContent = texto
    div.appendChild(p)

    const trash = document.createElement("i")
    trash.classList.add("bi", "bi-trash3", "trash")
    div.appendChild(trash)
}

crearTarea.addEventListener("click", function () {

    if (ingresarTarea.value == "") {
        alert("ingrese una tarea")
        ingresarTarea.focus()
        return
    }

    nuevaTarea()

    ingresarTarea.value = ""
    ingresarTarea.focus()
})

listaTareas.addEventListener("click", function (e) {

    console.log(e.target.closest(".tarea"))

    if (e.target.classList.contains("trash")) {
        let eliminarTarea = e.target.closest(".tarea")
        eliminarTarea.remove()
    }

    let tareaCompleta = e.target.closest(".tarea")

    if (e.target.type === "checkbox") {

        if (e.target.checked === true) {
            tareaCompleta.classList.add("completa")

        } else {
            tareaCompleta.classList.remove("completa")
        }
    }
})



















