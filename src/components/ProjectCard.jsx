import React from "react";

const ProjectCard = () => {
  return (
    <div className="w-full flex flex-col gap-3  rounded-3xl h-72 bg-amber-300 p-4">
      <div className="flex justify-between content-center">
        <p>Jan,1 2020</p>
        <div className="flex flex-col gap-1">
          <span className="block rounded-full w-1 h-1 bg-black"></span>
          <span className="block rounded-full w-1 h-1 bg-black"></span>
          <span className="block rounded-full w-1 h-1 bg-black"></span>
        </div>
      </div>
      <div className="text-center grow  flex flex-col justify-center content-center">
        <h2 className="">Mobile App</h2>
        <p>This is my first mobile app project. YEBAB</p>
      </div>
      <div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <p>Progress</p>
            <p>5/14 tasks</p>
          </div>
          <div className="w-full rounded-full h-3 bg-gray-600">
            <span className="block rounded-full w-[20%] h-full bg-red-500"></span>
          </div>
        </div>
      </div>
      <div className="self-end px-3 py-1 bg-blue-200 rounded-full ">
        <p>3 days left</p>
      </div>
    </div>
  );
};

export default ProjectCard;
