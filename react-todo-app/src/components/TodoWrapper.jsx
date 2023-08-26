import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';

function TodoWrapper() {
    const [todos, setTodos] = useState([]);
    // console.log(todos)
    const addTodo = (todo) => {
        setTodos([
            ...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }
        ])
    }

    const deleteTodo = (id) => setTodos(todos.filter(todo => todo.id !== id))

    // const deleteTodo =  (id) =>{
    //     let filteredTodos = todos.filter(function(todo){
    //         return todo.id !== id
    //     })
    //     setTodos(filteredTodos)
    // }

    const editTodo = (id) => {
        let newTodos = todos.map((todo) => {
            return todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
        })
        // console.log(newTodos)
        setTodos(newTodos)

    }

    const editTask = (task, id) => {
        let newTodos = todos.map((todo) => {

            return todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
        })
        setTodos(newTodos)
    }

    return (
        <div className='todo-wrapper'>
            <h1>Things to Complete</h1>
            <TodoForm addTodo={addTodo} />
            {
                todos.map((todo) => (

                    todo.isEditing ? (
                        <EditTodoForm task={todo} editTask={editTask} />
                    ) : (
                        <Todo
                            key={todo.id}
                            task={todo}
                            deleteTodo={deleteTodo}
                            editTodo={editTodo}
                        />
                    )

                ))
            }



        </div>
    )
}

export default TodoWrapper