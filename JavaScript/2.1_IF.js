const edad = 15 //Entra a la condicion de "o es mayor de edad"

if (edad >= 18) {
    console.log("Es mayor de edad")

} else if (edad >= 16) {
    console.log("Es CASI mayor de edad")

} else {
    console.log("No es mayor de edad")
}

// Operadores logicos 

const edad2 = 18
const carnet = true

if (edad2 >= 18 && carnet) { // se ejecuta si la edad es igual o mayor a 18 Y (&&) si carnet es true
    console.log("Puede conducir")
} else {
    console.log("No puede conducir")
}

// Designar variables con el resultado de una condicion (refactorización)

const Diego = 18
const tieneCarnet = true
const puedeConducir = Diego >= 18 && tieneCarnet // true

if (puedeConducir) {
    console.log("Puede conducir")
} else {
    console.log("No puede conducir")
}

