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
      value={{ tasks, addTask, clearTasksList }}
    >
      {children}
    </TasksContext.Provider>
  )
}
