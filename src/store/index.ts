import { create } from 'zustand'

interface CountState {
  count: number
  increment: () => void
}

interface TaskState {
  tasks: Array<{ name: string; priority?: number }>
  addTask: () => void
  updateTaskName: (index: number, name: string) => void
}

export const useCountStore = create<CountState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 }))
}))

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [{ name: 'First Task' }],
  addTask: () => set((state) => ({ tasks: [...state.tasks, { name: 'Untitled' }] })),
  updateTaskName: (index: number, name: string) =>
    set((state) => ({
      tasks: state.tasks.map((task, i) => (i === index ? { ...task, name } : task))
    }))
}))
