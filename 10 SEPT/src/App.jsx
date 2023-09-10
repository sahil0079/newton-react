import React, { useReducer } from 'react';
import './App.css';
import AddTask from './components/AddTask/AddTask';
import TaskList from './components/TaskList/TaskList';

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'TASK_ADDED':
      //logic to add the task
      return [...tasks, {
        id: action.payload.id,
        text: action.payload.text,
        done: false
      }]
    case 'TASK_EDITED':
      //logic to edit the task

      return tasks.map(t => {
        if (t.id == action.payload.task.id) {
          return action.payload.task
        } else {
          return t
        }
      })
    case 'TASK_DELETED':
      //logic to delete the task
      return tasks.filter(t => t.id !== action.payload.id)
    default:
      throw Error('Unknown action: ' + action.type)

  }

}

let nextId = 3;
const initialTasks = [
  { id: 0, text: 'going out for a walk', done: true },
  { id: 1, text: 'jawan movie', done: false },
  { id: 2, text: 'complete js and react project', done: false }
]

function App() {

  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(task) {
    //dispatch an action
    console.log('task', task)
    dispatch({
      type: 'TASK_ADDED',
      payload: {
        text: task,
        id: nextId++
      }
    })

  }

  function handleEditTask(task) {
    //dispatch an action
    console.log('updatedTask', task)
    dispatch({
      type: 'TASK_EDITED',
      payload: { task }
    })


  }

  function handleDeleteTask(taskId) {
    //dispatch an action
    console.log('taskID', taskId)
    dispatch({
      type: 'TASK_DELETED',
      payload: {
        id: taskId
      }
    })

  }

  return (
    <div>
      <h1>Task Manager App</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onEditTask={handleEditTask} onDeleteTask={handleDeleteTask} />
    </div>
  )
}

export default App