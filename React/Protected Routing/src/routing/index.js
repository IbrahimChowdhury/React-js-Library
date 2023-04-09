import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../pages/about'
import AllBlog from '../pages/AllBlog'
import HOME from '../pages/home'
import Navbar from '../navbar/navbar'
import Protected from "../protected Routing/protected"
export default function Index() {

    const [isLoggedIn, setisLoggedIn] = useState(false);
  return(   
    
    <BrowserRouter>

            <Navbar/>
       
            {
                isLoggedIn ? <button onClick={()=>{
                    setisLoggedIn(!isLoggedIn)
                }} >Log out</button> : <button onClick={()=>{
                      setisLoggedIn(!isLoggedIn)  
                }} >Log in</button>
            }

    <Routes>

        <Route path='/'  element={<HOME/>} />
        <Route path='/about'  element={<About/>} />
        <Route path='/allblogs' element={
            <Protected isLoggedIn={isLoggedIn}  >
                    <AllBlog/>
            </Protected>
        }  />
          


    </Routes>
  
  </BrowserRouter>

  )
}
