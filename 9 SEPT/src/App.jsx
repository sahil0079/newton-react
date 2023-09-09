import React, { useReducer } from 'react';
import './App.css';
import AddTask from './components/AddTask/AddTask';
import TaskList from './components/TaskList/TaskList';

function tasksReducer(state, action) {

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
    console.log(task)
  }

  return (
    <div>
      <h1>Task Manager App</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} />
    </div>
  )
}

export default App