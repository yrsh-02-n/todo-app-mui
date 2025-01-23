import { useState } from 'react'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import theme from './components/theme/theme'
import darkTheme from './components/theme/darkTheme'

import DarkModeIcon from '@mui/icons-material/DarkMode'
import Switch from '@mui/material/Switch'
import './App.css'
import TaskForm from './components/TaskForm/TaskForm'
import TaskList from './components/TaskList/TaskList'


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const currentTheme = isDarkMode ? darkTheme : theme

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <div className="themeSwitcher">
        <DarkModeIcon color="primary" />
        <Switch onClick={handleToggleTheme}/>
      </div>
      <div className="App">
        <h1>Todo App MUI </h1>
        <TaskForm />
        <TaskList ClassName="taskList" />
      </div>
    </ThemeProvider>
  )
}

export default App
