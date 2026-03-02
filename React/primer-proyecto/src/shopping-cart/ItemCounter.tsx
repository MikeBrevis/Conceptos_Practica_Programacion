import { useState } from "react";
import './ItemCounter.css';

interface Props {
    name: string;
    quantity?: number;
}

export const ItemCounter = ({ name, quantity = 1 }: Props) => {

    const [count, setCount] = useState(quantity);

    const handleAdd = () => {
        setCount(count + 1);
    }
    const handleRemove = () => {
        if (count === 0) return;
        setCount(count - 1);
    }

    /* rafc + tab = Atajo para crear un componente funcional */
    return (
        <section className="style-row">
            <span className="item-row">
                {name}
            </span>
            <button onClick={handleAdd}>+</button>
            <span>{count}</span>
            <button onClick={handleRemove}>-</button>
        </section>
    )
}








