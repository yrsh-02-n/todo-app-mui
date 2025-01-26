import { createContext, useState, useEffect } from 'react'

export const TasksContext = createContext()
export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    setTasks((tasks) => [...tasks, task])
  }

  const clearTasksList = () => {
    setTasks([])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleTaskStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, isCompleted: !task.isCompleted }
          : { ...task }
      )
    )
  }

  const deleteCompletedTasks = () => {
    setTasks(tasks.filter((task) => !task.isCompleted))
  }

  // localStorage
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks')
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <TasksContext.Provider
      value={{
        tasks,
        addTask,
        clearTasksList,
        deleteTask,
        toggleTaskStatus,
        deleteCompletedTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}
