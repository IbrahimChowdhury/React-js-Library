import React from 'react'
import "./singleuser.css"
export default function SingleData(props) {
    let user =props.user


    let handleEdit=()=>{
        props.onEditData(user._id)
    }

    let handleDelete=()=>{
        props.onDeleteData(user._id)
    }
  return (
    <div>
        <div className='singleUser'>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <h4>{user.password}</h4>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    </div>
  )
}
