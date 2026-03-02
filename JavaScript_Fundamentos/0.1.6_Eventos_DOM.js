// Cambios que ocurren en el sitio web como resultado de la interaccion con el usuario o otros eventos.

// Elemento target: recibe una accion que desencadena un evento.

// Trigger: desencadenante

//Event Handler: funcion que maneja lo que ocurre cuando se desencadene un evento

// Se puede llamar a una funcion incluyendo la propiedad de onclick en HTML, pero no es la mejor forma.

/* function mostrarClick(ingrediente) {
    console.log(`click en ${ingrediente}`)
}  */

// .addEvenListener()
// conexión entre un evento, elemento y una funcion

const toppings = document.getElementsByClassName("topping"); // referencia del elemento en el DOM
console.log(toppings) // retorna una coleccion HTML

for (const t of toppings) {
    console.log(t) //muestra cada elemento de la coleccion
t.addEventListener('click', mostrarClick) // asociacion entre el elemento y la funcion
}

function mostrarClick(e) { // llama a un evento como objeto que usa como argumento
    console.log(e.target.innerText) // muestra el texto de cada elemento
}






