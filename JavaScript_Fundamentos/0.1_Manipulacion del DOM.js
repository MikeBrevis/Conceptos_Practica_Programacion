// Acceder a elementos del HTML

//getElementById: Optener elementos por el ID 
const contenedor = document.getElementById("contenedor");
console.log(contenedor.innerHTML);

const titulo = document.getElementById('titulo');
console.log(typeof titulo); // objeto
console.log(titulo.innerText); // Texto interno del elemento
console.log(titulo.tagName); // Acceso a la etiqueta

const aceitunas = document.getElementById('aceitunas');
console.log(aceitunas.className) // Acceso a la clase del elemento

//getElementByclassName: Optener elementos por la clase
const toppings = document.getElementsByClassName('topping');
console.log(toppings);
console.log(toppings[0]); //Accede al primere elementop del array

//getElementByTagName: Optener elementos por la etiqueta
const lista = document.getElementsByTagName('li');
console.log(lista);

//Los querySelector buscan elementos con metodos CSS

//querySelector: Seleccionar el primer elemento que cumpla el criterio
//querySelectorAll: Seleccionar todos los elemento que cumpla el criterio

const primeraCebolla = document.querySelector(".topping.fondo-naranja")

const primeraCebollaOtra = document.querySelectorAll("ul li:not(.fondo-marron")

console.log(primeraCebolla)
console.log(primeraCebollaOtra) // Mismo resultado










