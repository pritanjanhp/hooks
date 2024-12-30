import React, { useState, useEffect } from 'react'

let Browser = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        function handleMove(e) {
            setPosition({ x: e.clientX, y: e.clientY });
        }
        window.addEventListener('pointermove', handleMove);
        return () => {
            window.removeEventListener('pointermove', handleMove);
        }
    }, []);

    return (
        <>
            <h4>Browser</h4>
            <div className='absolute bg-pink-300 rounded-full opacity-60 transform pointer-events-none' style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: 'translate(-50%, -50%)',
            }}> Hello
            </div>
        </>
    )
}

export default Browser;