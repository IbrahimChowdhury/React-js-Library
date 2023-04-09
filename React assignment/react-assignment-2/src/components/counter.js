import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

export default function Counter() {
    
    let [count,setCount]=useState(0)

    let plus=()=>{
        setCount(count+1)
    }
    let minus=()=>{
        setCount(count-1)
    }
    let reset=()=>{
        setCount(0)
    }


  return (
    <div className='counter'>

        <div >
            <h1>Counter</h1>
            <h2>{count}</h2>
            <Button variant="outline-primary me-3"  className='btn' onClick={plus} disabled={count===5?true : false}>+</Button>
            <Button variant="outline-primary me-3" className='btn' onClick={minus} disabled={count===0?true : false}>-</Button>
            <Button variant="outline-primary me-3 " className='btn' onClick={reset}>Reset</Button>
            
             

        </div>

    </div>
  )
}
