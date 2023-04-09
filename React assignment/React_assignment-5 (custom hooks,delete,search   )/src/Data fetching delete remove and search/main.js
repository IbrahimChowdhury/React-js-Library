import React, { useEffect, useState } from 'react'
import useFetch from './useFetch'
import Singleuser from './singleuser'
import Search from "./search"
import "./css/main.css"

export default function main() {

  let url="https://jsonplaceholder.typicode.com/comments"
  const {User,isLoading,error}=useFetch(url)

  const [allUser, setallUser] = useState([]);

  useEffect(() => {
   if(User){
    setallUser(User)
   }
  }, [User]);


  let handleDelete=(id)=>{
      let filterData= allUser.filter((data)=>data.id!=id)
      setallUser(filterData)
  }


  let handleSearch=(name)=>{
        let searchData=User.filter((data)=>{
          let nametxt=data.name.toLowerCase()
          return nametxt.startsWith(name)
        })
        setallUser(searchData)
  }


  return (
    <div className='mainDiv'>
      <div>
      <h1>User Management App</h1>
      </div>
      
    <div>
      <Search onSearch={handleSearch} />
    </div>


      <div className='allUser'>
          {allUser.map((usr)=>{
            return <Singleuser key={usr.id} onDelete={handleDelete} data={usr}  />
          })}
      </div>

    </div>
  )
}
