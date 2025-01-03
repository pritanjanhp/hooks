import React, { useState } from 'react'
import { sculptureList } from './data.js'

const Scultpure = () => {
    // let idx = 0;
    // function handleClick() {
    //     idx = idx + 1
    // }

    let [idx, setIdx] = useState(0);
    const [showMore, setShowMore] = useState(false);

    let hasPrev = idx > 0;
    function handlePrevClick() {
        if (hasPrev) {
            setIdx(idx - 1)
        }
    }

    let hasNext = idx < sculptureList.length - 1;
    let handleClickNext = () => {
        if (hasNext) setIdx(idx + 1);
    }

    let handleClickMore = () => {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[idx];
    return (
        <>
            <button onClick={handlePrevClick} disabled={!hasPrev}>Prev</button>
            <button onClick={handleClickNext} disabled={!hasNext}>  Next </button>
            <h2> <i>{sculpture.name}</i> by {sculpture.artist} </h2>
            <h3> ({idx + 1})of {sculptureList.length} </h3>

            <img src={sculpture.url} alt={sculpture.alt} />
            {showMore && <p> {sculpture.description} </p>} <br />
            <button onClick={handleClickMore}> {showMore ? 'Hide' : 'Show'} details </button>
        </>
    )
}

export default Scultpure


// ! useState() > useEffect() > useRef() > useContext() > useReducer() > useCallback > useMemo() > customHooks()