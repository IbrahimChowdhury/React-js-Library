import React from 'react'

export default function Todos(props) {
  return (
    <div>
            {props.todos.map((todo)=>(
                <p>{todo}</p>
            ))}
    </div>
  )
}
