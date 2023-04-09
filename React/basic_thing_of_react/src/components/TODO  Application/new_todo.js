import React, { useState } from 'react'

export default function NewTodo(props) {
const [newTdo, setnewTdo] = useState("");


let handleChange=(e)=>{
    setnewTdo(e.target.value)
}

let handleSubmit=(e)=>{
    e.preventDefault()
    props.handle(newTdo)
}

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="newTodo">New Todo : </label>
            <input type="text" id="newTodo" value={newTdo}  onChange={handleChange} />
            <button type="submit">Add</button>
        </form>
    </div>
  )
}
