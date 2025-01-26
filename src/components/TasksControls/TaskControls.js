import { useContext } from 'react'
import { Box, Button } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { TasksContext } from '../../context/TasksContext'

const TaskControls = () => {
  const theme = useTheme()
  const { tasks, clearTasksList, deleteCompletedTasks } =
    useContext(TasksContext)

  const clearBtnDisabled = !tasks.length
  const deleteCompletedBtnDisabled = !tasks.some((task) => task.isCompleted)

  return (
    <Box
      sx={{
        marginTop: theme.spacing(4),
        display: 'flex',
        justifyContent: 'center',
        gap: '16px',
        
        '@media (max-width:390px)': {
          flexDirection: 'column',
        },
      }}
    >
      <Button
        onClick={() => clearTasksList()}
        variant="outlined"
        disabled={clearBtnDisabled}
      >
        Clear list
      </Button>
      <Button
        onClick={deleteCompletedTasks}
        variant="outlined"
        disabled={deleteCompletedBtnDisabled}
      >
        Delete completed tasks
      </Button>
    </Box>
  )
}

export default TaskControls
