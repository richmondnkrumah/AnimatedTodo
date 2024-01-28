// src/store.js
import {create} from 'zustand';
import { v4 as uniqueID } from "uuid";


const useStore = create((set,get) => {
  const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];

  const storedTags = JSON.parse(localStorage.getItem('tags')) || [
    {
      id:uniqueID(),
      name:"wow"
    },
    {
      id:uniqueID(),
      name:'Hi'
    },
    {
      id:uniqueID(),
      name:'See'
    }
  ];

  return {
    todos: storedTodos,
    tags: storedTags,
    addTodo: (title, Priority, tags) =>
      set((state) => {
        const newTodos = [...state.todos, { id:uniqueID(), title, completed: false, Priority, tags,date: Date.now() }];
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
      getRecentTodos: () => {
        const currentTodos = get().todos
          const limit = currentTodos.length > 10 ? 10: currentTodos.length
          const recentTodos = []
          for(let index = currentTodos.length; index > (currentTodos.length - limit); index--) {
            recentTodos.push(currentTodos[index-1])
          }
          return recentTodos
      },
    
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
