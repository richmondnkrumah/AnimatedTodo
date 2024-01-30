import React from "react";
const getForomatedDate = (date) => {
  const dateObject = new Date(date);

// Define options for formatting
const options = { year: 'numeric', month: 'short', day: 'numeric' };

// Format the date using the options
const formattedDate = new Intl.DateTimeFormat('en-US', options).format(dateObject);
  // Output example: Jan 20, 2024
return formattedDate;
}
const ProjectCard = ({project,onDelete}) => {
  return (
    <div className=" flex flex-col gap-3 w-[320px] rounded-3xl h-72 bg-amber-300 p-4">
      <div className="flex justify-between content-center">
        <p>{project ? getForomatedDate(project.creationDate) : "Jan,1 2020"}</p>
        <div className="flex flex-col gap-1">
          <span className="block rounded-full w-1 h-1 bg-black"></span>
          <span className="block rounded-full w-1 h-1 bg-black"></span>
          <span className="block rounded-full w-1 h-1 bg-black"></span>
        </div>
      </div>
      <div className="text-center grow  flex flex-col justify-center content-center">
        <h2 className="">{project ? project.title : "Mobile App"}</h2>
        <p>{project ? project.subTitle : "This is my first mobile app project. YEBAB"}</p>
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
