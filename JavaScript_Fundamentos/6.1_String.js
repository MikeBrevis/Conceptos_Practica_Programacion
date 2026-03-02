// Template literal : interpolar variables y string multilinea.

// Interpolación de variables
let nombre = "ana"
let edad = 25

let presentacion = `Me llamo ${nombre} y tengo ${edad} años`
console.log(presentacion)

// string multi linea
let poema = `
Roses are red,
Violets are blue,
JavaScript is awesome,
And so are you! 
`
console.log(poema)

// Propiedades y metodos en los string

//lenght: devuelve la longitud de la cadena
let texto = "javascript"
console.log(texto.length) // 10

let vacio = ""
console.log(vacio.length) // 0

const textox = 'Aprende JavaScript'

// Metodos de busqueda

const frase = 'JavaScript es genial y JavaScript es potente'

// indexOf - encuentra la primera ocurrencia
console.log(frase.indexOf('potente')) // primera ocurrencia en la posición 37
console.log(frase.indexOf('a')) // primera ocurrencia en la posición 1
console.log(frase.indexOf('Python')) // -1 (no encontrado)

// lastIndexOf - encuentra la última ocurrencia
console.log(frase.lastIndexOf('JavaScript')) // ultima ocurrencia en la posición 23

// includes - verifica si contiene un substring
console.log(frase.includes('potente')) // true
console.log(frase.includes('triste')) // false

// startsWith y endsWith
console.log(frase.startsWith('JavaScript')) // true
console.log(frase.endsWith('potente')) // true


