import React, { useState } from 'react'

export default function Toggle() {

    const [toggle, settoggle] = useState(true);


  return (
    <div>
        <hr /><hr />
        <h3>Toggle</h3>
        <div>
            { toggle && (
                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, inventore expedita perspiciatis incidunt minima ipsum ullam odio similique iusto consequuntur mollitia asperiores impedit nulla, commodi vitae dolor laudantium alias doloremque libero exercitationem harum enim saepe! Mollitia qui excepturi dolorem, consequuntur, nostrum quidem architecto commodi eveniet consectetur sed eum cum. Harum?</p>
            ) }
           

            <button onClick={()=>{
                settoggle(!toggle)
            }}> 
                {toggle?"Hide":"Show" }
            </button>

        </div>

    </div>
  )
}
