import { useState, useContext } from 'react'

import { Box, Button, OutlinedInput } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import { v4 as uuidv4 } from 'uuid'

import { TasksContext } from '../../context/TasksContext'

const TaskForm = () => {
  const theme = useTheme()
  const [taskText, setTaskText] = useState('')
  const { addTask } = useContext(TasksContext)

  const submitHandler = (e) => {
    e.preventDefault()

    if (taskText) {
      addTask({
        text: taskText,
        id: uuidv4(),
        isComplete: false,
      })
      setTaskText('')
    }
    console.log(taskText);
  }

  return (
    <Box
      onSubmit={submitHandler}
      component="form"
      sx={{ marginBottom: theme.spacing(4), display: 'flex' }}
    >
      <OutlinedInput
        sx={{
          marginBottom: theme.spacing(2),
          borderRadius: '4px 0px 0px 4px',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main,
          },
        }}
        fullWidth
        placeholder="Enter task text..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <Button
        type="submit"
        onClick={submitHandler}
        variant="contained"
        sx={{ maxHeight: '56px', borderRadius: '0px 4px 4px 0px' }}
      >
        Add
      </Button>
    </Box>
  )
}

export default TaskForm
