import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todoSlice';

import { IoAdd } from 'react-icons/io5';

export default function AddTodo() {
  const [newTodo, setNewTodo] = useState();

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addTodo({
        text: newTodo,
      }),
    );

    setNewTodo('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={newTodo || ''}
        placeholder="Add Todo"
        onChange={(e) => setNewTodo(e.target.value)}
      ></input>
      <IoAdd onClick={onSubmit} style={{ cursor: 'pointer' }} />
    </form>
  );
}
