// src/components/Todo.jsx
import React from "react";
import { DeleteIcon } from "../assets/icons";
import useStore from "../store";

const Todo = ({ todo, onDelete, onToggle,isProjectDetail }) => {
  const theme = useStore(state => state.theme)
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-3 ">
      <input
        className=" scale-125 checked:accent-[#e60b09] "
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span className="cursor-pointer hover:underline">{todo.title}</span>
        
      </div>
      {/* {todo.tags && (
        <span>
          Tags: {todo.tags.map((tag) => `#${tag.name} `)}
        </span>
      )} */}
      
      <div className="flex gap-8">
      {
        !isProjectDetail && (
          <>
          <div>
          <p>{todo.completed ? "Completed" : "In Progress"}</p>
        </div>
        {todo.Priority === "High" ? (
          <span className=" w-[80px] text-center block h-fit px-1 py-[2px] rounded-3xl bg-red-500">
            High
          </span>
        ) : todo.Priority === "Normal" ? (
          <span className=" w-[80px] text-center block h-fit px-1 py-[2px] bg-orange-500 rounded-3xl ">
            Normal
          </span>
        ) : (
          <span className=" w-[80px] text-center block h-fit px-1 py-[2px] bg-purple-500 rounded-3xl ">
            Low
          </span>
        )}
        </>)
      }
        
        <div  className={`w-16 flex items-center ${!isProjectDetail ? "justify-center": "justify-end"} `}>
        <svg  onClick={() => onDelete(todo.id)} className=" cursor-pointer w-5 h-5 ">
          {DeleteIcon(theme)}
        </svg>
        </div>
      </div>
    </div>
  );
};

export default Todo;
