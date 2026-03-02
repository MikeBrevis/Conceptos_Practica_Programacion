import type { CSSProperties } from "react";

// Declaracion de variables
const FirsName = 'Mike';
const LastName = 'Brevis';

//Variables con arreglos
const favoriteGames = ['SmashBros', 'metroid', 'pokemon']

//Variables con booleanos
const isActive = false;

//Variables con objetos
const person = {
    name: 'Mike',
    age: 25,
    isMonster: true
}

const personStyle: CSSProperties = {
    color: 'black',
    fontSize: '1.5rem',
    padding: '1rem',
    borderRadius: '1rem',
    fontWeight: 'bold',
    backgroundColor: 'red'
}

export function MyAwesomeApp() {

    return (
        <>
            <h1
            style={{
                    color: 'black',
                    fontSize: '1.5rem',
                    padding: '1rem',
                    borderRadius: '1rem',
                    fontWeight: 'bold',
                    backgroundColor: 'red'
                }}
            >{FirsName}</h1>
            <h3>{LastName}</h3>
            <h3>{favoriteGames.join(', ')}</h3> {/* Unir los elementos de un array con join*/}
            <h3 style={personStyle}>{isActive ? 'activo' : 'inactivo'}</h3> {/* Ternario para identificar si una variable es true o false: condición ? valor_si_verdadero : valor_si_falso*/}
            <p
                style={{
                    color: 'black',
                    fontSize: '1.5rem',
                    padding: '1rem',
                    borderRadius: '1rem',
                    fontWeight: 'bold',
                    backgroundColor: 'red'
                }}

            >{JSON.stringify(person)}</p> {/* Convertir un objeto literal a JSON*/}
        </>
    )
}


