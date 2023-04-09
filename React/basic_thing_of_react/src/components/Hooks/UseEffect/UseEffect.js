import React, { useEffect, useState } from 'react'

export default function UseEffect() {

    const [count, setcount] = useState(0);
    useEffect(() => {
        console.log("useEffect")
       
    }, []);

// go to console to see the useEffect

  return (
    <div>
        <br /><br />
        <hr /><hr />
        {console.log("rendering")}
        <h4>useEffect</h4>
        <h5>count:{count}</h5>
        <button onClick={()=>{
            setcount(count=>count+1)
        }}>+</button>
    </div>
  )
}
