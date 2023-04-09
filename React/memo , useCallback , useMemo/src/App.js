import React, { useCallback, useMemo, useState } from 'react'
import Child from './component/child'
function App() {

  const [count, setcount] = useState(0);
  const [toggle, settoggle] = useState(false);

  // useCallback function 
  let handleIncreaseCount = useCallback(() => {
    setcount(count + 1)
  }, [count])


  // useMemo
  let calculatedNumber = useMemo(() => {
    let number = 0;
    for (let index = 0; index < 500000000; index++) {
      number++;
    }
    return number;
  }, [])



  console.log("app rendering")

  return (
    <div>

      {
        toggle ? "ON" : "OFF"
      }
      <button onClick={() => {
        settoggle(!toggle)
      }}>toggle</button>

      <h2>NUmber is : {calculatedNumber}</h2>

      <h1>Count is : {count}</h1>
      <button onClick={() => {
        setcount(count + 1)
      }}>increase</button>

      <Child msg={count} increaseCount={handleIncreaseCount} />

    </div>
  )
}

export default App