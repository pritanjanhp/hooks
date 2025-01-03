import React, {useState} from 'react'
import { useTaskDispatch } from './TaskProvider'

const AddTask = () => {
    const [text, setText] = useState('')
    const dispatch = useTaskDispatch();
    return (
        <>
            <input
                placeholder="Add task"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button onClick={() => {
                setText('');
                dispatch({
                    type: 'added',
                    id: nextId++,
                    text: text,
                });
            }}>Add</button>
        </>
    )
}

export default AddTask
