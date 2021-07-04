import ToDoList from './ToDoList/ToDoList';
import { Component } from 'react';
import { connect } from 'react-redux';
import AddToDo from './AddToDo/AddToDo';
import './index.scss';
import {
  add,
  change,
  complete,
  remove,
  saveEdit,
} from './redux/actions/actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>To Do List</h1>
        <AddToDo
          onSubmit={(e) => {
            e.preventDefault();
            this.props.onAdd();
          }}
          onChange={(e) => {
            const str = e.target.value;
            this.props.onChange(str);
          }}
          value={this.props.inputValue}
        />
        <ToDoList
          todos={this.props.todos}
          deleteTask={(id) => this.props.onRemove(id)}
          completeTask={(todo) => this.props.onComplete(todo)}
          save={(value, todo) => this.props.onSaveEdit(value, todo)}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    inputValue: state.inputValue,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: (str) => dispatch(change(str)),
    onAdd: () => dispatch(add()),
    onRemove: (id) => dispatch(remove(id)),
    onComplete: (todo) => dispatch(complete(todo)),
    onSaveEdit: (value, todo) => dispatch(saveEdit(value, todo)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
