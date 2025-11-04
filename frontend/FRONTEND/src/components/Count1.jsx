import React, { useState } from 'react'


function Count1() {
    const [c,setc] = useState(0);
 function add(){ 
        setc(c+1);
  };
 function sub(){
        setc(c-1);
};
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' , fontSize: '24px', marginTop: '50px'}}>
        <button onClick={add}>+</button>
        <span>{c}</span>
        <button onClick={sub} >-</button>
    </div>
  )
}

export default Count1