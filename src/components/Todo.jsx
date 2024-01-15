// src/components/Todo.jsx
import React from 'react';

const Todo = ({ todo, categories, onDelete, onToggle }) => {
  const category = categories.find((cat) => cat.id === todo.categoryId);

  return (
    <div>
      <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
      <span>{todo.title}</span>
      {category && <span>Category: {category.name}</span>}
      {todo.tags && (
        <span>
          Tags: {todo.tags.map((tag) => `#${tag} `)}
        </span>
      )}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default Todo;
