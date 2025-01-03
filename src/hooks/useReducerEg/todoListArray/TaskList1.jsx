import React from 'react'
import Task from './Task'

const TaskList1 = ({ tasks, onChangeTask, onDeleteTask }) => {

    return (
        <>
            {/* <h3>TaskList 1</h3> */}
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TaskList1