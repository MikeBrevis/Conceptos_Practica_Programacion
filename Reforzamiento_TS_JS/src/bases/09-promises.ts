// las promesas constan de callbacks o funciones encadenadas

const myPromise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        //! Dinero que se debe
        reject('no me pagaron');
    }, 2000);
});

myPromise
    .then((myMoney) => {
        console.log(`dinero pagado: ${myMoney}`);
    })
    .catch((reason) => {
        console.warn(reason);
    })
    .finally(() => {
        console.log('A comer')
    })

// validacion de pin // promesa en funcion 

const validarPin = (pin: number) => {
    return new Promise((resolve, reject) => {
        if (pin == 1234) {
            resolve('Pin correcto')
        } else {
            reject('Pin incorrecto')
        }
    });
};

validarPin(12345)
    .then((resultado) => {
        console.log(`Exito: ${resultado}`)
    })
    .catch((error) => {
        console.log(`Error: ${error}`)
    })

// Mensaje de login exitoso // promesa en constante

const miPromesa = new Promise((resolve, reject) => {
    // Simulamos una operación que toma tiempo
    console.log('🔄 La Promise está pendiente...')

    setTimeout(() => {
        const exito = true // Cambia esto a false para ver el rechazo

        if (exito) {
            console.log('✅ Resolviendo la Promise...')
            resolve('¡Operación exitosa!') // Cumplimos la promesa
        } else {
            console.log('❌ Rechazando la Promise...')
            reject('Algo salió mal') // Rechazamos la promesa
        }
    }, 2000)
})

console.log('Promise creada:', miPromesa)

// Consumir la Promise
miPromesa
    .then(resultado => console.log('Resultado:', resultado))
    .catch(error => console.log('Error:', error))




