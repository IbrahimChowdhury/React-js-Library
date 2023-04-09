import React, { useEffect, useState } from 'react'
import Countries from "./countries"

import Search from "./Search"

export default function Main() {

    let loadingmsg="Data  is loading"
    const [country, setcountry] = useState([]);
    const [filterCountry, setfilterCountry] = useState(country);
    const [isLoading, setisLoading] = useState(true);
    const [error, seterror] = useState("");
    const url="https://restcountries.com/v3.1/all"

    
    
    useEffect(() => {
       fetch(url)
       .then((res)=>{
        if(!res.ok)
        {
            throw Error("data is not fetching")
        }
        else{
            return res.json()
        }
       })
       .then((res)=>{
        setcountry(res)
        setfilterCountry(res)
        setisLoading(false)
       })
       .catch((err)=>{
        seterror(err.message)
        setisLoading(false)
       })

    }, [url]);


    let removeCountry=(id)=>{
        let FilterCountry= filterCountry.filter((cntry)=>cntry.name.common!=id)
        
        setfilterCountry(FilterCountry)
    }

    let handleSearch=(srch)=>{
      
            let newCountry=country.filter((cntry)=>{
             let countryName=cntry.name.common.toLowerCase()
             return countryName.startsWith(srch)
            })
            setfilterCountry(newCountry)
        
    }
  return (
    <div>
        
        <div>
            <h1 style={{textAlign:"center"}}>Country App</h1>
            <Search onSearch={handleSearch} />
            <div className='loadingMsg'>
           {   isLoading && loadingmsg }
            </div>
            <Countries cntry={filterCountry} onRemoveCountry={removeCountry} />
           
        </div>

    </div>
  )
}
