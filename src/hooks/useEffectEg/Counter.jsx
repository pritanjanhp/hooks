import React, { useState, useEffect } from 'react'

const Counter = () => {
    const [cnt, setCnt] = useState(0);
    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setCnt(cnt + 1);
    //     }, 1000)
    //     return () => clearInterval(intervalId)
    // }, [cnt])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCnt(cnt => cnt + 1);
        }, 100)
        return () => clearInterval(intervalId)
    }, [])

    return (
        <>
            <h3>Counter</h3>
            <h1>{cnt}</h1>
        </>
    )
}

export default Counter