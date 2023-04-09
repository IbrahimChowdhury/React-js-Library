import React, { useEffect, useState } from 'react'
import SingleData from './components/singleData';
import Form from './components/form';
import { json } from 'react-router-dom';
export default function App() {

  const [users, setusers] = useState([]);
  const [updatedFlag, setupdatedFlag] = useState(false);
  const [selectedUser, setselectedUser] = useState({
    name:"",
    email:"",
    password:""
  });

  const [selectedUserId, setselectedUserId] = useState("");


  let getAllUsers=()=>{
      fetch("http://localhost:4000/users")
      .then((res) => {
      if(!res.ok)
      {
        throw Error("data is not fetching")
      }
      return res.json()
    })
    .then((res) => {
      setusers(res)
    })
    .catch((err)=>{
      console.log(err.message)
    })
  }

  useEffect(() => {
    getAllUsers()
  }, []);
  

  let onHandleFilteredData=(id)=>{
    let filteredData= users.filter((data)=>data._id==id)[0]
    setselectedUser({
      name:filteredData.name,
      email:filteredData.email,
      password:filteredData.password
    })
    setselectedUserId(id)
    setupdatedFlag(true)
  }


  let handleDelete=(id)=>{
  fetch("http://localhost:4000/users"+`/${id}`, {
    method:"DELETE",
  })
    .then((res) => {
    if(!res.ok)
    {
      throw Error("Data is not deleting")
    }
    getAllUsers()
  })
  .catch((err)=>{
    console.log(err.message)
  })
  }


  let usersData=(users)=>{
    fetch("http://localhost:4000/users",{
      method:"POST",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify(users)
    })
    .then((res) => {
    if(!res.ok)
    {
      throw Error("data is not fetching")
    }
    getAllUsers()
  })
  
  .catch((err)=>{
    console.log(err.message)
  })
  }


  let onUpdatedData=(user)=>{
    fetch("http://localhost:4000/users"+`/${selectedUserId}`,{
      method:"put",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify(user)
    })
    .then((res) => {
    if(!res.ok)
    {
      throw Error("data is not fetching")
    }
    getAllUsers()
    setupdatedFlag(false)
  })
  
  .catch((err)=>{
    console.log(err.message)
  })
  }

 
  


  return (
    <div>

      <h1>Users data management</h1>
      {
        updatedFlag ? <Form btn={"Update Data"}  selectedUser={selectedUser}  handleData={onUpdatedData}  />:<Form handleData={usersData} btn={"Add data"} />
      }
      

      <div className='alldata' >
        {
          users.map((data) => {
            return <SingleData onDelete={handleDelete} handleUpdate={onHandleFilteredData}   key={data._id}   users={data} />
          })
        }

      </div>
    </div>
  )
}

