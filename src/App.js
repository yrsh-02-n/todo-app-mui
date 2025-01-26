import { useState, useEffect } from 'react'

import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import lightTheme from './components/theme/lightTheme'
import darkTheme from './components/theme/darkTheme'
import Typography from '@mui/material/Typography'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import Switch from '@mui/material/Switch'
import { Box } from '@mui/material'

import { TasksProvider } from './context/TasksContext'
import TaskForm from './components/TaskForm/TaskForm'
import TaskList from './components/TaskList/TaskList'
import TaskControls from './components/TasksControls/TaskControls'

function App() {
  const [theme, setTheme] = useState(false)
  const [switchChecked, setSwitchChecked] = useState(false)
  const currentTheme = theme ? lightTheme : darkTheme

  const handleToggleTheme = () => {
    setTheme(!theme)
    setSwitchChecked(!switchChecked)
  }

  // localStorage
  // theme
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      setTheme(JSON.parse(storedTheme))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  // switch
  useEffect(() => {
    const storedSwitch = localStorage.getItem('themeSwitcher')
    if (storedSwitch) {
      setSwitchChecked(JSON.parse(storedSwitch))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('themeSwitcher', JSON.stringify(switchChecked))
  }, [switchChecked])

  return (
    <TasksProvider>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        <Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              position: 'absolute',
              right: 0,
              top: 0,
            }}
          >
            <DarkModeIcon color="primary" />
            <Switch onClick={handleToggleTheme} checked={!switchChecked} />
          </Box>
        </Box>
        <Box
          sx={{
            margin: '0 auto',
            padding: '20px',
            maxWidth: '600px',
            textAlign: 'center',
            '@media (max-width:530px)': {
              marginTop: '30px'
            },
          }}
        >
          <Typography variant="h1">Todo App MUI </Typography>
          <TaskForm />
          <TaskList />
          <TaskControls />
        </Box>
      </ThemeProvider>
    </TasksProvider>
  )
}

export default App
