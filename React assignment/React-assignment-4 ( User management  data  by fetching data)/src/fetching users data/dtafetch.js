import React from 'react'
import  "./css/main.css"
export default function Dtafetch(props) {
  return (
    <div className='singleData'>
            <h4>{props.Data.id}</h4>
            <h3>{props.Data.name}</h3>
            <p>{props.Data.email}</p>
            <p>{props.Data.phone}</p>
    </div>
  )
}
