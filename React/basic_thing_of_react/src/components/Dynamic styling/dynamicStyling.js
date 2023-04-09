import React, { useState } from 'react'

import "./dynamicStyle.css"

export default function Dynamic_Styling() {

  const [style, setstyle] = useState(false);

  let handleChange=(e)=>{
      let txt=e.target.value
      if(txt.length<2)
      {
        setstyle(false)
      }
      else{
        setstyle(true)
      }
  }
 

  return (
    <div>
      <br /><br />
      <hr /><hr />
      <h2>Dynamic Styling</h2>
      <p>write 2 or more letter on the input form then see the changes</p>
      <input type="text" onChange={handleChange} className={`${style?"valid" : "invalid"}`} />
    
    </div>
  )
}
