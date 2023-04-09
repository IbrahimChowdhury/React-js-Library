import React from 'react'

export default function Search(porps) {

    let handleChange=(e)=>{
       let searchTxt=e.target.value.toLowerCase()
        porps.onSearch(searchTxt)
    }

  return (
    <div className='searchDiv'>
        <form action="">
            <label htmlFor="srch">Search : </label>
            <input type="text" onChange={handleChange} placeholder="enter user name" />
        </form>
    </div>
  )
}
