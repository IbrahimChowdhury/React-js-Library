import React, { useState } from 'react'
import "./faq.css"
export default function Faq({ id, title, desc }) {

    const [toggle, settoggle] = useState(false);

    return (
        <div className='faq' >

            <div className='ques'>
                <h5>{title}</h5>
                <button onClick={() => {
                    settoggle(!toggle)
                }} >{toggle ? "-" : "+"}</button>
            </div>
            {toggle && (
                <p>{desc}</p>
            )}
        </div>
    )
}
