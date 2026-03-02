// Al momento de declarar un array, se debe de especificar el tipo de dato.

const myArray: number[] = [1, 2, 3, 5, 7, 10];

// El tipo de argumento "string" no es asignable al array.
//myArray.push('20') 
myArray.push(30) 
console.log(myArray)

// Se peude asignar varios tipos de argumentos con |.
const myArray2: (number|string)[] = [1, 2, 3, 5, 7, 10];
myArray2.push('20') 
console.log(myArray2)


