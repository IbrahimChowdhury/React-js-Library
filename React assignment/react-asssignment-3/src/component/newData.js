import React from 'react'
import { useState } from 'react';

export default function NewData(props) {

    const [newData, setnewData] = useState({title:"",desc:""});

    let {title, desc}=newData

    let handleChange=(e)=>{
        setnewData({...newData,[e.target.name]:e.target.value})
    }

    let handleSubmit=(e)=>{
       props.addData(newData)
        setnewData({title:"",desc:""})
        e.preventDefault()
    }

  return (
    <div>

        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title :</label>
                <input type="text" id='title' onChange={handleChange} value={title} name="title" />
            </div>
            <div>
                <label htmlFor="desc">description :</label>
                <input type="text" id='desc' onChange={handleChange} value={desc} name="desc"  />
            </div>
            <button type="submit">add</button>
        </form>

    </div>
  )
}
