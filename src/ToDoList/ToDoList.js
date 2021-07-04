import ToDoItem from '../ToDoItem/ToDoItem';
const ToDoList = (props) => {
  console.log('TODOS', props.todos);
  return (
    <ul>
      {props.todos.map((todo) => {
        return (
          <ToDoItem
            todo={todo}
            key={todo.id}
            onClick={props.deleteTask}
            onChange={props.completeTask}
            save={props.save}
          />
        );
      })}
    </ul>
  );
};

export default ToDoList;
