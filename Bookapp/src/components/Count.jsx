import React ,{useState}from 'react'
import { use } from 'react'

function Count() {
    const [c,sc] = useState(0);

    function inc (){
        sc(c+1);
    }
    function dec (){
        sc(c-1);
    }

  return (
    <div 
    style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px'
    }} 
    >
        <button  onClick={inc}>+</button>
        <h3> {c} </h3>
        <button onClick={dec}>-</button>
    </div>
  )
}

export default Count