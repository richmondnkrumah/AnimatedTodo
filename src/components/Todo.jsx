// src/components/Todo.jsx
import React from 'react';

const Todo = ({ todo, onDelete, onToggle }) => {
 console.log(todo)

  return (
    <div>
      <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
      <span>{todo.title}</span>
      {todo.tags && (
        <span>
          Tags: {todo.tags.map((tag) => `#${tag.name} `)}
        </span>
      )}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default Todo;
