import React from "react";
import { useState } from "react";
import useStore from "../store";
import TodoList from "../components/TodoList";
import TodoModal from "../components/TodoModal";

const Tasks = () => {
  const [isOpen,setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => setSearchTerm(e.target.value);
  const [sortCompleted, setSortCompleted] = useState(false);


  
  const toggleTodo = useStore((state) => state.toggleTodo);

  const todos = useStore((state) =>
    state.todos
      .filter(
        (todo) =>
          todo.title.includes(searchTerm) &&
          (!searchTerm || todo.title.includes(searchTerm))
      )
      .filter((todo) => (sortCompleted ? todo.completed : true))
  );
  const handleSortCompleted = () => setSortCompleted(!sortCompleted);
 

  const handleDeleteTodo = (id) => deleteTodo(id);
  const handleToggleTodo = (id) => toggleTodo(id);

  return (
    <div>
      <h1>Tasks</h1>
      <div>
        <input
          type="text"
          placeholder="Search todos..."
          value={searchTerm}
          onChange={handleSearch}
          className=" outline-none mb-3 mt-3 border rounded-full indent-4 h-8"
        />
      </div>
      <div>
        <label>
          Sort Completed
          <input
            type="checkbox"
            checked={sortCompleted}
            onChange={handleSortCompleted}
          />
        </label>
      </div>
     
      <TodoList
        todos={todos}
        onDelete={handleDeleteTodo}
        onToggle={handleToggleTodo}
      />
      <div onClick={() => setIsOpen(state => !state)} className="absolute right-10 cursor-pointer bottom-10 w-10 h-10 bg-purple-800 text-center text-white text-3xl rounded-lg">
        +
      </div>
      <TodoModal isOpen={isOpen} handleOpenModal={() => setIsOpen(false)}/>
    </div> 
  );
};

export default Tasks;
