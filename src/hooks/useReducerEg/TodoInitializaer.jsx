import React, { useReducer } from 'react'

function createInitialState(username) {
    const initalTodos = [];
    let n = prompt('enter the value of n');
    for (let i = 0; i < n; i++) {
        initalTodos.push({
            id: i,
            text: username + " 's task #  " + (i + 1)
        });
    }
    return {
        draft: '',
        todos: initalTodos,
    };
}

function reducer(state, action) {
    switch (action.type) {
        case 'change-draft': {
            return {
                draft: action.nextDraft,
                todos: state.todos,
            }
        }
        case 'add-todo': {
            return {
                draft: '',
                todos: [{ id: state.todos.length, text: state.draft }, ...state.todos]
            }
        }
    }
}

const TodoInitializaer = ({ username }) => {
    const [state, dispatch] = useReducer(reducer, username, createInitialState);

    const handleInputChange = (e) => {
        dispatch({
            type: 'change-draft',
            nextDraft: e.target.value
        })
    }
    return (
        <>
            <div>TodoInitializaer</div>
            <input value={state.draft} onChange={handleInputChange} />
            <button onClick={() => {
                dispatch({ type: 'add-todo' })
            }}>Add</button>
            <ul>
                {state.todos.map(item => (
                    <li key={item.id}>
                        {item.text}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TodoInitializaer