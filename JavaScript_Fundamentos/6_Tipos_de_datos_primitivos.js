// Tipos de datos primitivos

// Todos los tipos primitivos son inmutables

/* 
string - cadenas de texto
number - números
bigint - números enteros grandes
boolean - verdadero o falso
undefined - valor indefinido
symbol - símbolos como identificador único
null - valor nulo  // <- el typeOf de null es object por un bug historico.
*/

let texto = "Hola mundo"
let numero = 15
let numeroGrande = 123n
let trueOrFalse = true
let indefinido = undefined
let simbolo = Symbol("id")
let nulo = null

// Object wrappers
/* 
Cuando intentas acceder a un método o propiedad de un primitivo, JavaScript automáticamente:
- Crea temporalmente un objeto wrapper alrededor del valor primitivo
- Ejecuta el método en ese objeto
- Destruye el objeto wrapper inmediatamente después

IMPORTANTE: undefined y null no tienen object wrappers, por eso no puedes llamar métodos en ellos
*/

