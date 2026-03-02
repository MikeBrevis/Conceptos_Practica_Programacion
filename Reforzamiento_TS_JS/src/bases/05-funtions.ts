// Se declara una funcion igual que en JS, salvo que se define el tipo de dato.

function greet(name: string): string { // :string define como retorno un string
    return `Hola ${name}`
}

// Funcion flecha
const greet2 = (name: string): string => {
    return `Hola ${name}`
}

//Funcion flecha simplificada
const greet3 = (name: string) => `Hola ${name}`


console.log(greet('goku'))
console.log(greet2('vegeta'))
console.log(greet3('gohan'))


//Tare: Transformar la funcion a funcion flecha
function getUser() {
    return {
        uid: 'ABC-123',
        username: 'dinaMike'
    }
}
console.log(getUser())

//Funcion flecha:
const getUser2 = () => ({
        uid: 'ABC-456',
        username: 'KancerCustom'
})
console.log(getUser2())

