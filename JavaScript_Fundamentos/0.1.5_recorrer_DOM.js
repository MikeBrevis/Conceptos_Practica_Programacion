const listaToppings = document.getElementById("lista-ingredientes")

// sellecionar nodo padre 
console.log(listaToppings.parentElement) //Selecciona al nodo padre del elemento

// encadenamiento
console.log(listaToppings.parentElement.parentElement) //Selecciona al nodo padre del padre del elemento

//seleccionar nodos hijos
console.log(listaToppings.children) //Selecciona a los nodos hijos del elemento
console.log(listaToppings.children[0]) //Selecciona el primer elemento hijo

// Trabajar con elementos hijos
console.log(listaToppings.firstElementChild) 
console.log(listaToppings.lastElementChild)

// Hermanos en la misma gerarquia
console.log(listaToppings.previousElementSibling) 







