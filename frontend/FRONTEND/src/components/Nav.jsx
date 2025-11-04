import React from 'react'
import './Nav.css'
function Nav() {
  return (
    <>
    <div
     style={{borderBottom: '2px solid black',padding: '0px' , margin: '0px'}}
     >
        <nav id ="nav">
            <ul >
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

        </nav>
    </div>
    </>
  )
}

export default Nav