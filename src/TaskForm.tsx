import { Button } from 'antd'
import { useState, State } from '@hookstate/core'

interface Task {
  name: string
  priority?: number
}

const TaskForm = () => {
  const state: State<Task[]> = useState([{ name: 'First Task' }] as Task[])

  return (
    <div>
      {state.map((taskState: State<Task>, taskIndex) => (
        <TaskEditor key={taskIndex} taskState={taskState} />
      ))}
      <br />
      <Button onClick={() => state.merge([{ name: 'Untitled' }])}>Add task</Button>
    </div>
  )
}

function TaskEditor(props: { taskState: State<Task> }) {
  const taskState = useState(props.taskState)

  console.log('render task')

  return (
    <p>
      <input value={taskState.name.get()} onChange={(e) => taskState.name.set(e.target.value)} />
    </p>
  )
}

export default TaskForm
