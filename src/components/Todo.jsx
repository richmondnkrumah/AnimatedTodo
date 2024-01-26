// src/components/Todo.jsx
import React from "react";

const Todo = ({ todo, onDelete, onToggle }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-3">

      <input
        className=" scale-125 checked:accent-amber-500 "
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span>{todo.title}</span>
        
      </div>
      {/* {todo.tags && (
        <span>
          Tags: {todo.tags.map((tag) => `#${tag.name} `)}
        </span>
      )} */}
      <div className="flex gap-5">
        {todo.Priority === "High" ? (
          <span className="cursor-pointer w-[85px] text-center block h-fit px-4 py-1 rounded-3xl bg-red-500">
            High
          </span>
        ) : todo.Priority === "Normal" ? (
          <span className="cursor-pointer w-[85px] text-center block h-fit px-4 py-1 bg-orange-500 rounded-3xl ">
            Normal
          </span>
        ) : (
          <span className="cursor-pointer w-[85px] text-center block h-fit px-4 py-1 bg-purple-500 rounded-3xl ">
            Low
          </span>
        )}

        <button onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
