const listaDeToppings = document.getElementById("lista-ingredientes")

const toppingNuevo = document.createElement("li") // crea un elemento
toppingNuevo.classList.add('topping', 'fondo-marron') //agregar classes
toppingNuevo.innerText = 'Queso extra' // pesonaliza el texto texto 

listaDeToppings.append(toppingNuevo)

