import React from "react";
import { useState } from "react";
import useStore from "../store";
import { SearchIcon } from "../assets/icons";
import ProjectList from "../components/ProjectList";
import ProjectDetails from "../components/ProjectDetails";
import ProjectModal from "../components/ProjectModal";
const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => setSearchTerm(e.target.value);
  const [isOpen, setIsOpen] = useState(false);

  const deleteProject = useStore((state) => state.deleteProject);

  const projects = useStore((state) =>
    state.projects.filter(
      (project) =>
        project.title.includes(searchTerm) &&
        (!searchTerm || project.title.includes(searchTerm))
    )
  );
  const handleDeleteProject = (id) => deleteProject(id);
  const [currProject, setCurrProject] = useState(null);

  const handleCurrentProjectDetails = (projectID) => {
    setCurrProject(projectID);
  };
  return (
    <div className="flex h-full ">
      <div className=" grow flex flex-col gap-5 mr-[280px] pr-5">
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
              className=" cursor-pointer bottom-5 w-10 h-10 bg-[#e60b09] text-center text-white text-3xl rounded-full"
            >
              +
            </div>
          </div>
        </div>

        <ProjectList
          projects={projects}
          onDelete={handleDeleteProject}
          onCurrentProject={handleCurrentProjectDetails}
        />
      </div>
        <div className="fixed w-[280px] right-5 top-5 h-[calc(100%_-_40px)] bg-[#171717] text-white rounded-3xl">
          <ProjectDetails
            currProject={projects.find((project) => project.id === currProject)}
            handleDeleteProject={handleDeleteProject}
            />
            </div>
      <ProjectModal isOpen={isOpen} handleCloseModal={() => setIsOpen(false)} />
    </div>
  );
};

export default Projects;
