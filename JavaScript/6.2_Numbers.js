/* 
El tipo number en JavaScript representa tanto números enteros como decimales. A diferencia de otros lenguajes que tienen tipos separados para enteros y flotantes, JavaScript unifica todo en un solo tipo number. 
*/

// Constructor number

// Crear primitivo
let numero = Number('42') // 42
let decimal = Number('3.14') // 3.14

let string = '42'
let desdeString = Number(string) // 42
console.log(typeof desdeString) // "number"

