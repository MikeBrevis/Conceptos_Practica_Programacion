// interface: Obliga a que el objeto luzca de cierta manera, comportandose como un cascaron. 

// Si se quiere definir un objeto opcional, se agrega el signo ?

interface Hero {
    firstName: string;
    lastName: string;
    age: number;

 address1?: {
        postalCode: string;
        city: string
    }
}

//Lo anterior no escala muy bien, por lo cual,  lo mejor es hacer una interface de la direccion y agregala directa al objeto.

interface Hero {
    firstName: string;
    lastName: string;
    age: number;
    address: Address2 // Se llama a la interface Address2
}

interface Address2 {
    postalCode: string;
    city: string
}


//Se declara la constante de objeto con la interface de Batman, obligando a que tenga los datos del tipo especificado.
const Batman: Hero = {
    firstName: 'Bruce',
    lastName: 'Wayne',
    age: 45,
    address: {
        postalCode: 'ABC-20700', // Se define postalCode como number
        city: 'NY'
    }
}

//Para definir un objeto con las propiedades declaradas de la interface, una vez definida la constante, presionar CTRL + . sobre esta.
const SpiderMan: Hero = {
    firstName: "",
    lastName: "",
    age: 0,
    address: {
        postalCode: 'ABC-20700', 
        city: 'NY'
    }
}

console.log(Batman, SpiderMan)

/* const batman = structuredClone(person);
batman.firstName = "Bruce";
batman.lastName = "Wayne";
batman.age = 35;
batman.address.city = 'Gothic City' */


