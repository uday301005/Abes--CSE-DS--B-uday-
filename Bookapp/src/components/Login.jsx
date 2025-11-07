import React from 'react'
import './Login.css'
function Login() {
  return (
     <div className="container">
    <div className="form-box">
        <h2>Login</h2>
        <form>
          <div className="input-box">
            <input type="text" required />
            <label>Username</label>
          </div>
          <div className="input-box">
            <input type="password" required />
            <label>Password</label>
          </div>
          <button type="submit">Login</button>
          <p className="toggle-text">
            Don’t have an account? <a href="#">Register</a>
          </p>
        </form>
      </div>
      </div>
  )
}

export default Login