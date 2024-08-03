import React from 'react';

interface TodoItemProps {
  todo: string;
  index: number;
  removeTodo: (index: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, index, removeTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {todo}
      <button className="btn btn-danger btn-sm" onClick={() => removeTodo(index)}>
        <i className="bi bi-trash"></i>
      </button>
    </li>
  );
}

export default TodoItem;
