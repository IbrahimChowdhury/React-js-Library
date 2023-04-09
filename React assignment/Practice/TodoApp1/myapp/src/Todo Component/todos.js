import React from 'react'
import Todo from "./todo"
export default function todos(props) {
  return (
    <div >
       {props.todos.map((todo)=>
        <Todo key={todo.id} removeTodo={props.removeTodo}  todo={todo} />
       )}
    </div>
  )
}
