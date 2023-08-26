import React, { useState } from 'react'

//capture user's input
//on submit add todo

function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState('');
    // console.log(todo)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (todo) {
            //logic to add the todo
            addTodo(todo)
            setTodo("")
            //clear form after submission
        }
    }
    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input className='todo-input'
                placeholder='What is the task today?' type='text' value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button type='submit' className='todo-btn'>Add Todo</button>
        </form>

    )
}

export default TodoForm