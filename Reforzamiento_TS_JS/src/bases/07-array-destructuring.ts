const characterNames = ['Goku', 'Vegeta', 'Trunks'];
const [, , p3] = characterNames;

console.log({p3})

// Desestructuración con valores de funciones

const returnArrayFn = () => {
    return ['ABC', 123] as const; // as const define que siempre regrasara un string al inicio y numero al final en la funcion.
};

const [ letters ] = returnArrayFn();
console.log(letters)

