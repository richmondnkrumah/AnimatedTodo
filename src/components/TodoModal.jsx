import { useState, useRef, useEffect } from "react";
import useStore from "../store";
import { TickIcon } from "../assets/icons";



const TodoModal = ({ isOpen,handleCloseModal }) => {
  const dialogRef = useRef(null);
  const tags = useStore((state) => state.tags)
  
  
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("");
  const [newTags, setNewTags] = useState([]);
  
  const addTodo = useStore((state) => state.addTodo);
  const handleAddTodo = () => {
    if (newTodoTitle.trim()) {
      addTodo(
        newTodoTitle,
        selectedPriority,
        newTags
      );
      setNewTodoTitle("");
      setSelectedPriority("");
      setNewTags([]);
      // dialogRef.current.close()
      handleCloseModal()
    }

  };
  

  const handleOutsideCloseClick = (e) => {

    const dialogDimensions = dialogRef.current.getBoundingClientRect()
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    // dialogRef.current.close()
    handleCloseModal()
  }
  }
  
  useEffect(() => {
    if (isOpen) {
      dialogRef.current.showModal();
    }
    else {
      dialogRef.current.close();
    }
  },[isOpen]);

  return (
    <dialog onClick={handleOutsideCloseClick} className="backdrop:bg-black/60 backdrop:backdrop-blur-sm absolute top-0 right-0 bottom-0 left-0 m-auto rounded-3xl px-3 py-5 overflow-hidden" ref={dialogRef}>
      <div className=" w-[320px] sm:w-[500px] flex flex-col gap-4 rounded-lg">
        <h2 className="text-center font-bold text-lg">Add New Task</h2>
        <div className="flex flex-col relative before:content-[''] before:h-[2px] before:w-full before:bg-green-500 before:absolute before:bottom-0 ">
          <label className="font-bold " htmlFor="Title">Title:</label>
          <input value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)} className="indent-1 h-9 outline-none" placeholder="Todo Title" type="text" name="Title" id="" />
        </div>
        <div className="flex flex-col gap-3">
          <label className="font-bold" htmlFor="Priority">Priority:</label>
          <div className="flex gap-3">
            <span onClick={() => setSelectedPriority("High")} className="cursor-pointer  h-fit px-4 py-1 rounded-3xl bg-red-500 flex">{selectedPriority === "High" && (<svg className="w-6 h-6">{TickIcon}</svg>)}High</span><span onClick={() => setSelectedPriority("Normal")} className="cursor-pointer  h-fit px-4 py-1 bg-orange-500 rounded-3xl flex ">{selectedPriority === "Normal" && (<svg className="w-6 h-6">{TickIcon}</svg>)}Normal</span><span onClick={() => setSelectedPriority("Low")} className="cursor-pointer h-fit px-4 py-1 bg-purple-500 rounded-3xl  flex">{selectedPriority === "Low" && (<svg className="w-6 h-6">{TickIcon}</svg>)}Low</span>
            </div>
        </div>
        <div className="flex flex-col gap-3">
          <label className="font-bold" htmlFor="">Tags:</label>
          <div className="flex flex-wrap gap-3 h-[82px] ">{
            tags.map((tag) => <span onClick={() => setNewTags(state => [...state,{id: tag.id,name: tag.name}])} className=" cursor-pointer h-fit px-4 py-1 rounded-3xl bg-green-300 flex" key={tag.id}>{newTags.find(currTag => currTag.id === tag.id) && (<svg className="w-6 h-6">{TickIcon}</svg>)} {tag.name}</span>)
          }</div>
        </div>
        <div className="grid place-content-center">
          <button onClick={handleAddTodo} type="submit" className=" h-fit px-4 py-1 rounded-3xl bg-blue-300">Submit</button>
        </div>
      </div>
    </dialog>
  );
};

export default TodoModal;
