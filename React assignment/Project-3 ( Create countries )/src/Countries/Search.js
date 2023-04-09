import React, { useState } from 'react'

export default function Search(props) {
    
    const [search, setsearch] = useState("");
    
    

    let handleChange=(e)=>{

        let name=e.target.value
        let lwName=name.toLowerCase()
        props.onSearch(lwName)
        
    }

    

    return (
        <div>
            <form action=""  >

                <div className='search'>
                    <label htmlFor="search"> Search : </label>
                    <input type="text" name='search' placeholder='search country'  onChange={handleChange} />
                </div>
                
            </form>
        </div>
    )
}
