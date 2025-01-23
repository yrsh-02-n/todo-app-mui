import { OutlinedInput } from '@mui/material'

const tasks = []

const TaskForm = () => {
  return (
    <div>
      <OutlinedInput
        className="taskForm"
        fullWidth
        placeholder="Enter task text..."
      />
    </div>
  )
}

export default TaskForm
