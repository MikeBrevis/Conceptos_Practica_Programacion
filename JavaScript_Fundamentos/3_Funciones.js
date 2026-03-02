// Bloque de codigo que realiza una tarea especifica cuando se llama 

function saludo() {
    console.log("Hola a todos")
}

saludo() // se llama a la función

// Para devolver un resultado, se usa la palabra reservada return

function sumar() {
    return 1 + 1
}

// Guardar el resultado en una variable
const sumarFuntion = sumar()
console.log(sumarFuntion)

// Ver en consola
console.log(sumar())


// Funcion que devuelve un numero aleatoreo del 1 al 10

function getRandomNumeber() {

    const random = Math.random() // genera un numero aleatoreo del 0 al 1
    const multiplied = random * 10 // multiplica el numero decimal para que este de 0 a 10
    const rounded = Math.floor(multiplied) // Se redonde el numero hacia abajo para que este entre 0 y 9
    const result = rounded + 1 // Se suma 1 para que el numero este entre 1 y 10

    return result
}

console.log("Numero aleatorio entre 1 y 10 es " + getRandomNumeber())

/*  --------------------------------------------------------- PARAMETROS */








/*  --------------------------------------------------------- FUNCIONES FLECHA */

// sintaxis basica
// Son siempre anonimas y expression, es decir, que no tiene  nombre y se le asigna una variable

const miArrowFuntion = () => {
    // codigo a ejecutar
}

// return implicito: cuando se tiene solo una expresion, se pueden omitir las llaves y la palabra return

// Declaración de función regular
function sumar(a, b) {
    return a + b
}

// Función flecha
const sumarFlecha = (a, b) => {
    return a + b
}

// Función flecha con return implícito
const sumarFlechaIm = (a, b) => a + b

/*  --------------------------------------------------------- RECURSIVIDAD */

// tecnica en donde una funcion se llame a si misma

function cuentaAtras(numero) {
    // Condición base: Si el número que recibe es // Es importante tener SIEMPRE una condicion base, de no ser asi, la funcion se llamara infinitamente
    // menor de 0 entonces salimos de la función
    if (numero <= 0) {
        return
    }

    // Si el número era mayor o igual a 0, lo mostramos
    console.log(numero)

    // Y llamamos a la función con el número anterior
    cuentaAtras(numero - 1)
}

cuentaAtras(8)

// Ejemplo de recursividad devolviendo un valor

function factorial(n) {
    // Condición base: Si el número es 0 o 1, devolvemos 1
    // y no llamamos a la función de nuevo
    if (n === 0 || n === 1) {
        return 1
    } else {
        // Si el número es mayor que 1, llamamos a la función
        return n * factorial(n - 1)

    }
}
console.log(factorial(5)) // Resultado: 120

/*  --------------------------------------------------------- SCOPE */

let global = 'Soy global'

function externa() {
    let externa_var = 'Soy de la función externa'

    function interna() {
        let interna_var = 'Soy de la función interna'

        // Puede acceder a todas:
        console.log(interna_var)  // "Soy de la función interna"
        console.log(externa_var)  // "Soy de la función externa"  
        console.log(global)       // "Soy global"
    }

    // Aquí sólo puedes acceder a "externa_var" y "global"
    interna()
    // console.log(interna_var) // ❌ Error: no puede acceder
}

// Aquí sólo puedes acceder a la variable "global"
externa()

/*  --------------------------------------------------------- CLOSURES */

// ✅ Closure - datos protegidos
function crearContador() {
    let contador = 0 // Variable privada

    return {
        incrementar: function () {
            contador++
            return contador
        },
        decrementar: function () {
            contador--
            return contador
        },
        obtenerValor: function () {
            return contador
        }
    }
}

const miContador = crearContador()

console.log(miContador.incrementar()) // 1
console.log(miContador.incrementar()) // 2
console.log(miContador.decrementar()) // 1

// No podemos acceder directamente a 'contador'
// miContador.contador = 1000 // No funciona


