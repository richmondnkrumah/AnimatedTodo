// src/App.jsx
import React, { useState } from 'react';
import useStore from './store';
import TodoList from './components/TodoList';
import Categories from './components/Categories';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [newTags, setNewTags] = useState('');
  const [sortCompleted, setSortCompleted] = useState(false);

  const todos = useStore((state) =>
    state.todos
      .filter((todo) => todo.title.includes(searchTerm) && (!searchTerm || todo.title.includes(searchTerm)))
      .filter((todo) => (sortCompleted ? todo.completed : true))
  );
  const addTodo = useStore((state) => state.addTodo);
  const deleteTodo = useStore((state) => state.deleteTodo);
  const toggleTodo = useStore((state) => state.toggleTodo);

  const categories = useStore((state) => state.categories);

  const handleAddTodo = () => {
    if (newTodoTitle.trim()) {
      addTodo(newTodoTitle, selectedCategory, newTags.split(',').map((tag) => tag.trim()));
      setNewTodoTitle('');
      setSelectedCategory('');
      setNewTags('');
    }
  };

  const handleDeleteTodo = (id) => deleteTodo(id);
  const handleToggleTodo = (id) => toggleTodo(id);
  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handleSortCompleted = () => setSortCompleted(!sortCompleted);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <label>
        Dark Mode
        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
      </label>
      <input type="text" placeholder="Search todos..." value={searchTerm} onChange={handleSearch} />
      <Categories />
      <div>
        <h2>Add Todo</h2>
        <label>
          Title:
          <input type="text" value={newTodoTitle} onChange={(e) => setNewTodoTitle(e.target.value)} />
        </label>
        <label>
          Category:
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
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
          <input type="text" value={newTags} onChange={(e) => setNewTags(e.target.value)} />
        </label>
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <div>
        <label>
          Sort Completed
          <input type="checkbox" checked={sortCompleted} onChange={handleSortCompleted} />
        </label>
      </div>
      <TodoList todos={todos} categories={categories} onDelete={handleDeleteTodo} onToggle={handleToggleTodo} />
    </div>
  );
};

export default App;
