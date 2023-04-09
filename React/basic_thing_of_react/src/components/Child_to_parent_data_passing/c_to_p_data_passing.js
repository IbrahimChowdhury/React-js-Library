import React from 'react'

export default function Child_to_parent_data_passing(props) {
  const data="i am from child component"
    props.onhandle(data)  
  return (
    <div>
      <hr />
      <br />
  <h3>Now we pass data from child to bottom</h3>
  <h5>want to see the result then open console </h5>

        
    </div>
  )
}
