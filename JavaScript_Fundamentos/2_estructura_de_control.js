
/*  --------------------------------------------------------- bucles con WHILE */

// Estrucura de control que permite repetir una accion tantas veces como se requera, siempre que se cumpla una condición

let numeroWhile = 10

while (numeroWhile >= 0) {
    console.log("quedan " + numeroWhile)
    numeroWhile = numeroWhile - 1
}
console.log("Despegue!")

// Break para salir del bucle

let numeroWhile2 = 10

while (numeroWhile2 >= 0) {

    console.log("quedan " + numeroWhile2)

    if (numeroWhile2 == 5) { // se rompe el bucle al llegar a 5
        break
    }

    numeroWhile2 = numeroWhile2 - 1
}
console.log("Se rompe cuando llega a 5")

// Continue omite la ejecucion y salta a la siguiente iteración

let numeroWhile3 = 10

while (numeroWhile3 > 0) {
    numeroWhile3 --

    if (numeroWhile3 % 2 == 0) { // omite todos los numero pares
        continue
    }
    console.log("quedan " + numeroWhile3)
}
console.log("Se salta todos los numero pares!")

/*  --------------------------------------------------------- bucles DO WHILE */
// Se ejecuta al menos una vez antes de entrar al bucle

//Podemos conbinarlo con una funcion integrada de js: confirm

let respuesta

/* do {
    respuesta = confirm("quieres seguir en el codigo?") // produce true o false que podemos guardar en una variable
} while (respuesta) // mientras sea true, se ejecuta el codigo
 */

/*  --------------------------------------------------------- Expresiones y declaraciones */

let declarar = 10 // Sentencia que define una variable. No devuelve un valor
console.log(declarar)

console.log(2 + 2) // Se expresa un valor que devuelve un resultado

/*  --------------------------------------------------------- Bucles FOR */

// imprimir numeros del 1 al 10
// se define: variable, condicion, actualizacion

for (let number = 1; number <= 10; number++) {
    console.log("vamos en el " + number)
}

for (let i = 10; i >= 0; i--) {
    if (i == 0) {
        console.log("Despegue!")
    } else {
        console.log("Faltan " + i + " segundos")
    }
}

// continue y break

for (let i = 0; i < 10; i++) {
    const esPar = i % 2 === 0
    if (esPar) {
        continue
    }

    // se muestran solo los impares
    console.log(i)

    // break al llegar a 7
    if (i === 7) {
        break
    }
}


// Bucles anidados con for 
for (let i = 1; i <= 10; i++) { // pasa al siguiente valor de i una vez se cumplas las condiciones del for anidado
    for (let j = 1; j <= 10; j++) {
        const resultado = i * j
        console.log(i + ' x ' + j + ' = ' + resultado)
    }
}

/*  --------------------------------------------------------- SWITCH */

//Permite ejecutar diferentes bloques de codigo dependiendo del valor de una expresión.

const dia = "miercoles"

switch (dia) {

    case "lunes":
        console.log("Hoy es lunes :(")
        break

    case "miercoles":
        console.log("Mitad de semana :D")
        break

    default: // Opcional
        console.log("Hoy no es lunes!")
        break

}

const queDiaEs = new Date().getDay() // getDay extrae el dia de la semana del objeto Date // extrae un numero del 0 (domingo) al 6 (sabado)
console.log(queDiaEs) // 5 = viernes

switch (queDiaEs) {

    case 0:
        console.log("Hoy es domingo");
        break; // No olvidar aplicar break despues de cada caso
    case 1:
        console.log("Hoy es lunes");
        break;
    case 2:
        console.log("Hoy es martes");
        break;
    case 3:
        console.log("Hoy es miércoles");
        break;
    case 4:
        console.log("Hoy es jueves");
        break;
    case 5:
        console.log("Hoy es viernes");
        break;
    case 6:
        console.log("Hoy es sábado");
        break;
}













