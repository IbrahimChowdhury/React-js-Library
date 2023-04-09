import React from 'react'

export default function Singleuser(props) {

    let handleDelete=()=>{
        props.onDelete(props.data.id)
    }

  return (
    <div>
        <div className='singleData'>
            <h2>{props.data.id}</h2>
            <h3>{props.data.name}</h3>
            <p>{props.data.email}</p>
            <p>{props.data.phone}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    </div>
  )
}
