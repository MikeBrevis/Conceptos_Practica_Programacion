//Desestructuracion de objetos: names, email, phone. Renombrar names = fullName, phone = contactPhone

interface FormData {
  names: string;
  surnames: string;
  birthdate: string;
  rut: string;
  phone: string;
  email: string;
  message: string;
}

const formData: FormData = {
  names: "Juan",
  surnames: "Pérez",
  birthdate: "1995-04-10",
  rut: "11.111.111-1",
  phone: "912345678",
  email: "juan@mail.com",
  message: "Necesito cotización"
};

const { names: fullName, email, phone: contactPhone } = formData
console.log(fullName, email, contactPhone)


//Procesar datos antes de enviarlos a backend

interface UserPayload {
  id: number;
  username: string;
  email: string;
  role: "admin" | "user";
  active: boolean;
}

const person: UserPayload = {
  id: 1256,
  username: "Pérez",
  email: "juan@mail.com",
  role: "admin",
  active: true,
};

const buildUserSummary = ({ username, email, role }: UserPayload) => {
  return `usuario: ${username} | email: ${email} | rol: ${role}`
};

const person1 = buildUserSummary(person)
console.log(person1)

// Desestructuración con valores por defecto (caso real)

interface UserPayload2 {
  username: string;
  email?: string;
  role?: "admin" | "user";
}

const person2: UserPayload2 = {
  username: "Mike",
  email: "Mike@mail.com",
  role: "admin",
};

const buildUser = ({ username, email = 'no informado', role = 'user' }: UserPayload2) => {
  return `usuario: ${username} | email: ${email} | rol: ${role}`
}

const person3 = buildUser(person2)
console.log(person3)

// Desestructuración anidada (caso real de backend)

interface ApiUser {
  id: number;
  profile: {
    username: string;
    contact?: {
      email?: string;
      phone?: string;
    };
  };
}

const apiPerson: ApiUser = {
  id: 12345,
  profile: {
    username: 'Adonys',
    contact: {
      email: 'AD159*@gmail.com',
      phone: '123456',
    },
  },
}

const buildApi = ({
  profile: {
    username,
    contact: {
      email = 'no informado',
      phone = 'no informado',
    } = {}, // Si un nivel de objeto es opcional, al desestructurarlo se le debe dar un objeto por defecto.
  },
}: ApiUser) => {
  return `usuario: ${username} | email: ${email} | telefono: ${phone}`
}

const personBuild = buildApi(apiPerson)
console.log(personBuild)


