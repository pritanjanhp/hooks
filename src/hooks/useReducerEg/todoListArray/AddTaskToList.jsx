import React, { useState } from 'react'

const AddTaskToList = ({ onAddTask }) => {
    const [text, setText] = useState("");
    return (
        <>
            <h3>AddTaskToList</h3>
            <input value={text} placeholder="enter your task" onChange={e => setText(e.target.value)} />
            
            <button onClick={() => {
                setText("");
                onAddTask(text);
            }}>Add</button>
        </>
    )
}

export default AddTaskToList