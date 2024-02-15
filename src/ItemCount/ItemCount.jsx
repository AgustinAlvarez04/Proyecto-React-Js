import { useState } from "react";

function ItemCount(props) {
    const [state, setState] = useState(0);
    
    const decrement = () => {
        setState(state - 1)
    }
    const increment = () => {
        setState(state + 1)
    }

    return (
        <>
            <h1>{props.title}</h1>
            <h2>{state}</h2>
            <button onClick={decrement}>decrement</button>
            <button onClick={increment}>increment</button>

        </>
    )
}

export default ItemCount