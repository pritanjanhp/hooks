import React from 'react'
import useCounter from './useCounter'

const CounterCustom = () => {
    const { counter, increment, decrement, reset } = useCounter(0)
    return (
        <div>
            <h3>Counter custom</h3>
            <h4>{counter}</h4>
            <button onClick={increment}> increment </button>
            <button onClick={decrement}> decrement </button>
            <button onClick={reset}> reset </button>
        </div>
    )
}

export default CounterCustom
