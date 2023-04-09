import React, { useState } from 'react'

export default function Form_controller() {

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

let handleName=(e)=>{
    setname(e.target.value)
}
let handleEmail=(e)=>{
    setemail(e.target.value)
}
let handlePassword=(e)=>{
    setpassword(e.target.value)
}
let handleSubmit=(e)=>{
    console.log({name,email,password})
    e.preventDefault()
}

  return (
    <div>
      <hr />
      <h2>Form Control</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input onChange={handleName} id='name' type="text" />
        <br /><br />
        <label htmlFor="email">Email:</label>
        <input id='email' type="email" onChange={handleEmail} />
        <br /><br />
        <label htmlFor="password">Password:</label>
        <input id='password' type="password" onChange={handlePassword} />
        <br /><br />
        <button type="submit" > Submit</button>

      </form>
    </div>
  )
}
