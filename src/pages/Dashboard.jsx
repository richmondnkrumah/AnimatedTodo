import { useState } from "react";
import useStore from "../store";
import Calendar from "react-calendar";
import { TickIcon, CircularTickIcon, GreenCircularTickIcon } from "../assets/icons";
import { v4 as uniqueID } from "uuid";

const Dashboard = () => {
  const getRecentTodos = useStore((state) => state.getRecentTodos);
  const todos = useStore((state) => state.todos);

  return (
    <div className="flex gap-5">
      <div className="flex flex-col gap-5">
        <div className=" grid  grid-cols-2 gap-2 sm:flex ">
          <div className="bg-amber-300 rounded-xl w-[120px] sm:w-[250px] h-32 sm:h-[250px] flex pl-4 flex-col justify-end pb-4 gap-1">
            <p>{todos.length}</p>
            <h2 className="text-[12px]">
              Project<br></br>Total
            </h2>
          </div>
          <div className="bg-amber-300 rounded-xl w-[120px] sm:w-[250px] h-32 sm:h-[250px] flex pl-4 flex-col justify-end pb-4 gap-1">
            <p>{todos.filter((todo) => todo.completed).length}</p>
            <h2 className="text-[12px]">
              Project<br></br>Completed
            </h2>
          </div>
          <div className="bg-amber-300 rounded-xl w-[120px] sm:w-[250px] h-32 sm:h-[250px] flex pl-4 flex-col justify-end pb-4 gap-1">
            <p>{todos.length}</p>
            <h2 className="text-[12px]">
              Tasks<br></br>Total
            </h2>
          </div>
          <div className="bg-amber-300 rounded-xl w-[120px] sm:w-[250px] h-32 sm:h-[250px] flex pl-4 flex-col justify-end pb-4 gap-1">
            <p>{todos.filter((todo) => todo.completed).length}</p>
            <h2 className="text-[12px]">
              Tasks<br></br>Completed
            </h2>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="bg-amber-300 rounded-3xl p-4 flex grow flex-col gap-3">
            <h2>Recent Tasks</h2>
            {getRecentTodos().map((todo, index) => (
              <div key={uniqueID()} className={`flex ${todo.completed && "line-through" }  gap-3 relative `}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p className=" w-40 sm:w-full overflow-ellipsis overflow-hidden whitespace-nowrap text-nowrap ">{todo.title}</p>
                <svg className="w-6 h-6 absolute right-0">
                  {!todo.completed ? CircularTickIcon : GreenCircularTickIcon}
                </svg>
              </div>
            ))}
          </div>
          <div className="w-[30%] rounded-3xl h-full bg-amber-300 "></div>
          {/* <Categories /> */}
        </div>
      </div>
      <div className="hidden sm:flex-col sm:gap-5 sm:flex">
        <Calendar />
        <div className="w-full rounded-3xl grow p-5 bg-amber-300 ">
          <h2>Recent Project</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
