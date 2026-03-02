const segundoTopping = document.querySelector("#cebollas")

console.log(segundoTopping.classList) // Muestra las clases del elemento

segundoTopping.classList.add("texto-verde") // Agrega una clase al elemento html

// verificar si un elemento posee una clase
console.log(segundoTopping.classList.contains("cebollas"))//false
console.log(segundoTopping.classList.contains("topping"))//true

//eliminar una clases
segundoTopping.classList.remove("topping") // remueve una clase al elemento html

