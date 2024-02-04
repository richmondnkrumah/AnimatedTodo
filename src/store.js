// src/store.js 
import { create } from "zustand";
import { v4 as uniqueID } from "uuid";

const useStore = create((set, get) => {
  const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
  //  [
  //   {
  //     id: uniqueID(),
  //     title: "mobile",
  //     subTitle: "cffffgfffgfg",
  //     tasks: storedTodos,
  //     endDate: Date.now(),
  //     creationDate: Date.now(),
  //     completed: false,
  //   },

  // ];
  const storedTags = JSON.parse(localStorage.getItem("tags")) || [
    {
      id: uniqueID(),
      name: "wow",
    },
    {
      id: uniqueID(),
      name: "Hi",
    },
    {
      id: uniqueID(),
      name: "See",
    },
  ];

  return {
    todos: storedTodos,
    tags: storedTags,
    projects: storedProjects,
    addTodo: (title, Priority, tags) =>
      set((state) => {
        const newTodos = [
          ...state.todos,
          {
            id: uniqueID(),
            title,
            completed: false,
            Priority,
            tags,
            date: Date.now(),
          },
        ];
        localStorage.setItem("todos", JSON.stringify(newTodos));
        return { todos: newTodos };
      }),
    deleteTodo: (id) =>
      set((state) => {
        const newTodos = state.todos.filter((todo) => todo.id !== id);
        localStorage.setItem("todos", JSON.stringify(newTodos));
        return { todos: newTodos };
      }),
    addProject: (title, subTitle, tasks, endDate) =>
      set((state) => {
        const newProjects = [
          ...state.projects,
          {
            id: uniqueID(),
            creationDate: Date.now(),
            title,
            subTitle,
            completed: false,
            tasks,
            endDate,
          },
        ];
        localStorage.setItem("projects", JSON.stringify(newProjects));
        return { projects: newProjects };
      }),
    deleteProject: (id) =>
      set((state) => {
        const newProjects = state.projects.filter(
          (project) => project.id !== id
        );
        localStorage.setItem("projects", JSON.stringify(newProjects));
        return { projects: newProjects };
      }),
    projectTaskOperation: (projectID, taskID, mode) => {
      set((state) => {
        let newProjects;
        switch (mode) {
          case "delete":
            newProjects = state.projects.map((project) =>
              project.id === projectID
                ? {
                    ...project,
                    tasks: project.tasks.filter((task) => task.id !== taskID),
                  }
                : project
            );
            break;

          case "toggle":
            newProjects = state.projects.map((project) =>
              project.id === projectID
                ? {
                    ...project,
                    tasks: project.tasks.map((task) =>
                      task.id === taskID
                        ? { ...task, completed: !task.completed }
                        : task
                    ),
                  }
                : project
            );

            break;
          default:
            newProjects = state.projects;
            break;
        }
        return { projects: newProjects };
      });
    },
    toggleTodo: (id) =>
      set((state) => {
        const newTodos = state.todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        console.log(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));

        return { todos: newTodos };
      }),
    getRecentTodos: () => {
      const currentTodos = get().todos;
      const limit = currentTodos.length > 10 ? 10 : currentTodos.length;
      const recentTodos = [];
      for (
        let index = currentTodos.length;
        index > currentTodos.length - limit;
        index--
      ) {
        recentTodos.push(currentTodos[index - 1]);
      }
      return recentTodos;
    },
    getRecentProjects: () => {
      const currentProjects = get().projects;
      const limit = currentProjects.length > 2 ? 2 : currentProjects.length;
      const recentProjects = [];
      for (
        let index = currentProjects.length;
        index > currentProjects.length - limit;
        index--
      ) {
        recentProjects.push(currentProjects[index - 1]);
      }
      return recentProjects;
    },
    addTag: (name) =>
      set((state) => {
        const newTags = [...state.tags, { id: Date.now(), name }];
        localStorage.setItem("tags", JSON.stringify(newTags));
        return { tags: newTags };
      }),
    deleteTag: (id) =>
      set((state) => {
        const newTags = state.tags.filter((tag) => tag.id !== id);
        localStorage.setItem("tags", JSON.stringify(newTags));
        return { tags: newTags };
      }),
  };
});

export default useStore;
