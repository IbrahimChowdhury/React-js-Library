// import React, { useState } from 'react'

// export default function Form_using_sprade_operator() {

//     const [user, setUser] = useState({name: '', email: '', password: ''});
//     const {name, email, password} = user
    

//     let handle=(e)=>{
//         setUser({...user,[e.target.name]: e.target.value})
        
//     }

//     let handleSubmit=(e)=>{
//         console.log(user)
//         e.preventDefault()
//     }

//     return (
//         <div>
//             <br />
//             <hr />
//             <h3>Creating Form Using Sprade Operator</h3>
//             <form action="" onSubmit={handleSubmit}>

//                 <label htmlFor="name" >Name : </label>
//                 <input onChange={handle} type="text" id="name" value={name} name="name" /> <br /><br />
//                 <label htmlFor="email">Email : </label>
//                 <input onChange={handle} type="email" id="email" value={email} name="email" /> <br /><br />
//                 <label htmlFor="password">Pass : </label>
//                 <input onChange={handle} type="password" id="password" value={password} name="password" /> <br /><br />
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     )
// }














import React, {useState} from 'react'


export default function Form_using_sprade_operator() {

    const [user, setuser] = useState({name:"",email:"", password:""});
    let {name,email,password}=user

    let handlechange=(e)=>{
        setuser({...user,[e.target.name]:e.target.value})
    }

    let handleSubmit=(e)=>{
            console.log(user)
            e.preventDefault()
    }

  return (
    <div>
        <br />
        <hr />

        <h3>Form control using spread operator </h3>
        <br />

        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="name1">Name: </label>
            <input onChange={handlechange} type="text" id='name1' value={name
            } name="name"  />
            <br /><br />
            <label htmlFor="email1">Email:</label>
            <input onChange={handlechange} type="text" id='email1' value={email
            } name="email"  />
            <br /><br />
            <label htmlFor="password1">Password:</label>
            <input onChange={handlechange} type="text" id='password1' value={password
            } name="password"  />
            <br /><br />
            <button type="submit">Submit</button>
        </form>
       

    </div>
  )
}


















