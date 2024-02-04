import React from "react";
const getFormatedDate = (date) => {
  const dateObject = new Date(date);

// Define options for formatting
const options = { year: 'numeric', month: 'short', day: 'numeric' };

// Format the date using the options
const formattedDate = new Intl.DateTimeFormat('en-US', options).format(dateObject);
  // Output example: Jan 20, 2024
return formattedDate;
}


const ProjectCard = ({project,onDelete,onCurrentProject}) => {
  const progressBarWidth = (division,multiplier) => {
    return `w-[${100/division * multiplier}%]`
  }
  const stylee = `w-[${100/project?.tasks.length * project?.tasks.filter(task => task.completed).length}%]`
  return (
    <div onClick={() => onCurrentProject(project.id)} className=" cursor-pointer flex flex-col gap-3 w-[310px] rounded-3xl h-72 bg-[#171717] BOXEE p-4 text-white">
      <div className="flex justify-between content-center items-center">
        <p>{project ? getFormatedDate(project.creationDate) : "Jan,1 2020"}</p>
        <div className="flex flex-col gap-1">
          <span className="block rounded-full w-2 h-2 bg-[#212121]"></span>
          <span className="block rounded-full w-2 h-2 bg-[#212121]"></span>
          <span className="block rounded-full w-2 h-2 bg-[#212121]"></span>
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
            <p>{project?.tasks.filter(task => task.completed).length}/{project?.tasks.length} tasks</p>
          </div>
          <div className="w-full rounded-full h-2 bg-[#212121]">
            <span className={`block rounded-full ${stylee} h-full bg-[#e60b09]`}></span>
          </div>
        </div>
      </div>
      <div className="self-end px-3 py-1 bg-[#212121]  rounded-full ">
        <p>3 days left</p>
      </div>
    </div>
  );
};

export default ProjectCard;
