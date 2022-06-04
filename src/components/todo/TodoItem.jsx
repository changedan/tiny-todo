import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleDone } from '../../store/todoSlice';

const TodoItem = ({ id, text, done }) => {
  const dispatch = useDispatch();

  const handleDone = () => {
    dispatch(toggleDone({ id: id, done: !done }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo({ id: id }));
  };

  return (
    <li>
      <div className="todo-list">
        <input type="checkbox" checked={done} onChange={handleDone}></input>
        <span>{text}</span>
      </div>
      <AiOutlineDelete onClick={handleDelete} style={{ cursor: 'pointer' }} />
    </li>
  );
};

export default TodoItem;
