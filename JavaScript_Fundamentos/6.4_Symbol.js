// Valor primitivo que representa un valor unico

let sym1 = Symbol()
let sym2 = Symbol()
let sym3 = Symbol('descripcion')
let sym4 = Symbol('descripcion')

console.log(sym1 === sym2) // false
console.log(sym3 === sym4) // false (¡incluso con la misma descripción!)

console.log(typeof sym1) // "symbol"

