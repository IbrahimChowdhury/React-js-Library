import React from 'react'
import { useLocation } from 'react-router-dom'



export default function Blog() {
  let location=useLocation()
  return (
    <div className='singleBlog'>
        <h1>{location.state.title}</h1>
        <p>{location.state.body}</p>
    </div>
  )
}
