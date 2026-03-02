const gameSystem = {
    name: "PS5",
    price: 499,
    specs: {
        storage: "1TB",
        ram: "16GB"
    }
}

/* gameSystem.specification.ram */
// Error: Cannot read property 'ram' of undefined
// Al intentar acceder a una propiedad de un objeto que no existe, se genera un error y detiene la ejecución del código.

// Optional chaining

console.log(gameSystem.specifications?.ram); // undefined
// El operador de encadenamiento opcional (?.) permite acceder a propiedades anidadas de un objeto sin causar un error si alguna de las propiedades intermedias no existe. Si la propiedad anterior al operador es null o undefined, la expresión completa devuelve undefined en lugar de lanzar un error.

console.log(gameSystem.specs?.ram); // 16GB

/*  --------------------------------------------------------- EJERCICIO PRACTICO 
Somos un equipo de submarinistas. Estamos explorando el fondo marino pero no sabemos qué nos vamos a encontrar porque vamos casi a ciegas. Vamos con un pequeño robot y funciona con un programa que recibe tres parámetros:

Un objeto con la información del fondo marino
Una cadena de texto con el nombre del lugar que queremos explorar
Una cadena de texto con el nombre del objeto que queremos encontrar
Por ejemplo. Con el objeto ocean que nos llega como primer parámetro, podemos explorar el lugar deep y buscar el objeto treasure. Así que intentaríamos acceder a ocean.deep.treasure.

Si lo encontramos el robot nos devuelve true y si no lo encuentra nos devuelve false. Sólo necesitamos saber si lo hemos encontrado o no, no necesitamos saber su valor.

Vamos a necesitar asegurarnos que el robot no se rompa, que cuesta mucho dinero, en el caso que no pueda encontrar el lugar o el objeto que le hemos pedido. Así que vamos a usar el operador de encadenamiento opcional para evitar errores.

Pista: ¡Recuerda que en una clase anterior hemos visto cómo podemos acceder a una propiedad de un objeto usando una variable! Por ejemplo, si tenemos un objeto person y una variable key con el valor name, podemos acceder a la propiedad name del objeto person usando person[key] y sería como hacer person.name.
*/



function searchInOcean(ocean, section, item) {

    return ocean[section]?.[item] !== undefined;
}

const ocean = {
    deep: {
        treasure: "gold"
    }
}

console.log(searchInOcean(ocean)); // false
