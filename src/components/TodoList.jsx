import Todo from "./Todo";

const TodoList = ({ todos, onDelete, onToggle, onCurrentTask }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex relative justify-between before:h-[1px] before:w-full before:bg-gray-500 before:absolute before:-bottom-2">
        <p className="ml-6">Title</p>
        <div className="flex gap-2 sm:gap-8 ">
          <p className="text-center hidden sm:block w-[80px]">Status</p>
          <p className=" w-[64px]  sm:w-[74px]   text-center">Priority</p>
          <p className=" w-16">Remove</p>
        </div>
      </div>
      {todos.map((todo) => (
        <Todo key={todo.id} onCurrentTask={onCurrentTask}  todo={todo} onDelete={onDelete} onToggle={onToggle} />
      ))}
      
    </div>
  );
};

export default TodoList;
