import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useTaskStore } from './store'

interface Task {
  name: string
  priority?: number
}

const TaskForm = () => {
  const tasks = useTaskStore((state) => state.tasks)
  const addTask = useTaskStore((state) => state.addTask)

  return (
    <div>
      {tasks.map((taskState: Task, taskIndex: number) => (
        <TaskEditor key={taskIndex} taskState={taskState} index={taskIndex} />
      ))}
      <br />
      <Button onClick={addTask}>Add task</Button>
    </div>
  )
}

function TaskEditor({ taskState, index }: { index: number; taskState: Task }) {
  const updateTaskName = useTaskStore((state) => state.updateTaskName)

  return (
    <p>
      <Input
        value={taskState.name}
        onChange={(e) => {
          updateTaskName(index, e.target.value)
        }}
      />
    </p>
  )
}

export default TaskForm
