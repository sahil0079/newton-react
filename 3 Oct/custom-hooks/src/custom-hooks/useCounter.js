import { useState } from "react";


export function useCounter(initalValue = 0) {
    const [count, setCount] = useState(initalValue);

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);

    }
    const reset = () => {
        setCount(initalValue);
    }

    return {
        count,
        increment,
        decrement,
        reset
    };

}

