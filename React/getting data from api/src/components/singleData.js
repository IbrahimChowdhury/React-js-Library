import React from 'react'
import "../css/singleData.css"
export default function (props) {

let handleDelete=()=>{
            props.onDelete(props.users._id)
            
    }    

let handleUpdate=()=>{
        props.handleUpdate(props.users._id)
}

  return (
    
    
        <div className='singleData'>
                <h3>{props.users.name}</h3>
                <p>{props.users.email}</p>
                <p>{props.users.password}</p>
                <p>{props.users._id}</p>
                <button onClick={handleUpdate} >edit</button>
                <button onClick={handleDelete}>delete</button>
        </div>

  
  )
}
