import React, { useState, useRef } from 'react'

const CounterRef = () => {
    // ! counter using useState()
    // const [cnt, setCnt] = useState(0);
    // let handleClick = () => {
    //     setCnt(cnt + 1);
    // }
    // return (
    //     <>
    //         <h2>CounterRef</h2>
    //         <h1>{cnt}</h1>
    //         <button onClick={handleClick}>You clicked {cnt} times</button>
    //     </>
    // )

    // ! counter using useRef()
    let ref = useRef(0);

    let handleClick = () => {
        ref.current = ref.current + 1;
        alert('you have clicked ' + ref.current + ' times!');
    }

    return (
        <>
            {/* number won’t update on click. This is because setting ref.current does not trigger a re-render. Information that’s used for rendering should be state instead. */}
            {ref.current}
            
            <button onClick={handleClick}>You clicked times</button>
        </>
    )

    // ! comnining both and printing on UI
    // const [cnt, setCnt] = useState(0);
    // let ref = useRef(0);

    // let handleClick = () => {
    //     ref.current = ref.current + 1;
    //     // console.log(ref.current)
    //     setCnt(ref.current);
    //     // alert('you have clicked ' + ref.current + ' times!');
    // }

    // return (
    //     <>
    //         <h1>{cnt}</h1>
    //         {ref.current}
    //         <button onClick={handleClick}>You clicked {cnt} times</button>
    //     </>
    // )


}

export default CounterRef