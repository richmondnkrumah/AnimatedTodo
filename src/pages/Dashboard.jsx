import { useState } from "react";
import useStore from "../store";
import Calendar from "react-calendar";

const Dashboard = () => {
  const getRecentTodos = useStore((state) => state.getRecentTodos);
  const todos = useStore((state) => state.todos);

  return (
    <div className="">
        <div className="flex gap-5">
       

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
      <div>
        <Calendar />
      </div>
      </div>
      <div>
        <div>
          {getRecentTodos().map((todo) => (
            <div>{todo.title}</div>
          ))}
        </div>
        {/* <Categories /> */}
      </div>
    </div>
  );
};

export default Dashboard;
