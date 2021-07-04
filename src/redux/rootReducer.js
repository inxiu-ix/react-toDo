import {
  CHANGE,
  ADD,
  REMOVE,
  COMPLETE,
  SAVE_EDIT,
} from './actions/actionsType';

const initialState = {
  todos: [],
  inputValue: '',
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE:
      return { todos: [...state.todos], inputValue: action.payload };
    case ADD:
      const todoItem = {
        title: state.inputValue,
        id: +new Date(),
        completed: false,
      };
      return {
        todos: [...state.todos, todoItem],
        inputValue: '',
      };
    case REMOVE:
      const removeTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      return {
        todos: removeTodos,
        inputValue: state.inputValue,
      };
    case COMPLETE:
      const todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return { todos: todos, inputValue: state.inputValue };
    case SAVE_EDIT:
      const todosSave = state.todos;
      const index = todosSave.findIndex((t) => t.id === action.payloadTodo.id);
      if (index !== -1) {
        action.payloadTodo.title = action.payloadValue;
      }
      return { todos: todosSave, inputValue: state.inputValue };
    default:
      return state;
  }
}
