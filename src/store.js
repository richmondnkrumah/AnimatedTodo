// src/store.js
import {create} from 'zustand';

const useStore = create((set) => ({
  todos: [],
    categories: [
        { id: 1, name: "General" },
        { id: 2, name: "Work" },
        { id: 3, name: "Home" },
    ],
  addTodo: (title, categoryId, tags) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), title, completed: false, categoryId, tags }],
    })),
  deleteTodo: (id) => set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    })),
  addCategory: (name) => set((state) => ({ categories: [...state.categories, { id: Date.now(), name }] })),
}));

export default useStore;
