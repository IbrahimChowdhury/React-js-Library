import React from 'react'

export default function Todo(props) {
    let removeAtodo=()=>{
        props.removeTodo(props.todo.id)
    }
  return (
    <div className='mainDivTodo'>
        <p>{props.todo.title}</p>
        <p>{props.todo.desc}</p>

        <button onClick={removeAtodo}>Delete</button>
    </div>
  )
}
