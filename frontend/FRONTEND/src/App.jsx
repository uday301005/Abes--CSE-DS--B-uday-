import React, { useEffect, useState } from 'react'
import Link1 from './components/Link1'
import './App.css'
import Fashion from './components/Fashion'
function App() {
  const [books, setBooks] = useState([]);  // [] is for array in useState
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>{
      setBooks(data);
    })
  },[])
  return (
    <div>
      {
        books.map((b,i)=>(
          <Fashion key={i}  props={b}  />
        ))
      }
      {/* <Fashion /> */}
      {/* <Link1/> */}
    </div>
  )
}

export default App