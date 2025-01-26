import { useContext } from 'react'

import { useTheme } from '@mui/material/styles'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Checkbox from '@mui/material/Checkbox'
import ListItemText from '@mui/material/ListItemText'
import { Box, Button } from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import Typography from '@mui/material/Typography'

import { TasksContext } from '../../context/TasksContext'

const TaskList = () => {
  const theme = useTheme()
  const { tasks } = useContext(TasksContext)
  const { deleteTask } = useContext(TasksContext)
  const { toggleTaskStatus } = useContext(TasksContext)

  const completedTasksCounter = tasks.filter((task) => task.isCompleted).length

  return tasks.length !== 0 ? (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 1,
        borderColor: (theme) => `${theme.palette.primary.main} !important`,
        border: '1px solid',
        minHeight: '177px',
      }}
    >
      <List sx={{ width: '100%', padding: '0' }}>
        {tasks.map((task) => (
          <ListItem
            key={task.id}
            sx={{
              borderBottom: '1px solid',
              borderColor: 'primary.main',
              '&:last-child': {
                borderBottom: '0',
              },
              textDecoration: task.isCompleted ? 'line-through' : 'none',
              color: task.isCompleted ? 'text.disabled' : 'text.primary',
              backgroundColor: task.isCompleted
                ? `${theme.palette.primary.main}11`
                : 'transparent',
            }}
          >
            <ListItemText>{task.text}</ListItemText>
            <Box sx={{ display: 'flex' }}>
              <Button
                sx={{ minWidth: '32px', marginRigth: '8px' }}
                onClick={() => deleteTask(task.id)}
              >
                <DeleteForeverIcon />
              </Button>
              <Checkbox
                checked={task.isCompleted}
                onClick={() => toggleTaskStatus(task.id)}
              />
            </Box>
          </ListItem>
        ))}
      </List>
      <Typography variant="h6" sx={{ marginTop: 'auto', marginBottom: '10px' }}>
        You have&nbsp;
        <Typography
          sx={{
            display: 'inline-block',
            fontWeight: '600',
            fontSize: '20px',
            color: 'primary.main',
          }}
        >
          {`${completedTasksCounter}`}
        </Typography>{' '}
        completed tasks
      </Typography>
    </Box>
  ) : (
    <Box
      sx={{
        borderRadius: 1,
        borderColor: (theme) => `${theme.palette.primary.main} !important`,
        border: '1px solid',
        minHeight: '177px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h5"
        sx={{ color: `${theme.palette.primary.main}60` }}
      >
        You have not tasks yet
      </Typography>
    </Box>
  )
}

export default TaskList
