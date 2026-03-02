/*  --------------------------------------------------------- OBJETOS */
// Son una coleccion de propiedades que definen a un elemento a traves de una clave y valor

// Objeto que representa a una persona
const objetoPersona = {
    name: "Dani", // name = clave; "Dani" = valor
    ager: 30,
    isWorking: true
}

// Las propiedades y objetos pueden ser de cualquier tipo
// Pueden alojar funciones, a las cuales se les llama metodos

const objetoTwo = {
    name: "Dani",
    age: 30,
    isWorking: true,
    family: ["miguel", "maria"], // array
    adress: { // objeto
        street: "monjitas",
        number: 758,
        city: "santiago"
    },
    walk: function () { // <- metodo
        return console.log("Esta caminando")
    }
}

/*  --------------------------------------------------------- ACCEDER A PROPIEDAD O METODO DEL OBJETO*/

// PROPIEDAD
console.log(objetoTwo.name) // Dani

// ARRAY
console.log(objetoTwo.family[1]) // maria

// OBJETO ANIDADO
console.log(objetoTwo.adress.number) // 758

// Si intentamos acceder a alguna propiedad que no existe, devuelve undefined
console.log(objetoTwo.box) // undefined

// METODO
objetoTwo.walk()

/*  --------------------------------------------------------- AÑADIR NUEVAS PROPIEDADES O MODIFICAR EXISTENTES*/

objetoTwo.father = "Juan"
console.log(objetoTwo)

/* 
objetoTwo = {
name: 'Dani',
age: 30,
isWorking: true,
family: [ 'miguel', 'maria' ],
adress: { street: 'monjitas', number: 758, city: 'santiago' },
walk: [Function: walk],
father: 'Juan'   < -- NUEVA PROPIEDAD
} */

// Se pueden modificar objetos existentes de la misma forma

// ELIMINAR

delete objetoTwo.age
console.log(objetoTwo)

/*
objetoTwo = {
name: 'Dani',
//////// age: 30, ////// PROPIEDAD ELIMINADA
isWorking: true,
family: [ 'miguel', 'maria' ],
adress: { street: 'monjitas', number: 758, city: 'santiago' },
walk: [Function: walk],
father: 'Juan'
} */

// Considerar que este metodo elimina la propiedad directamente

/*  --------------------------------------------------------- EJERCICIO PRACTICO */
/* Tenemos una función que recibe dos parámetros. name y subs. Haz que la función devuelva un objeto con la siguiente información:

-name con el valor del parámetro name
-subscribers con el valor del parámetro subs
-hash, con el valor de la longitud del string name multiplicado por el parámetro subs
-Un método getStatus que devuelva el texto El canal de <name> tiene <subs> suscriptores. Por ejemplo, para name = 'Dani' y subs = 100, el método getStatus devolvería El canal de Dani tiene 100 suscriptores.

¡Ojo! El método getStatus debe devolver el texto, NO imprimirlo por consola. */

function createObject(name, subscribers) {
    const data = { name, subscribers }

    let objectNameLength = data.name.length * subscribers // 80
    data.hash = objectNameLength

    data.getStatus = function () {
    return (`El canal de ${this.name} tiene ${this.subscribers} suscriptores`)

    }
    return data
}



