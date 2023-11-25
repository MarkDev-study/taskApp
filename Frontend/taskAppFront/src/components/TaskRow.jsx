import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function TaskRow({className, id, title, content}) {
  
  const handleClickDelete = (id) =>{
    const res = axios.delete(`http://127.0.0.1:8000/tasks/${id}`)
    console.log(res)
  }

  return (
    <>
        <form className={className}>
            <h3>{title}</h3>
            <h3>{content}</h3>
            <input type="checkbox" />
            <button>Editar</button>
            <button onClick={()=>handleClickDelete(id)}>Borrar</button>
        </form>
    </>
  )
}

export default TaskRow