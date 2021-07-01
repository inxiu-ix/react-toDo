import ToDoList from './ToDoList/ToDoList'
import { Component } from 'react'
import AddToDo from './AddToDo/AddToDo'
import './index.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      inputValue: '',
    }
    this.handleClick = this.handleClick.bind(this)
  }

  onChange = (e) => {
    this.setState((state) => {
     const inputValue  = e.target.value;

     return {inputValue: state.inputValue + inputValue}
    })
  }

  saveEdit = (value, todo) => {
    const todos = this.state.todos
    const index = todos.findIndex((t) => t.id === todo.id)
    if (index !== -1) {
      todo.title = value
    }
    this.setState(() => {
      return { todos }
    })
  }

  handleClick(e) {
    e.preventDefault()
    e.target.reset()
    if (this.state.inputValue !== '') {
      const todoItem = {
        title: this.state.inputValue,
        id: +new Date(),
        completed: false,
      }
      this.setState({ todos: [...this.state.todos, todoItem], inputValue: '' })
    }

    
  }

  removeTodo = (id) => {
    this.setState(() => {
      const todos = this.state.todos.filter((todo) => todo.id !== id)
      return { todos }
    })
  }

  completeTodo = (todo) => {
    const todos = this.state.todos
    const index = todos.findIndex((t) => t.id === todo.id)
    if (index !== -1) {
      todo.completed = !todo.completed
    }
    this.setState(() => {
      return { todos }
    })

  }

  render() {
    console.log('value>>>', this.state.inputValue)
    return (
      <div className="App">
        <h1>To Do List</h1>
        <AddToDo 
        onSubmit={this.handleClick} 
        onChange={this.onChange}
        value={this.state.inputValue} />
        <ToDoList
          todos={this.state.todos}
          deleteTask={this.removeTodo}
          completeTask={this.completeTodo}
          save={this.saveEdit}
        />
      </div>
    )
  }
}

export default App
