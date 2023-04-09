import React from 'react'

export default function Todo(props) {

    let deleteTodo=()=>{
        props.removeTodo(props.todo.id)
    }

  return (
    <div  className='todoDiv'>
        <div>
        <h2>{props.todo.title}</h2>
        <p>{props.todo.desc}</p>
        </div>
        <button type="submit" className='btn2' onClick={deleteTodo} >delete</button>
    </div>
  )
}
