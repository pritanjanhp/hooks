import React, { useState, useEffect } from 'react'
import useWindowListner from './useWindowListner';

let Browser = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    // useEffect(() => {
    //     function handleMove(e) {
    //         setPosition({ x: e.clientX, y: e.clientY });
    //     }
    //     window.addEventListener('pointermove', handleMove);
    //     return () => {
    //         window.removeEventListener('pointermove', handleMove);
    //     }
    // }, []);

    // ! creating a custom hooks for the above
    useWindowListner('pointermove', e => {
        setPosition({ x: e.clientX, y: e.clientY })
    })
    return (
        <>
            <h4>Browser</h4>
            <div style={{
                position: 'absolute',
                backgroundColor: 'pink',
                borderRadius: '50%',
                opacity: 0.6,
                transform: `translate(${position.x}px, ${position.y}px)`,
                pointerEvents: 'none',
                left: -20,
                top: -20,
                width: 40,
                height: 40,
            }} > hi </div>
        </>
    )
}

export default Browser;


