import React from 'react'
import { createContext, useState, useEffect} from 'react'

export const TaskApiContext = createContext()

function TaskApiContextProvider({children}) {

  const [tasks, setTasks] = useState([]) 

    useEffect(()=>{
      fetch('http://127.0.0.1:8000/tasks')
      .then(res => res.json())
      .then(data => {
        setTasks(data)
      })
    },[])

  return (
    <TaskApiContext.Provider value={[tasks, setTasks]}>
        {children}
    </TaskApiContext.Provider>
  )
}

export default TaskApiContextProvider