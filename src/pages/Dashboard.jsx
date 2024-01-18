import { useState } from "react";
import useStore from "../store";
import TodoList from "../components/TodoList";
import Categories from "../components/Categories";

const Dashboard = () => {
    

    const todos = useStore((state) =>
        state.todos
            .filter(
                (todo) =>
                    todo.title.includes(searchTerm) &&
                    (!searchTerm || todo.title.includes(searchTerm))
            )
            .filter((todo) => (sortCompleted ? todo.completed : true))
    );
   

  

    return (
        <div>
            
            <div className=" grid  grid-cols-2 gap-2">
                <div className="bg-amber-300 rounded-xl w-[120px] h-32 flex pl-[10%] flex-col justify-end pb-[10%] gap-1">
                    <p>{todos.length}</p>
                    <h2 className="text-[12px]">
                        Project<br></br>Total
                    </h2>
                </div>
                <div className="bg-amber-300 rounded-xl w-[120px] h-32 flex pl-[10%] flex-col justify-end pb-[10%] gap-1">
                    <p>{todos.filter((todo) => todo.completed).length}</p>
                    <h2 className="text-[12px]">
                        Project<br></br>Completed
                    </h2>
                </div>
                <div className="bg-amber-300 rounded-xl w-[120px] h-32 flex pl-[10%] flex-col justify-end pb-[10%] gap-1">
                    <p>{todos.filter((todo) => todo.completed).length}</p>
                    <h2 className="text-[12px]">
                        Tasks<br></br>Total
                    </h2>
                </div>
                <div className="bg-amber-300 rounded-xl w-[120px] h-32 flex pl-[10%] flex-col justify-end pb-[10%] gap-1">
                    <p>{todos.filter((todo) => !todo.completed).length}</p>
                    <h2 className="text-[12px]">
                        Tasks<br></br>Completed
                    </h2>
                </div>
            </div>
            <div>
                <div>
                   {
                    getRecentTodos().map(todo => (
                        <div>
                            {todo.title}
                        </div>
                    ))
                   }
                </div>
                {/* <Categories /> */}
              
               
                
            </div>
        </div>
    );
};

export default Dashboard;
