import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todoList',
  initialState: [
    {
      id: 1,
      text: 'redux',
      done: false,
    },
    {
      id: 2,
      text: 'redux toolkit',
      done: false,
    },
    {
      id: 3,
      text: 'redux & redux toolkit example',
      done: false,
    },
    {
      id: 4,
      text: 'redux & redux toolkit study',
      done: false,
    },
    {
      id: 5,
      text: 'redux & redux toolkit toy-project',
      done: true,
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload.text,
        done: false,
      };

      state.push(newTodo);
    },
    toggleDone: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].done = action.payload.done;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, toggleDone, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
