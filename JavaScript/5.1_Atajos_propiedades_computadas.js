/*  --------------------------------------------------------- ATAJO AL CREAR UN OBJETO */

// Crear un objeto a partir de variables ya declaradas
const names = "spidy"
const universe = 42
const powers = ['web', 'invisibility', 'spider-sense']

const spiderman = {
    names: names, // spidy
    universe: universe, // 42
    powers: powers
}

console.log(spiderman.names)
console.log(spiderman.universe) // Recuperar propiedad con punto
console.log(spiderman["powers"]) // Recuperar propiedad con corchetes



// Se puede usar un atajo para crear el objeto siempre y cuando la propiedad y la variable tengan el mismo nombre
const spiderman2 = { names, universe, powers }
console.log(spiderman)

// Recuperar el valor de una propiedad y guardarlo en una variable
const universe2 = spiderman.universe
console.log(universe2)

const powers2 = spiderman["powers"][1]
console.log(powers2) // invisibility

/*  --------------------------------------------------------- DESESTRUCTURACION */

// Recupera el valor de una propiedad y guardarlo en una variable de una vez. La variable tendra el mismo nombre de la propiedad
const spiderman3 = {
    nombre: "Gonzales",
    universo: 54,
    poder: ['metal', 'vision', 'super power']
}

const { universo, poder } = spiderman3
console.log(universo) // 54
console.log(poder) // ['metal', 'vision', 'super power']

// Renombrar variables y valores por defecto
const { universo: universeNumber } = spiderman3
console.log(universeNumber) // 54

// Si la propiedad no existe, se puede asignar un valor por defecto
const { isAvenger = true } = spiderman3
console.log(isAvenger)

//Objetos anidados y atajos
const spiderman4 = {
    name: 'Tipoko',
    universe: 99,
    powers: ['slow-run', 'cow-sense'],
    partner: {
        nam: 'Mary Jane',
        universe: 42,
        powers: ['red hair', 'blue eyes']
    }
}

console.log(spiderman4.partner.nam) // Mary Jane

// Guardar el objeto partnert en una variable
const {partner:{nam}} = spiderman4
console.log(nam) // Mary Jane


