import React, { useState } from 'react';

interface TodoFormProps {
  addTodo: (todo: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo.trim()) {
      addTodo(todo);
      setTodo('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Añadir nueva tarea"
        />
        <button className="btn btn-primary" type="submit">
          <i className="bi bi-plus-lg"></i>
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
