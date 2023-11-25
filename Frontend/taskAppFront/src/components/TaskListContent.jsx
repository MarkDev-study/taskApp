import React from 'react'
import TaskRow from './TaskRow'
import { useContext } from 'react'
import { TaskApiContext } from '../contexts/TaskApiContextProvider';

function TaskListContent({className}) {

  const [tasks, setTasks] = useContext(TaskApiContext);

  return (
    <div className={className}>
      {tasks.map((task)=>{
        return <TaskRow key={task.id} id={task.id} title={task.title} content={task.content} className={"taskrow"}/>
      })}
    </div>
  )
}

export default TaskListContent