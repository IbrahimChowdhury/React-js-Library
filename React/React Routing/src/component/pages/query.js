import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Query() {
    let [searchParams,setSearchParams]=useSearchParams()

    const [name, setname] = useState("");
    const [id, setid] = useState('');
    const [body, setbody] = useState('');

    let handleSubmit=()=>{
        setSearchParams({name:name, id:id})
    }
       

  return (
    <div>
        <h4>Now we will learn how to use query</h4>
        <br />
        <form action="" onSubmit={handleSubmit}>
            <div>

                <label htmlFor="name">Name:</label>
                <input type="text" id='name' name="name" onChange={(e)=>{
                    setname(e.target.value)
                }} />

            </div>

            <div>

                <label htmlFor="id">id:</label>
                <input type="text" id='id' name="id" onChange={(e)=>{
                    setid(e.target.value)
                }} />

            </div>
            <div>

                <label htmlFor="body">body:</label>
                <input type="text" id='body' name="body" onChange={(e)=>{
                    setbody(e.target.value)
                }} />

            </div>

            <button type="submit">Submit</button>
        </form>

        <h3>{searchParams.get("name")}</h3>
        <h3>{searchParams.get("id")}</h3>
        <h3>{searchParams.get("body")}</h3>
    </div>
  )
}
