import { useContext } from 'react'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Checkbox from '@mui/material/Checkbox'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'

import { TasksContext } from '../../context/TasksContext'

const TaskList = () => {
  const { tasks } = useContext(TasksContext)

  return (
    <Box
      sx={{
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
            }}
          >
            <ListItemText>{task.text}</ListItemText>
            <Checkbox />
          </ListItem>
        ))}
      </List>
      {/* <p className="taskListText">You have not tasks yet</p> */}
    </Box>
  )
}

export default TaskList
