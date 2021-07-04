import { CHANGE, ADD, REMOVE, COMPLETE, SAVE_EDIT } from './actionsType';

export const change = (str) => {
  return {
    type: CHANGE,
    payload: str,
  };
};

export const add = () => {
  return {
    type: ADD,
  };
};

export const remove = (id) => {
  return {
    type: REMOVE,
    payload: id,
  };
};

export const complete = (todo) => {
  return {
    type: COMPLETE,
    payload: todo,
  };
};

export const saveEdit = (value, todo) => {
  return {
    type: SAVE_EDIT,
    payloadValue: value,
    payloadTodo: todo,
  };
};
