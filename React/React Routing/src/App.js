import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./component/pages/home"
import Blogs from "./component/pages/blogs"
import Contact from "./component/pages/contact"
import Error from "./component/pages/error"
import Navbar from './component/navbar/navbar'
import Blog from "./component/pages/blog"
import Users from "./component/pages/params"
import Query from "./component/pages/query"


export default function App() {
  return (
    <div>
        <BrowserRouter>
        
          <Navbar/>

          <Routes>

            <Route path='/'  element={<Home/>}/>
            <Route path='/contact' element={<Contact/>} />
            <Route path='/blogs' element={<Blogs/>} />
            <Route path='/blogs/:title' element={<Blog/>} />
            <Route path='*' element={<Error/>} />
            <Route path='/home/:userID' element={<Users/>} />
            <Route path='/query' element={<Query/>}  />
            </Routes>
 
        </BrowserRouter>

    </div>
  )
}
