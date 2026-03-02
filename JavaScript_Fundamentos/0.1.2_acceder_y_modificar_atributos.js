const listaToppings = document.getElementById("lista-ingredientes")

console.log(listaToppings.innerText) //Devuelve texto interno de la lista

console.log(listaToppings.textContent) //Devuelve texto interno de la lista con la indentacion 

console.log(listaToppings.innerHTML) //Devuelve la estructura HTML

// Modificar el texto
const modTitulo = document.getElementById("titulo")
console.log(modTitulo)

modTitulo.innerText = "Nuevo menu de la tienda"

// Modificar atributos de un elemento
const enlace = document.getElementsByTagName("a");

console.log(enlace[0].getAttribute("href")) // Link del enlace

console.log(enlace[0].removeAttribute("href")) // Remueve atributos

console.log(enlace[0].setAttribute("href", "https://www.papajohns.cl/")) // Asignar valor a un atributo especifico

console.log(enlace[0].getAttribute("href")) // muestra el nuevo enlace


