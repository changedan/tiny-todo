import AddTodo from './components/todo/AddTodo';
import Calendar from './components/calendar/Calendar';
import TodoList from './components/todo/TodoList';
import './index.scss';

function App() {
  return (
    <div className="todo__wrap">
      <Calendar />
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
