import { useState } from 'react'
import Book from './components/Book'
import Nav from './components/Nav'
import './App.css'
import Login from './components/Login'
import Registration from './components/Registration'
import { Link, Route , Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>

    <h2>Book App</h2>
   
    <div id='app'>
       <Book b = "Maths" p = "250" />
       <Book b = "Physics" p = "300" />
       <Book b = "Chemistry" p = "270" />
       </div>

        <Routes>
        <Route/>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Registration/>} />
      </Routes>
    
    </>
  )
}

export default App
