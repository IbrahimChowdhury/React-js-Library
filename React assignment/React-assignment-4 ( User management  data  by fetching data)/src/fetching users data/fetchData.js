import React, { useEffect, useState } from 'react'
import SingleData from "./dtafetch"

export default function FetchData() {
    const loadingMsg="data is loading"
    const [data, setdata] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [error, seterror] = useState("");

    useEffect(() => {
       fetch("https://jsonplaceholder.typicode.com/users")
       .then((res)=>{
        if(!res.ok)
        {
            throw Error("data is not fetching")
        }
        else {
            return res.json()
        }
       })
       .then((res)=>{
        setdata(res)
        setisLoading(false)
       })
       .catch((err)=>{
        seterror(err.message)
        setisLoading(false)
       })
    }, []);

  return (
    <div className='main'>
        
        <h1 className='heading1'>User Management App</h1>
        <div className='maind1' >
            {
                data.map((dta)=>(
                <SingleData key={dta.id} Data={dta} />
                ))
            }
        </div>

    </div>
  )
}
