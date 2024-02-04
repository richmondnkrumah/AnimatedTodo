import React, { useRef, useState, useEffect } from "react";
import useStore from "../store";
import {v4 as uniqueID} from 'uuid'
const ProjectModal = ({ isOpen, handleCloseModal }) => {
  const dialogRef = useRef(null);

  const [newProjectTitle, setNewProjectTitle] = useState("");
  const [newProjectSubTitle, setNewProjectSubTitle] = useState("");
  const [newProjectTask, setNewProjectTask] = useState("");
  const [newProjectTasks, setNewProjectTasks] = useState([]);
  const [newProjectDeadline, setNewProjectDeadline] = useState("");

  const addProject = useStore((state) => state.addProject);
  const handleAddProject = () => {
    if (newProjectTitle.trim()) {
      addProject(newProjectTitle, newProjectSubTitle,newProjectTasks, newProjectDeadline);
      setNewProjectTitle("");
      setNewProjectSubTitle("");
      setNewProjectTasks([])
      setNewProjectDeadline('')
      // dialogRef.current.close()

      handleCloseModal();
    }
  };

  const handleOutsideCloseClick = (e) => {
    const dialogDimensions = dialogRef.current.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      // dialogRef.current.close()
      handleCloseModal();
    }
  };
  const handleSaveNewTask = () => {
    setNewProjectTasks(state => [...state,{id: uniqueID(),completed: false,title: newProjectTask}])
    setNewProjectTask("")
  }

  useEffect(() => {
    if (isOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isOpen]);

  return (
    <dialog
      onClick={handleOutsideCloseClick}
      className="backdrop:bg-black/60 backdrop:backdrop-blur-sm absolute top-0 right-0 bottom-0 left-0 m-auto rounded-3xl px-3 py-5 overflow-y-scroll"
      ref={dialogRef}
    >
      <div className=" w-[320px] sm:w-[500px] flex flex-col gap-4 rounded-lg">
        <h2 className="text-center font-bold text-lg">Add New Task</h2>
        <div className="flex flex-col relative before:content-[''] before:h-[2px] before:w-full before:bg-green-500 before:absolute before:bottom-0 ">
          <label className="font-bold " htmlFor="Title">
            Project Title:
          </label>
          <input
            value={newProjectTitle}
            onChange={(e) => setNewProjectTitle(e.target.value)}
            className="indent-1 h-9 outline-none"
            placeholder="Project Title"
            type="text"
            name="Title"
            id=""
          />
        </div>
        <div className="flex flex-col relative before:content-[''] before:h-[2px] before:w-full before:bg-green-500 before:absolute before:bottom-0 ">
          <label className="font-bold " htmlFor="Title">
            Sub Title:
          </label>
          <input
            value={newProjectSubTitle}
            onChange={(e) => setNewProjectSubTitle(e.target.value)}
            className="indent-1 h-9 outline-none"
            placeholder="Sub Title"
            type="text"
            name="Title"
            id=""
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <div className="flex justify-between   ">
            <label className="font-bold " htmlFor="Title">
              Project Tasks
            </label>
            <span className="w-fit px-3  cursor-pointer flex items-center justify-center rounded-full text-white text-sm bg-purple-800">
              +
            </span>
          </div>
          <div className="flex gap-1 justify-between relative before:content-[''] before:h-[2px] before:w-full before:bg-green-500 before:absolute before:bottom-0 ">
            <input
              value={newProjectTask}
              onChange={(e) => setNewProjectTask(e.target.value)}
              className="indent-1 h-9 grow outline-none"
              placeholder="New Task"
              type="text"
              name="Title"
              id=""
            />
            <span onClick={handleSaveNewTask} className="w-fit px-3 h-fit py-1 self-center cursor-pointer flex items-center justify-center rounded-full text-white text-sm bg-purple-800">
              save
            </span>
          </div>
          <div>

          {
            newProjectTasks.map(task => <p>{task.title}</p>)
          }
          </div>
        </div>
        <div className="flex flex-col relative before:content-[''] before:h-[2px] before:w-full before:bg-green-500 before:absolute before:bottom-0 ">
          <label className="font-bold " htmlFor="Title">
            Project Deadline
          </label>
          <input onChange={(e) => setNewProjectDeadline(e.target.valueAsNumber)} className="outline-none" type="date" name="" id="" />
        </div>

        <div className="grid place-content-center">
          <button
            onClick={handleAddProject}
            type="submit"
            className=" h-fit px-4 py-1 rounded-3xl bg-blue-300"
          >
            Submit
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default ProjectModal;
