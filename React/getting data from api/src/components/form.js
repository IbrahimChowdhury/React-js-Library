import React, { useEffect, useState } from 'react'
import UserFrom from "prop-types"
export default function UserForm({handleData,selectedUser,btn}) {

    const [users, setusers] = useState({
        name:"",
        email:"",
        password:"",
       
    });

    
    let {name,email,password}=users

    useEffect(() => {
      setusers({
        name:selectedUser.name,
        email:selectedUser.email,
        password:selectedUser.password
      })
    }, [selectedUser]);

    let handleCheck=()=>{
        console.log(selectedUser)
    }
    
  
    let handleChange=(e)=>{
        setusers({...users,[e.target.name]:e.target.value})
    }

   
    let handleSubmit=(e)=>{
        e.preventDefault()
        handleData(users)
        setusers({
            name:"",
            email:"",
            password:""
        })
    }

   


  return (
    <div>
            <form onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id='name' name='name' value={name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">email:</label>
                    <input type="email" id='email' name='email' value={email} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="password">password:</label>
                    <input type="password" id='password' name='password' value={password} onChange={handleChange} />
                </div>
                <button type="submit">{btn}</button>
            </form>
            <br />
            <button onClick={handleCheck}>check</button>
    </div>
  )

}

UserForm.defaultProps={
    selectedUser:{
        name:"",
        email:"",
        password:""
    }
}
