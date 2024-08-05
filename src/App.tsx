import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'; 
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
      <h1 className="text-center">Aplicación de Tareas</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
      <div className="d-flex justify-content-between align-items-center mt-3">
        <span>Tienes {todos.length} tareas pendientes</span>
        <button className="clear-all-button" onClick={clearTodos}>
          Borrar Todo
        </button>
      </div>
    </div>
  );
}

export default App;
