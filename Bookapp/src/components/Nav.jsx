import React from 'react'
import './Nav.css'
import Login from './Login'
import Registration from './Registration'
import {Link , Route, Routes} from 'react-router-dom'
function Nav() {
  return (
    <>
    <div id="div" >
        <ul>
            <li>Home</li>
            <li>New</li>
            <li>Contact</li>
            <li>About</li>
            <Link to="/register">Register</Link>
             <Link to="/login">Login</Link>
        </ul>
    </div>
      
      
    </>
  )
}

export default Nav