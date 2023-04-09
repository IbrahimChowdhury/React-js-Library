import React, { useEffect, useState } from 'react'

export default function Form({btn,onHandleData,selectedUser}) {

    const [UsersData, setUsersData] = useState({
            name:"",
            email:"",
            password:""
    });
    let {name,email,password}=UsersData


    useEffect(() => {
        setUsersData({
            name:selectedUser.name,
            email:selectedUser.email,
            password:selectedUser.password
        })
    }, [selectedUser]);

    let handleChange=(e)=>{
        setUsersData({...UsersData,[e.target.name]:e.target.value})
    }



    let handleSubmit=(e)=>{
        e.preventDefault()
        onHandleData(UsersData)
        setUsersData({
            name:"",
            email:"",
            password:""
        })
    }


  return (
    <div>

        <form  onSubmit={handleSubmit} >
            <div>
                <label htmlFor="name">Name : </label>
                <input type="text" name='name' value={name} onChange={handleChange} id='name' />
            </div>
            <div>
                <label htmlFor="email">email : </label>
                <input type="text" name='email' id='email' onChange={handleChange} value={email} />
            </div>
            <div>
                <label htmlFor="password">password : </label>
                <input type="text" name='password' id='password' onChange={handleChange} value={password} />
            </div>
            <button type="submit">{btn}</button>
        </form>

    </div>
  )
}
Form.defaultProps={
    selectedUser:{
        name:"",
        email:"",
        password:""
    }
}
