import React, { useState } from 'react'

export default function NewTodo(props) {

    const [newTodo, setnewTodo] = useState({title:"",desc:""});

    let {title, desc}=newTodo

    let handleChange=(e)=>{
        setnewTodo({...newTodo,[e.target.name]:e.target.value})
    }

let handleSubmit=(e)=>{
    props.addNewTodo(newTodo)
    setnewTodo({title:"",desc:""})
    e.preventDefault()
}

  return (
    <div className='newTodoDiv' >
        <form action="" onSubmit={handleSubmit}>
            <div  >
                <label htmlFor="title">Title : </label>
                <input type="text" id='title' onChange={handleChange} value={title}  name="title" />
            </div>
            <div>
                <label htmlFor="desc">Description : </label>
                <input type="text" id='desc' onChange={handleChange} value={desc}  name="desc" />
            </div>
            <section className='btn1'>
                     <button type="submit" >Add Todo</button>
            </section>
        </form>

    </div>
  )
}
