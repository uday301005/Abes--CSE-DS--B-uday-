import React from 'react'
import './Fashion.css'
function Fashion({props}) {
  return (
    <div id='card'>
       <img src= {props.image} height = {100} width={100} alt="" />
       <h4>Title:{props.title}</h4>
         <h4>Price:{props.price}</h4>
    </div>
  )
}

export default Fashion