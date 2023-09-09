import React, { useState } from 'react'

function TaskList({ tasks }) {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id} >
                    <Task task={task} />
                </li>
            ))}
        </ul>
    )
}

function Task({ task }) {

    const [isEditing, setIsEditing] = useState(false);
    let taskContent;

    if (isEditing) {
        taskContent = (
            <>
                <input value={task.text} />
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

            />
            {taskContent}
            <button>Delete</button>

        </label>
    )
}



export default TaskList