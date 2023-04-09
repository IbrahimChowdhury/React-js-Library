import React, { useState } from 'react'

export default function (props) {


    const [newTodo, setnewTodo] = useState({title:"", desc:""});

    let {title, desc} = newTodo

    let handleChange=(e)=>{
        setnewTodo({...newTodo,[e.target.name]:e.target.value})
    }

    let handleSubmit=(e)=>{
        props.addTodo(newTodo)
        e.preventDefault()
        setnewTodo({title:"",desc:""})
    }

    return (
        <div>

            <form action="" onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="title" >Title : </label>
                    <input type="text" id='title' name="title"  value={title} onChange={handleChange}  />
                </div>
                <div>
                    <label htmlFor="desc" >Desc : </label>
                    <textarea name="desc" id="desc" cols="30" rows="2" onChange={handleChange} value={desc} ></textarea>
                </div>

            <button type="submit">Add Todo</button>
            </form>

        </div>
    )
}
