import React from "react";
import { useState } from "react";
import useStore from "../store";
import TodoList from "../components/TodoList";
import TodoModal from "../components/TodoModal";
import { SearchIcon } from "../assets/icons";
import ProjectList from "../components/ProjectList";

const Projects = () => {
 

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => setSearchTerm(e.target.value);


  const deleteProject = useStore((state) => state.deleteProject);

  const projects = useStore((state) =>
    state.projects
      .filter(
        (todo) =>
          todo.title.includes(searchTerm) &&
          (!searchTerm || todo.title.includes(searchTerm))
      )
  );
  
  const handleDeleteProject = (id) => deleteProject(id);
  
  console.log(projects)
  return (
    <div className="flex h-full w-fit">
      <div className="grow flex flex-col gap-5">
        <div className="flex items-center justify-between ">
          <h1 className=" text-[1em] sm:text-[2em]">Projects</h1>
          <div className="flex items-center relative gap-3">
            <svg className="w-5 h-5 absolute left-1.5">{SearchIcon}</svg>
            <input
              type="text"
              placeholder="Search tasks"
              value={searchTerm}
              onChange={handleSearch}
              className=" w-80 outline-none  border rounded-full indent-7 h-10 pr-4"
            />
            <div
              onClick={() => setIsOpen(true)}
              className=" cursor-pointer bottom-5 w-10 h-10 bg-purple-800 text-center text-white text-3xl rounded-full"
            >
              +
            </div>
          </div>
        </div>
         <ProjectList projects={projects} onDelete={handleDeleteProject}/>
        
      </div>
      <div>

      </div>

    </div>
  );
}

export default Projects