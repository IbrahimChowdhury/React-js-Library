import React, { useEffect, useState } from 'react'

export default function UseFetch(url) {

    

    const [Data, setData] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [err, seterr] = useState("");

    useEffect(() => {

        setTimeout(() => {
            fetch(url)
       .then((res)=>{
        if(!res.ok)
        {
            throw Error("Data is not fetching")
        }
        else {
            return res.json()
        }
       })
       .then((res)=>{
        setData(res)
        setisLoading(false)
        seterr(null)
       })
       .catch((error)=>{
        seterr(error.message)
        setisLoading(false)
       })
        }, 3000);
        
    }, [url]);

  return {Data, isLoading,err}
}
