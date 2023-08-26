import React from 'react'

function Todo({ task, deleteTodo, editTodo }) {
    console.log(task)
    return (
        <div className='todo'>
            <p>{task.task}</p>
            <div>
                <button onClick={() => editTodo(task.id)}>Edit</button>
                <button onClick={() => deleteTodo(task.id)}>Delete</button>

            </div>
        </div>
    )
}

export default Todo