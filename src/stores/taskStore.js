import { create } from 'zustand';

export const useTaskStore = create((set) => ({
  tasks: [],
  filter: 'all',
  
  addTask: (title) => set((state) => ({
    tasks: [...state.tasks, { 
      id: Date.now(), 
      title, 
      completed: false 
    }]
  })),
  
  toggleTask: (id) => set((state) => ({
    tasks: state.tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
  })),
  
  deleteTask: (id) => set((state) => ({
    tasks: state.tasks.filter(task => task.id !== id)
  })),
  
  setFilter: (filter) => set({ filter })
}));