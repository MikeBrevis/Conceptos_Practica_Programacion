//Iterando con for...in 

//Permite crear un bucle que itera sobre todas las propiedades enumerables de un objeto, en orden arbitrario

const spiderman = {
    nombre: "Gonzales",
    universo: 54,
    poder: ['metal', 'vision', 'super power']
}

for (const property in spiderman) {
    console.log(property)
    console.log(spiderman[property])
}

// Object.keys: pasa las keys del objeto a un array
console.log(Object.keys(spiderman))  // [ 'nombre', 'universo', 'poder' ]

// Object.values: pasa los valores del objeto a un array
console.log(Object.values(spiderman))  // [ 'Gonzales', 54, [ 'metal', 'vision', 'super power' ] ]

// Object.entries: retorna un array de arrays con la propiedad y su valor
console.log(Object.entries(spiderman))

const entries = Object.entries(spiderman)
entries.forEach(entry => {
    console.log(entry)
})


// Podemos acceder tanto a las propiedades como a los valores
const entrie = Object.entries(spiderman)

entries.forEach(entry => {
    const property = entry[0]
    const value = entry[1]

    console.log(`${property}: ${value}`)
})

/*  --------------------------------------------------------- EJERCICIO PRACTICO 
Tienes una función que recibe un objeto como parámetro. La función debe retornar un array con el nombre de las propiedades que su tipo sea boolean.
Por ejemplo, para el objeto { a: true, b: 42, c: false } la función debe retornar ['a', 'c'] ya que son las dos propiedades que tienen valores booleanos.*/

const ob = { a: true, b: 42, c: false, d: true, f: 502 }
const arrayValue = []

for (const property in ob) {
    if (ob[property] == true || ob[property] == false) {
        arrayValue.push(property)
    }
}
console.log(arrayValue)

function getKeysOfBooleanValues(obj) {
    const arrayValue = []

    for (const clave in obj) {
        if (obj[clave] === true || obj[clave] === false) {
            arrayValue.push(clave)
        }
    }
    return arrayValue
}
console.log(getKeysOfBooleanValues({ a: 1, b: 2, c: 3 }))


