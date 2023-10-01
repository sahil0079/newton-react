import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: [],
      value: '',
      editing: false,
      currentId: '',
      currentValue: ''
    };
    // console.log('constructor', this)
    // this.onChange = this.onChange.bind(this)
  }
  // onChange(e) {
  //   this.setState({ value: e.target.value })
  //   console.log('onChange', this)

  // }
  onChange = (e) => {
    this.setState({ value: e.target.value })
    // console.log('onChange', this)
  }

  onAddTodo = (e) => {
    e.preventDefault()
    const todo = {
      name: this.state.value,
      id: Date.now()
    };

    if (this.state.value !== '') {
      this.setState({ todos: this.state.todos.concat(todo) });
      this.setState({ value: '' });
    }
  }

  onDeleteTodo = (todoId) => {
    // this.setState({
    //   todos: [...this.state.todos].filter((todo) => todo.id !== todoId)
    // })
    const copyTodos = [...this.state.todos];
    const newTodos = copyTodos.filter(function (todo) {
      return (
        todo.id !== todoId
      )
    })
    this.setState({
      todos: newTodos
    })
  }

  //edit todo
  //boolean state
  //current Id state
  //currentValue state


  onSubmitEditTodo = (e) => {
    e.preventDefault();
    this.onEditTodo(this.state.currentId, this.state.currentValue);
    this.setState({ editing: false });

  }

  onEditTodo = (id, newValue) => {
    this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.name = newValue
      }
    })
  }

  onEditInputChange = (e) => {
    this.setState({
      currentValue: e.target.value
    })
  }
  onToggleEdit = (todo) => {
    this.setState({ editing: true });
    this.setState({ currentId: todo.id });
    this.setState({ currentValue: todo.name });
  }

  render() {
    console.log(this.state)

    const myList = this.state.todos.map(todo => (
      <li className='todo_item' key={todo.id}>
        {todo.name}
        <button onClick={() => this.onToggleEdit(todo)} >Edit</button>
        <button onClick={() => this.onDeleteTodo(todo.id)} >Delete</button>

      </li>
    ))

    return (
      <div className='app'>
        {this.state.editing === false ? (
          <form onSubmit={this.onAddTodo} >
            <input placeholder='Enter todo' value={this.state.value} onChange={this.onChange} />
            <button onClick={this.onAddTodo}>Add Todo</button>
          </form>
        ) : (
          <form onSubmit={this.onSubmitEditTodo} >
            <input
              placeholder='Edit Todo' value={this.state.currentValue}
              name={this.state.currentValue}
              onChange={this.onEditInputChange}
            />
            <button>Update Todo</button>
          </form>
        )}


        <ul className='todo_wrapper'>
          {myList}
        </ul>

      </div>
    )
  }
}

export default App;