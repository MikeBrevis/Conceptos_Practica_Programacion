
const useState = (pj1: string) => {
    return [
        pj1,
        (pj2: string) => {
            console.log(pj2)
        }
    ] as const
}

const [name, setName] = useState("Goku")

console.log(name);
setName("Vegeta");

