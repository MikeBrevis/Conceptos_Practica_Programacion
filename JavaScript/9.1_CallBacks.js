// Funcion que le pasas a otra funcion como si fuera un dato

const saludar = (nombre) => console.log(`Hola ${nombre}`)
const despedir = (nombre) => console.log(`Adios ${nombre}`)

const procesaUsuario = (nombre, callback) => {
    console.log('Procesando usuario...')
    callback(nombre)
}

// Saludar y despedir son callbacks, procesaUsuario recibe un callback y lo ejecuta despues de procesar al usuario.

procesaUsuario('Ana', saludar)
procesaUsuario('Mike', despedir)

// Funcion setTimeOut
//Asincrono, se ejecuta 1, 3 y 2

//1
console.log('Inicio')

//2
setTimeout(() => {
    console.log('han pasado 2 segundos!')
}, 2000)

//3
console.log('Fin')

//CallBacks con parametros

function esperarUnSegundo(callback) {
  setTimeout(() => {
    const mensaje = "¡Ya pasaron 3 segundo!";
    callback(mensaje); // Le pasamos un parámetro al callback
  }, 3000);
}

function mostrarMensaje(texto) {
  console.log(texto);
}

// Aquí llamamos a la función y le pasamos el callback
esperarUnSegundo(mostrarMensaje);

