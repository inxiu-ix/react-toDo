import React, { useState } from 'react';

const ToDoItem = ({ todo, onClick, onChange, save }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editInputValue, setEditInputValue] = useState(todo.title);
  const titleClasses = [];

  if (todo.completed) {
    titleClasses.push('done');
  }

  const editTodo = (e) => {
    e.preventDefault();
    save(editInputValue, todo);
    setIsEdit(!isEdit);
  };

  return (
    <li>
      {!isEdit && (
        <div>
          <span className={titleClasses.join('')}>{todo.title}</span>
          <input type="checkbox" onChange={() => onChange(todo)} />
          <button onClick={() => onClick(todo.id)}>X</button>
          <button onClick={() => setIsEdit(!isEdit)}>Редактировать</button>
        </div>
      )}
      {isEdit && (
        <form onSubmit={editTodo}>
          <input
            defaultValue={todo.title}
            onChange={(e) => setEditInputValue(e.target.value)}
          />
          <button type="submit">Сохранить</button>
        </form>
      )}
    </li>
  );
};

export default ToDoItem;
