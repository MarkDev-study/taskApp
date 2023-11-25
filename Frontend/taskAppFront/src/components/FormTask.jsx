import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useContext } from 'react'
import { TaskApiContext } from '../contexts/TaskApiContextProvider'

function FormTask({className}) {

  const [tasks, setTasks] = useContext(TaskApiContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleChangeTitle = (e) =>{
    e.preventDefault();
    setTitle(e.target.value);
  }
  
  const handleChangeContent = (e) =>{
    e.preventDefault();
    setContent(e.target.value);
  }

  const handleClick = () => {

      const res = axios.post('http://127.0.0.1:8000/tasks/new',{
        title: title,
        content:content
      })
      console.log(res)
  }


  return (
    <form className={className}>
        <h2>Todo APP</h2>
        <label htmlFor="title">Titulo</label>
        <input type="text" value={title} onChange={handleChangeTitle}/>
        <label htmlFor="title">Descripcion</label>
        <input type="text" value={content} onChange={handleChangeContent}/>
        <button type='submit' onClick={() => handleClick()}>Crear Tarea</button>
    </form>
  )
}

export default FormTask