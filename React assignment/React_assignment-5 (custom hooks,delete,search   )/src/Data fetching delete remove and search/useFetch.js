import React, { useEffect, useState } from 'react'

export default function useFetch(url) {

    const [User, setUser] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [error, seterror] = useState("");

    useEffect(() => {
        
        fetch(url)
        .then((res)=>{
            if(!res.ok)
            {
                throw Error("Data is not fetching")
            }
            else
            {
                return res.json()
            }
        })
        .then((res)=>{
            setUser(res)
            setisLoading(false)
        })
        .catch((err)=>{
            seterror(err.message)
        })

    }, [url]);



  return {User,isLoading,error}
}
