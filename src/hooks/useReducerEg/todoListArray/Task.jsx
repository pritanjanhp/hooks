import React, { useState } from 'react'

const Task = ({ task, onChange, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;
    if (isEditing) {
        taskContent = (
            <>
                <input value={task.text}
                    onChange={e => { onChange({ ...task, text: e.target.value }) }}
                />
                <button onClick={() => setIsEditing(false)}>save</button>
            </>
        )
    }
    else {
        taskContent = (
            <>
                {task.text}
                <button onClick={() => setIsEditing(true)} >Edit</button>
            </>
        )
    }
    return (
        <>
            {/* <h3>Task</h3> */}
            <label>
                <input type='checkbox' checked={task.done} onChange={(e) => { onChange = ({ ...task, done: e.target.checked }) }} />
                {taskContent}

                <button onClick={() => onDelete(task.id)}>Delete</button>
            </label>
        </>
    )
}

export default Task