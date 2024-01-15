// src/store.js
import {create} from 'zustand';

const useStore = create((set) => {
  const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
  const storedCategories = JSON.parse(localStorage.getItem('categories')) || [];
  const storedTags = JSON.parse(localStorage.getItem('tags')) || [];

  return {
    todos: storedTodos,
    categories: storedCategories,
    tags: storedTags,
    addTodo: (title, categoryId, tags) =>
      set((state) => {
        const newTodos = [...state.todos, { id: Date.now(), title, completed: false, categoryId, tags }];
        localStorage.setItem('todos', JSON.stringify(newTodos));
        return { todos: newTodos };
      }),
    deleteTodo: (id) =>
      set((state) => {
        const newTodos = state.todos.filter((todo) => todo.id !== id);
        localStorage.setItem('todos', JSON.stringify(newTodos));
        return { todos: newTodos };
      }),
    toggleTodo: (id) =>
      set((state) => {
        const newTodos = state.todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
        localStorage.setItem('todos', JSON.stringify(newTodos));
        return { todos: newTodos };
      }),
    addCategory: (name) =>
      set((state) => {
        const newCategories = [...state.categories, { id: Date.now(), name }];
        localStorage.setItem('categories', JSON.stringify(newCategories));
        return { categories: newCategories };
      }),
    addTag: (name) =>
      set((state) => {
        const newTags = [...state.tags, { id: Date.now(), name }];
        localStorage.setItem('tags', JSON.stringify(newTags));
        return { tags: newTags };
      }),
    deleteTag: (id) =>
      set((state) => {
        const newTags = state.tags.filter((tag) => tag.id !== id);
        localStorage.setItem('tags', JSON.stringify(newTags));
        return { tags: newTags };
      }),
  };
});

export default useStore;
