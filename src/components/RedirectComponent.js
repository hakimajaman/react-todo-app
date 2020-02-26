import React from 'react'
import "../assets/sass/Redirect.scss"
import "../assets/sass/FormTodos.scss"
import { Link } from 'react-router-dom'

const RedirectComponent = (props) => {

  return (
    <div className="redirect-container">
      <div className="redirect-container__box">
        <div className="redirect-h3">
          <h3>REDIRECT PAGE</h3>
        </div>
        <div className="redirect-textbox">
          <p>Sorry, this is redirect page</p>
          <p>Please login first to continue this page</p>
          <div className="redirect-link">
            <p>Click</p>
            <Link to="/"><button>Login</button></Link>
            <p>If you have an account</p>
          </div>
          <div className="redirect-link">
            <p>Click</p>
            <Link to="/register"><button>Register</button></Link>
            <p>If you dont have an account</p>
          </div>
          <div>
            {
              setTimeout(() =>
              props.history.push('/'), 5000)
            }
            <p>This page will redirect in 5 seconds</p>
            <p>If page is not redirecting <Link to="/">click here</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RedirectComponent
