import { useState } from "react";
import useStore from "../store";
import Calendar from "react-calendar";
import {
  TickIcon,
  CircularTickIcon,
  GreenCircularTickIcon,
  TickSquareIcon,
  WriteSqaureIcon,
  PenSquareIcon,
} from "../assets/icons";
import { v4 as uniqueID } from "uuid";
import Dashboardchart from "../components/Dashboardchart";
import ProjectCard from "../components/ProjectCard";

const Dashboard = () => {
  const getRecentTodos = useStore((state) => state.getRecentTodos);
  const getRecentProjects = useStore((state) => state.getRecentProjects);
  const todos = useStore((state) => state.todos);
  const projects = useStore((state) => state.projects);

  return (
    <div className="flex sm:flex-row flex-col gap-3 justify-between h-full">
      <div className="flex flex-col gap-5">
        <div>
          <h2 className=" text-[1em] sm:text-[2em] text-white">Overview</h2>
        </div>
        <div className="flex flex-col gap-1 text-white sm:flex-row sm:gap-5">
          <div className="flex flex-col gap-1 sm:gap-3">
            <p>Projects</p>
            <div className="flex justify-between sm:gap-5">
              <div className="bg-[#171717] rounded-xl w-[140px] sm:w-[220px] h-32 sm:h-[220px] flex p-6 flex-col  justify-between ">
                <div className=" BOX1 w-11 h-11 rounded-xl relative">
                  <svg className="w-9 h-9 mb-9  rotate-90 absolute top-[50%] -translate-y-[50%] -translate-x-[50%] left-[50%]">
                    {WriteSqaureIcon}
                  </svg>
                </div>
                <p className="text-3xl ml-1">{projects.length}</p>
                <h2 className=" text-[12px]">
                  Project<br></br>Total
                </h2>
              </div>
              <div className="bg-[#171717]  rounded-xl w-[140px] sm:w-[220px] h-32 sm:h-[220px] flex p-6 flex-col justify-between">
              <div className="bg-red-500 BOX4 w-11 h-11 rounded-xl relative">

                <svg className="w-9 h-9 mb-9 absolute top-[50%] -translate-y-[50%] -translate-x-[50%] left-[50%]">{TickSquareIcon}</svg>
</div>
                <p className="text-3xl ml-1">
                  {projects.filter((project) => project.completed).length}
                </p>
                <h2 className="text-[12px]">
                  Project<br></br>Completed
                </h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 sm:gap-3">
            <p>Tasks</p>
            <div className="flex justify-between sm:gap-5">
              <div className="bg-[#171717] rounded-xl w-[140px] sm:w-[220px] h-32 sm:h-[220px] flex p-6 flex-col justify-between ">
              <div className=" BOX3 w-11 h-11 rounded-xl relative">
                
                <svg className="w-9 h-9 mb-9 absolute top-[50%] -translate-y-[50%] -translate-x-[50%] 
                left-[50%]">{PenSquareIcon}</svg>
                </div>
                <p className="text-3xl ml-1">{todos.length}</p>
                <h2 className=" text-[12px]">
                  Tasks<br></br>Total
                </h2>
              </div>
              <div className="bg-[#171717] rounded-xl w-[140px] sm:w-[220px] h-32 sm:h-[220px] flex p-6 flex-col justify-between">
              <div className=" BOX4 w-11 h-11 rounded-xl relative">
                
                <svg className="w-9 h-9 mb-9 absolute top-[50%] -translate-y-[50%] -translate-x-[50%] left-[50%]">{TickSquareIcon}</svg>
                </div>
                <p className="text-3xl ml-1">
                  {todos.filter((todo) => todo.completed).length}
                </p>
                <h2 className="text-[12px]">
                  Tasks<br></br>Completed
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full sm:flex-row gap-3">
          <div className=" flex-grow h-full text-white ">
            <p className="py-4">Tasks Done</p>
            <Dashboardchart />
          </div>
          <div className="sm:w-[40%] flex bg-[#171717] text-white rounded-3xl p-4 flex-col gap-3">
            <h2>Recent Tasks</h2>
            {getRecentTodos().map((todo, index) => (
              <div key={uniqueID()} className="flex gap-3 relative RecentTasks">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p
                  className={` ${
                    todo.completed && "line-through"
                  } w-40 sm:w-full overflow-ellipsis overflow-hidden whitespace-nowrap text-nowrap `}
                >
                  {todo.title}
                </p>
                <svg className="w-6 h-6 absolute right-0">
                  {!todo.completed ? CircularTickIcon : GreenCircularTickIcon}
                </svg>
              </div>
            ))}
          </div>
          {/* <Categories /> */}
        </div>
      </div>
      <div className="flex-col w-fit gap-2  text-white sm:pt-16 sm:gap-3 flex">
        <div>
          <h2 className="">Recent Projects</h2>
        </div>
        <div className="flex grow gap-5 flex-col justify-between">
          {getRecentProjects().map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
