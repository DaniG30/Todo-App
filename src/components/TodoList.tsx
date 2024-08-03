import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: string[];
  removeTodo: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, removeTodo }) => (
  <ul className="list-group">
    {todos.map((todo, index) => (
      <TodoItem key={index} todo={todo} index={index} removeTodo={removeTodo} />
    ))}
  </ul>
);

export default TodoList;
