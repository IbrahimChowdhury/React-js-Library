import React, { useState } from 'react'

export default function NewTodo(props) {

    const [singleTodo, setsingleTodo] = useState({title:"",desc:""});


    let {title,desc}=singleTodo
   

    let handleChange=(e)=>{
        setsingleTodo({...singleTodo,[e.target.name]:e.target.value})
    }

    let handleSubmit=(e)=>{
       props.addTodo(singleTodo)
       console.log(singleTodo)
        e.preventDefault()
    
    }

  return (
    <div className='maindivNewTodo'>
        <form action="" onSubmit={handleSubmit} >
            <div className='inpt'>
                <label htmlFor="title">Title:</label>
                <input className='inputFill' type="text" id='title' name='title' value={title} onChange={handleChange} />
            </div>
            <div className='inpt'>
                <label htmlFor="desc">Description:</label>
                <textarea className='inputFill'  name="desc" id="desc" cols="30" rows="2" value={desc}  onChange={handleChange} ></textarea>
            </div>

            <div className='buttonDiv'> 
                <button className='btn2' type="submit">Add Todo</button>
            </div>
        </form>
    </div>
  )
}
