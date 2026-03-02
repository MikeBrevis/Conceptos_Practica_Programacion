const firstName = 'Mike'
const lastName = 'Brevis'

// Comillas invertidas para definir cadenas de texto multilinea.
const fullName = `
El nombre completo es
    ${firstName} ${lastName} 
`;

// lo que se declara dentro de ${} son componenets JS. se pueden declarar variables, operaciones matematicas, etc
const sumTest = `la suma de 2 + 2 es ${2 + 2}`
console.log(fullName, sumTest)

