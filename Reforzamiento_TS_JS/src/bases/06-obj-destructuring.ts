// Expresion de JS que permite desempacar valores de arreglos o propiedades de objetos en distintas variables.

const person = {
    key: 'promedio',
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
};

// ¡SIN DESESTRUCTURAR!
//const name = person.name
//const age = person.age
//const key = person.key

//console.log({name, age, key})

// CON DESESTRUCTURACIÓN
const { firstName: heroName, age, key } = person;
console.log({heroName, age, key })

interface Hero {
    key: string;
    firstName: string;
    lastName: string;
    age: number;
    rank?: string;
}

//DESESTRUCTURACIÓN CON FUNCION FLECHA
const useContext = ({ key, firstName, lastName, age, rank = 'Sin embargo' }: Hero) => {
    return {
        keyName: key,
        user: {
            firstName,
            lastName,
            age,
        },
        rank: rank,
    };
};

//DESESTRUCTURACION DE OBJETO useContext
const { rank, keyName, user: { firstName } } = useContext(person)
console.log({rank, keyName, firstName})







