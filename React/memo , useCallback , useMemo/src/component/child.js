import React, { memo } from 'react'

function child({msg,increaseCount}) {
    console.log("msg rendering")

  return (
    <div>
        <p>message is {msg}</p>
        <button onClick={()=>{
            increaseCount()
        }} >increase from child</button>
    </div>
  )
}

export default memo(child)