function saludar(nombre) {
    console.log(`Hola ${nombre}`)
}

saludar("MIKE") //Hola, MIKE
saludar("Guts") // Hola, Guts

// Se pueden designar varios parametros

function suma(a, b) { // Dos PARAMETROS, a y b
    return a + b
}

function resta(a, b) {
    return a - b
}

const resultadoSuma = suma(2, 5) // dos ARGUMENTOS, 2 y 5
console.log("La suma de ambos numeros es " + resultadoSuma)

const resultadoResta = resta(2, 5)
console.log("La resta de ambos numeros es " + resultadoResta)

function mostrarArrays(mensaje, array) {
    console.log(mensaje)
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

const array1 = [1, 2, 3, 4, 5]
const array2 = ["MIKE", "Guts", "Loba"]

mostrarArrays('Muestra el array de numeros ', array1)
mostrarArrays('Muestra el array de nombres ', array2)

/*  --------------------------------------------------------- FUNCIONES COMO PARAMETROS 
las funciones son ciudadanos de primera clase (first-class citizens). Esto significa que las funciones se pueden tratar como cualquier otro valor: se pueden asignar a variables, pasar como argumentos a otras funciones, y devolver desde otras funciones
*/

//Ejemplo de calculadora
function sumar(num1, num2) {
    return num1 + num2
}

function multiplicar(a, b) {
    return a * b
}

function restar(a, b) {
    return a - b
}

// Función que recibe una operación como parámetro
function calcular(num1, num2, operacion) {
    const resultado = operacion(num1, num2)
    return console.log(`El resultado es ${resultado}`)
}

// Usamos diferentes operaciones
calcular(5, 3, sumar)       // El resultado es: 8
calcular(5, 3, multiplicar) // El resultado es: 15
calcular(5, 3, restar)      // El resultado es: 2

/*  --------------------------------------------------------- FUNCIONES ANONIMAS */
// No es necesario darle un nombre a la funcion
const funtionExpressionSum = function (a, b) {
    return a + b
}
console.log(funtionExpressionSum(1, 2))

/*  --------------------------------------------------------- FUNCIONES ANONIMAS COMO PARAMETROS */
// Función anónima pasada directamente
calcular(10, 2, function (a, b) {
    return a / b
})
// El resultado es: 5

//Las funciones como parámetros nos permiten crear código más flexible y reutilizable:
function repetirAccion(veces, accion) {
    for (let i = 0; i < veces; i++) {
        accion(i)
    }
}

// Diferentes acciones
repetirAccion(5, function (numero) {
    console.log('Iteración número: ' + numero)
})

repetirAccion(5, function (numero) {
    console.log('⭐'.repeat(numero + 1))
})


// Scope chain: si JS no encuentra la variable dentro de la funcion, sube un nivel al entorno

// ejemplo 1
let saludo = "Hola Mike"

function mostrarSaludo() {
    console.log(saludo)
}
mostrarSaludo()

// ejemplo 2
function exterior() {
    let mensaje = "Desde exterior"

    function interior() {
        console.log(mensaje)
    }
    interior()
}
exterior()






