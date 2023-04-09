import React, { useEffect, useState } from 'react'

export default function FetchData() {

    const dtaLoading="Data is loading" 
    const [data, setdata] = useState([]);
    const [dataLoading, setdataLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            return res.json()
        })
        .then((datas)=>{
            setdata(datas)
            setdataLoading(false)
        })

      }, 4000);
       
    }, []);

  return (
    <div>
        <br /><br />
        <hr /><hr />
        <h3>Fetching Data for Practice </h3>
        {dataLoading && dtaLoading}
        {data.map((dta)=>(
            <div>
                <span>id :{dta.id} &nbsp;&nbsp;</span>
                <span>name :{dta.name}</span>
            </div>
        ))}

    </div>
  )
}
