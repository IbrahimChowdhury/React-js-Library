import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { blogsData } from './blogsData'

export default function Blogs() {

    const [blogsdata, setblogsdata] = useState(blogsData);
    
    let transcate=(str,num)=>{
        if(str.length>num)
        {
            return str.slice(0,num)+"...."
        }
        else
        {
            return str
        }
    }
 
  return (
    <div className='alldivs'>
        {
            blogsdata.map((data)=>{
                let {id,title,body}=data
                return <div key={id} className="singleDiv">
                    <h3>{title}</h3>
                    <p>{transcate(body,50)}</p>
                    <Link to={title} state={{id,title,body}}  >Learn more </Link>
                    
                </div>
            })
        }
    </div>
  )
}
