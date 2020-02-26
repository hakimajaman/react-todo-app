import React from 'react'
import "../assets/sass/body-container.scss"
import "../assets/sass/LeftSideRegister.scss"
import { Link } from 'react-router-dom'

function LeftSideRegisterComponent() {
  return (
    <div className="leftside-container">
      <div className="register-container">
        <p id="logo-title">Todos</p>
        <h3>Welcome Back!</h3>
        <p>To keep connected with us please</p>
        <p>login with your personal info</p>
        <Link to="/"><button>SIGN IN</button></Link>
      </div>
    </div>
  )
}

export default LeftSideRegisterComponent
