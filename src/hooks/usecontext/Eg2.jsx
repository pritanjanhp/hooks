import React, { createContext, useContext, useState } from 'react'

const currUserContext = createContext(null);

const Eg2 = () => {
    const [currUser, setCurrUser] = useState(null);
    return (
        <div>
            <currUserContext.Provider value={{ currUser, setCurrUser }}>
                <Form />
            </currUserContext.Provider>
        </div>
    )
}

function Button({ children, onClick }) {
    return (
        <button className='button' onClick={onClick}>
            {children}
        </button>
    )
}

function Panel({ title, children }) {
    return (
        <section className='panel'>
            <h1>{title}</h1>
            {children}
        </section>
    )
}

function LogInButton() {
    const { currUser, setCurrUser } = useContext(currUserContext);
    if (currUser !== null) {
        return <p> you logged in as {currUser.name} </p>
    }

    return (
        <Button onClick={() => { setCurrUser({ name: 'prit' }) }}>
            Log in as Ram
        </Button>
    )
}

function Form({ children }) {
    return (
        <Panel title='welcome'>
            <LogInButton />
        </Panel>
    )
}

export default Eg2
