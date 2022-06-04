import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

import './index.scss';

const TodoList = () => {
  const todoList = useSelector((state) => state.todoList);

  return (
    <ul className="list-group">
      {todoList
        .map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            done={todo.done}
          />
        ))
        .reverse()}
    </ul>
  );
};

export default TodoList;
