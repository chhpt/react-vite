import { Button } from 'antd'
import { proxy, useSnapshot } from 'valtio'

interface Task {
  name: string
  priority?: number
}

const state = proxy<Task[]>([{ name: 'First Task' }])

const TaskForm = () => {
  const tasks = useSnapshot(state)

  return (
    <div>
      {tasks.map((taskState: Task, taskIndex) => (
        <TaskEditor key={taskIndex} taskState={taskState} index={taskIndex} />
      ))}
      <br />
      <Button onClick={() => state.push({ name: 'Untitled' })}>Add task</Button>
    </div>
  )
}

function TaskEditor({ taskState, index }: { index: number; taskState: Task }) {
  return (
    <p>
      <input
        value={taskState.name}
        onChange={(e) => {
          state[index].name = e.target.value
        }}
      />
    </p>
  )
}

export default TaskForm
