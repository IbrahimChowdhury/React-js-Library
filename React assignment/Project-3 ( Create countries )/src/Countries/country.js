import React from 'react'
import "./css/main.css"

export default function Country(props) {


  const { name, population, capital, area, flags } = props.country.data

  let id=props.country.id

  let removecountry=()=>{
   props.onRemoveCountry(name.common)
  }

  return (

    <div className='singleCountryMain'>

      <div className='singleCountry'>
        <img src={flags.png} alt="" />
        <p>Name : {name.common}</p>
        <p> Population : {population}</p>
        <p>Capital : {capital}</p>
        <p>Area :  {area}</p>
        <button onClick={removecountry} >Remove Country</button>
      </div>
    </div>

  )
}
