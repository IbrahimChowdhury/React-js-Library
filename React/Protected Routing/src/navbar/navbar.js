import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./navbar.css"
export default function Navbar() {
  return <nav>
        <NavLink to="/"  className='navlink'>Home</NavLink>
        <NavLink to="/allblogs"  className='navlink'>All Blogs</NavLink>
        <NavLink to="/about"  className='navlink'>About</NavLink>
    </nav>
  
}
