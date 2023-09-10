import React, { useState } from 'react'

function TaskList({ tasks, onDeleteTask, onEditTask }) {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id} >
                    <Task task={task} onEdit={onEditTask} onDelete={onDeleteTask} />
                </li>
            ))}
        </ul>
    )
}

function Task({ task, onEdit, onDelete }) {

    const [isEditing, setIsEditing] = useState(false);
    let taskContent;

    if (isEditing) {
        taskContent = (
            <>
                <input value={task.text} onChange={e => {
                    onEdit({
                        ...task,
                        text: e.target.value
                    })
                }} />
                <button onClick={() => setIsEditing(false)} >Save</button>
            </>
        )

    } else {
        taskContent = (
            <>
                {task.text}
                <button onClick={() => setIsEditing(true)} >Edit</button>

            </>
        )
    }

    return (
        <label>
            <input
                type='checkbox'
                checked={task.done}
                onChange={e => {
                    onEdit({
                        ...task, done: e.target.checked
                    })
                }}

            />
            {taskContent}
            <button onClick={() => onDelete(task.id)} >Delete</button>

        </label>
    )
}



export default TaskList