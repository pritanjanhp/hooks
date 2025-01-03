import { useState, useEffect } from "react";

const useCounter = (initializer) => {
    const [counter, setCounter] = useState(initializer);

    let increment = () => {
        setCounter(counter + 1)
    }
    const decrement = () => {
        setCounter(counter - 1)
    }
    const reset = () => {
        setCounter(initializer);
        // setCounter(-5);
    }

    useEffect(() => {
        console.log(counter)
    }, [counter])

    return { counter, increment, decrement, reset };

}

export default useCounter
