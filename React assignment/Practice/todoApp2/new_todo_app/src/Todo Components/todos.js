import React from 'react'
import Todo from "./todo"
export default function Todos(props) {
  return (
    <div className='todosDiv'>
        {props.todos.map((todo)=>
            <Todo key={todo.id} todo={todo} removeTodo={props.removeTodo} />
        )}
    </div>
  )
}
