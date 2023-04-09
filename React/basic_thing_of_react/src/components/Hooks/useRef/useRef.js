import React from 'react'
import { useRef } from 'react'

export default function UseRef() {


    let nameRef=useRef()
    let passwordRef=useRef()


    let handleSubmit=(e)=>{
            let name=nameRef.current.value
            let password=passwordRef.current.value

            nameRef.current.style.color="white"
            nameRef.current.style.backgroundColor="grey"

            console.log({name,password})
            e.preventDefault()
    }

  return (
    <div>
            <br /><br />
            <hr /><hr />


        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id='name' ref={nameRef} />
            </div>
            <div>
                <label htmlFor="password">password:</label>
                <input type="password" id='password' ref={passwordRef} />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
