import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
    productName: string;
    quantity?: number;
}

const itemsInCart: ItemInCart[] = [
    { productName: 'Nintendo switch 2', quantity: 1 },
    { productName: 'Pro controller', quantity: 3 },
    { productName: 'Smash bros', quantity: 5 },
]

export function FirstStepsApp() {

    return (
        <>
            <h1>Carrito de compras</h1>
            {itemsInCart.map(({productName, quantity}) => (
                        <ItemCounter key = { productName } name= { productName } quantity= { quantity } />
                    ))}

            {/* <h1>Carrito de compras</h1>
            <ItemCounter name='Nintendo Swith 2' quantity={1}/>
            <ItemCounter name ='Pro controller' quantity={2} />
            <ItemCounter name ='Smash bros ultimate' quantity={1}/> */}
        </>
    )
}



