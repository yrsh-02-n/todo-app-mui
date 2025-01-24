import { useContext } from 'react'
import { Box, Button } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { TasksContext } from '../../context/TasksContext'

const TaskControls = () => {
  const theme = useTheme()
  const { tasks, clearTasksList } = useContext(TasksContext)

  const clearBtnDisabled = !tasks.length

  const handleClearTasksList = () => {
    clearTasksList()
  }

  return (
    <Box sx={{ marginTop: theme.spacing(4) }}>
      <Button
        onClick={handleClearTasksList}
        variant="outlined"
        disabled={clearBtnDisabled}
      >
        Clear list
      </Button>
    </Box>
  )
}

export default TaskControls
