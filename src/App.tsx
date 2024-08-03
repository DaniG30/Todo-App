import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'; // Asegúrate de importar tu archivo CSS
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const App: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (todo: string) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const clearTodos = () => {
    setTodos([]);
  };

  return (
    <div className="container">
      <h1 className="text-center">Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
      <div className="d-flex justify-content-between align-items-center mt-3">
        <span>You have {todos.length} pending tasks</span>
        <button className="clear-all-button" onClick={clearTodos}>
          Clear All
        </button>
      </div>
    </div>
  );
}

export default App;
