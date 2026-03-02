import { heroes, Owner, type Hero } from "./data/heroes.data"

// Funcion que retorna un heroe según su ID

const getHeroById = (id: number): Hero | undefined => {
    const hero = heroes.find((pj) => {
        return pj.id === id;
    });

    return hero;
};

console.log(getHeroById(5))

// Funcion que retorna los heroes según su marca

// Solución alumno

/* export const getHeroByOwner = (owner: Owner): Hero[] => {
    const DcHeroes = heroes.filter((hero) => {
        return hero.owner === owner;
    });

    return DcHeroes
}; */

// Solución del profesor
// 1. Omite indicar que la funcion devuelva un array. TS lo deduce por lógica.
// 2. Se acorta la funcion flecha, al tener solo una isntrucción, se puede quitar los { } y el return.

export const getHeroByOwner = (owner: Owner) => {
    const DcHeroes = heroes.filter(
        hero => hero.owner === owner
    );
    return DcHeroes
};

// Console.log de la funcion en archivo main.ts


