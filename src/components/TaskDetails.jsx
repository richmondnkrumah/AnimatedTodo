import React from "react";
import { PaperIcon } from "../assets/icons";

const getForomatedDate = (date) => {
  const dateObject = new Date(date);

// Define options for formatting
const options = { year: 'numeric', month: 'short', day: 'numeric' };

// Format the date using the options
const formattedDate = new Intl.DateTimeFormat('en-US', options).format(dateObject);
  // Output example: Jan 20, 2024
return formattedDate;
}


const TaskDetails = ({ currTask }) => {

  console.log(currTask && getForomatedDate(currTask.date))
  return (
    <div className="p-4 h-full">
      {currTask ? (
        <div>
          {currTask.completed ? (
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-green-400"></span>
              <p>Completed</p>
            </div>
          ) :
          (
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-red-400"></span>
              <p>Not Completed</p>
            </div>
          )}
          
        </div>
      ) : (
        <div className="flex flex-col gap-3 content-center items-center justify-center h-full ">
          {" "}
          <svg className="rotate-[10deg]">{PaperIcon}</svg>
          <p>No Task is selected</p>
        </div>
      )}
    </div>
  );
};

export default TaskDetails;
