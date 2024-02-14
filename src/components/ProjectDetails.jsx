import React from "react";
import Todo from "./Todo";
import { PaperIcon } from "../assets/icons";
import useStore from "../store";

const getFormatedDate = (date) => {
  const dateObject = new Date(date);

  // Define options for formatting
  const options = { year: "numeric", month: "short", day: "numeric" };

  // Format the date using the options
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    dateObject
  );
  // Output example: Jan 20, 2024
  return formattedDate;
};

const ProjectDetails = ({ currProject,handleDeleteProject }) => {
  const projectTaskOperation = useStore((state) => state.projectTaskOperation);
  const handleDeleteTodo = (taskID) => projectTaskOperation(currProject.id,taskID,"delete");
  const handleToggleTodo = (taskID) => projectTaskOperation(currProject.id,taskID,"toggle");
  console.log(currProject?.tasks,"initial")
  console.log(currProject)
  return (
    <div className=" relative p-3 flex flex-col gap-5  h-full">
      {currProject ? (
        <div>
          {currProject.completed ? (
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-400"></span>
              <p className=" text-xs ">Completed</p>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#e60b09]"></span>
              <p className=" text-xs ">Not Completed</p>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-3 content-center items-center justify-center h-full ">
          {" "}
          <svg className="rotate-[10deg] w-48 ">{PaperIcon}</svg>
          <p>No Project is selected</p>
        </div>
      )}

      {currProject && (
        <div className="grow flex flex-col gap-5">
          <div>
            <h2 className="text-center text-[1em] sm:text-[2em]">
              {currProject.title}
            </h2>
            <p className="text-center text-[0.5em] sm:text-[0.8em]">
              {currProject.subTitle}
            </p>
          </div>
          <div className="flex justify-between text-sm">
            <p>
              Start Date:<br></br>
              {getFormatedDate(currProject.creationDate)}
            </p>
            <p>
              End Date:<br></br>
              {/* {getFormatedDate(currProject.endDate)} */}
            </p>
          </div>
          <div className=" grow ">
            <h2 className=" text-lg">Tasks</h2>
            {currProject.tasks.map((todo) => (
              <Todo
                key={todo.id}
                isProjectDetail={true}
                todo={todo}
                onDelete={handleDeleteTodo}
                onToggle={handleToggleTodo}
              />
            ))}
          </div>
          <div onClick={() => handleDeleteProject(currProject.id)} className="px-4 cursor-pointer text-center py-2 bottom-3 bg-[#e60b09] text-white rounded-3xl w-full">
            <p>Delete Project</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
