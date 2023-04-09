import React, { useState } from 'react'
import Todos from "./todos"
import NewTodo from "./new_todo"

let todos=["todo1","todo2"]

export default function Main_todo() {

    const [alltodos, setalltodos] = useState(todos);

    let addTodo=(newTodo)=>{
        setalltodos([...alltodos,newTodo])
    }
  return (
    <div>
        <hr /><hr />
        <h3>TODO Application</h3>

        <NewTodo handle={addTodo} />

        <Todos todos={alltodos} />
    </div>
  )
}
