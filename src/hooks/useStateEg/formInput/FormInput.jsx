import React, { useState } from 'react'

const FormInput = () => {
    const [firstNeame, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    let handleFirstName = (e) => {
        setFirstName(e.target.value);
    }
    let handleLastName = (e) => {
        setLastName(e.target.value);
    }

    function handleReset() {
        firstNeame = '';
        lastName = '';
    }

    return (
        <>
            <form onSubmit={e => e.preventDefault}>
                <input
                    placeholder='enter first name'
                    value={firstNeame}
                    onChange={handleFirstName}
                >
                </input>
                <input placeholder='enter last name' value={lastName} onChange={handleLastName}>
                </input>

                <h1>Hi, {firstNeame} {lastName}</h1>
                <button onClick={handleReset}>Reset</button>

            </form>
        </>
    )
}

export default FormInput