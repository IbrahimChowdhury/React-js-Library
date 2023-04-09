import React from 'react'
import Todo from "./todo"

export default function Todos(props) {
  return (
    <div className='maindivtodos'>
        {props.tdos.map((todo)=>(
            
            <Todo key={todo.id} id={todo.id} tdo={todo} onRemoveTodo={props.onRemoveTodo} />
          
        ))}
    </div>
  )
}
