import React, { useReducer, useContext } from 'react'
import TasksContext, { TasksDispatchContext } from './TasksContext';


export function useTasks() {
    return useContext(TasksContext);
}
export function useTaskDispatch() {
    return useContext(TasksDispatchContext)
}

function taskReducer(tasks, action) {
    switch (action.type) {
        case 'added': {
            return [...tasks, {
                id: action.id,
                text: action.text,
                done: false
            }]
        }
        case 'changed': {
            return tasks.mapp(t => {
                if (t.id === action.task.id) return action.task
                else return t;
            })
        }
        case 'deleted': {
            return tasks.filter(t => t.id !== action.id)
        }
        default: {
            throw Error('unknown action :' + action.type);
        }
    }
}
const initialTasks = [
    { id: 0, text: 'Ram', done: true },
    { id: 1, text: 'asd', done: false },
    { id: 2, text: 'asdfg', done: false }
];

const TaskProvider = () => {
    const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
    return (
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    )
}

export default TaskProvider
