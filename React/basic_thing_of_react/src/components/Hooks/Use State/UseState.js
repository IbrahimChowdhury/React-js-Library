import React, { useState } from 'react'

export default function UseState() {
    let [count,setCount]=useState(0)

    let increase=()=>{
        setCount(count+1)
    }
    let decrease=()=>{
        setCount(count-1)
    }

  return (
    <div>
        <hr/>
        <h3>now we use state using useState</h3>
        <h2>{count}</h2>
        <button onClick={increase}>+</button>
        <button onClick={decrease} disabled={count===0?true:false}>-</button>
    </div>
  )
}
