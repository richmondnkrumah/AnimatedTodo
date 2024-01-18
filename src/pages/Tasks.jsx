import React from "react";
import { useState } from "react";
import useStore from "../store";
import TodoList from "../components/TodoList";


const Tasks = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const handleSearch = (e) => setSearchTerm(e.target.value);
    const [sortCompleted, setSortCompleted] = useState(false);


    const [newTodoTitle, setNewTodoTitle] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [newTags, setNewTags] = useState("");

    const addTodo = useStore((state) => state.addTodo);
    const deleteTodo = useStore((state) => state.deleteTodo);
    const toggleTodo = useStore((state) => state.toggleTodo);
    const getRecentTodos = useStore((state) => state.getRecentTodos)
    const categories = useStore((state) => state.categories);

    const todos = useStore((state) =>
        state.todos
            .filter(
                (todo) =>
                    todo.title.includes(searchTerm) &&
                    (!searchTerm || todo.title.includes(searchTerm))
            )
            .filter((todo) => (sortCompleted ? todo.completed : true))
    );
    const handleSortCompleted = () => setSortCompleted(!sortCompleted);
    const handleAddTodo = () => {
      if (newTodoTitle.trim()) {
          addTodo(
              newTodoTitle,
              selectedCategory,
              newTags.split(",").map((tag) => tag.trim())
          );
          setNewTodoTitle("");
          setSelectedCategory("");
          setNewTags("");
      }
  };

  const handleDeleteTodo = (id) => deleteTodo(id);
  const handleToggleTodo = (id) => toggleTodo(id);

    return (
        <div>
            <h1>Tasks</h1>
            <div>
                <input
                    type="text"
                    placeholder="Search todos..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className=" outline-none mb-3 mt-3 border rounded-full indent-4 h-8"
                />
            </div>
            <div>
                    <label>
                        Sort Completed
                        <input
                            type="checkbox"
                            checked={sortCompleted}
                            onChange={handleSortCompleted}
                        />
                    </label>
                </div>
                <div>
                    <h2>Add Todo</h2>
                    <label>
                        Title:
                        <input
                            type="text"
                            value={newTodoTitle}
                            onChange={(e) => setNewTodoTitle(e.target.value)}
                        />
                    </label>
                    <label>
                        Category:
                        <select
                            value={selectedCategory}
                            onChange={(e) =>
                                setSelectedCategory(e.target.value)
                            }
                        >
                            <option value="">Select Category</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </label>
                    <label>
                        Tags:
                        <input
                            type="text"
                            value={newTags}
                            onChange={(e) => setNewTags(e.target.value)}
                        />
                    </label>
                    <button onClick={handleAddTodo}>Add Todo</button>
                </div>
            <TodoList
                    todos={todos}
                    categories={categories}
                    onDelete={handleDeleteTodo}
                    onToggle={handleToggleTodo}
                />
        </div>
    );
};

export default Tasks;
