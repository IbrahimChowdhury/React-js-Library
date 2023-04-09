import React from 'react'
import { NavLink } from 'react-router-dom'
import "./nav.css"
export default function Navbar() {
  return (
   <nav>

        <NavLink to="/"  className="nav-link">Home</NavLink>
        <NavLink to="/contact"  className="nav-link">Contact</NavLink>
        <NavLink to="/blogs"  className="nav-link">Blogs</NavLink>

   </nav>
  )
}
