import TaskApiContextProvider from './contexts/TaskApiContextProvider'
import FormTask from './components/FormTask'
import TaskListContent from './components/TaskListContent'
import './App.css'


function App() {



  return (
    <>
      <TaskApiContextProvider>
        <FormTask className="taskform"/>
        <TaskListContent  className='taskcontainer'/>
      </TaskApiContextProvider>
    </>
  )
}

export default App
