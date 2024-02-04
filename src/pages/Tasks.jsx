import React from "react";
import { useState } from "react";
import useStore from "../store";
import TodoList from "../components/TodoList";
import TodoModal from "../components/TodoModal";
import { FilterIcon, SearchIcon } from "../assets/icons";
import TaskDetails from "../components/TaskDetails";

const Tasks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => setSearchTerm(e.target.value);
  const [sortCompleted, setSortCompleted] = useState(false);

  const [currTask,setCurrTask] = useState(null)

  const toggleTodo = useStore((state) => state.toggleTodo);
  const deleteTodo = useStore((state) => state.deleteTodo);

  const todos = useStore((state) =>
    state.todos
      .filter(
        (todo) =>
          todo.title.includes(searchTerm) &&
          (!searchTerm || todo.title.includes(searchTerm))
      )
      .filter((todo) => (sortCompleted ? todo.completed : true))
  );
  const handleCurrentTaskDetails = (todo) => {
    
    setCurrTask(todo)

  }

  const handleDeleteTodo = (id) => deleteTodo(id);
  const handleToggleTodo = (id) => toggleTodo(id);
  console.log(todos)
  return (
    <div className="flex h-full text-white gap-5">
      <div className="grow flex flex-col gap-5">
        <div className="flex items-center justify-between ">
          <h1 className=" text-[1em] sm:text-[2em]">All Tasks</h1>
          <div className="flex items-center relative gap-3">
            <svg className="w-5 h-5 absolute left-1.5">{SearchIcon}</svg>
            <input
              type="text"
              placeholder="Search tasks"
              value={searchTerm}
              onChange={handleSearch}
              className=" w-80 outline-none  border rounded-full indent-7 h-10 pr-4"
            />
            <div>
              <svg className="w-8 h-8 rotate-90">{FilterIcon}</svg>
            </div>
            <div
              onClick={() => setIsOpen(true)}
              className=" cursor-pointer bottom-5 w-10 h-10 bg-[#e60b09] text-center text-white text-3xl rounded-full"
            >
              +
            </div>
          </div>
        </div>
        {/* 
      <div>
        <label>
          Sort Completed
          <input
            type="checkbox"
            checked={sortCompleted}
            onChange={handleSortCompleted}
          />
        </label>
      </div> */}

        <TodoList
          todos={todos}
          onDelete={handleDeleteTodo}
          onToggle={handleToggleTodo}
          onCurrentTask={handleCurrentTaskDetails}
        />
      </div>
      {/* <div className=" w-[350px] h-full bg-amber-500">
        <TaskDetails currTask={currTask}/>
      </div> */}
      <TodoModal isOpen={isOpen} handleCloseModal={() => setIsOpen(false)} />
    </div>
  );
};

export default Tasks;
