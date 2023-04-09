import React from 'react'
import Country  from "./country"

import {v4 as uuidv4} from "uuid"

export default function Countries(props) {
  return (
    <div  className='allCountries'>
      
       {
        props.cntry.map((data)=>{

            let Data={id:uuidv4(), data}

            return  <Country country={Data} onRemoveCountry={props.onRemoveCountry}  />
        })
       }

    </div>
  )
}
