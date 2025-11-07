import React from 'react'
import './Login.css'
function Registration() {
  return (
     <div className="container">
        <div className="form-box">
        <h2>Register</h2>
        <form>
          <div className="input-box">
            <input type="text" required />
            <label>Username</label>
          </div>
          <div className="input-box">
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="input-box">
            <input type="password" required />
            <label>Confirm Password</label>
          </div>
          <button type="submit">Register</button>
          <p className="toggle-text">
            Already have an account? <a href="#">Login</a>
          </p>
        </form>
      </div>

    </div>
  )
}

export default Registration