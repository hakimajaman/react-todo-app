import React from 'react'
import "../assets/sass/body-container.scss"
import "../assets/sass/LeftSideRegister.scss"
import { Link } from 'react-router-dom'

function LeftSideLoginComponent() {
  return (
    <div className="leftside-container">
      <div className="register-container">
        <p id="logo-title">Todos</p>
        <h3>Hello, Friend!</h3>
        <p>Enter your personal details and</p>
        <p>start your journey with us</p>
        <Link to="/register"><button>SIGN UP</button></Link>
      </div>
    </div>
  )
}

export default LeftSideLoginComponent
