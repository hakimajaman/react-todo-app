import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom'
import '../assets/sass/body-container.scss';
import '../assets/sass/MainSideRegister.scss';

function RightSideLoginComponent(props) {

  let url = "https://miniprojectc.herokuapp.com/api/v1/"
  let headers = {
    "Content-Type": "application/json",
    accept: "application/json"
  }

  const [loginUser, setLoginUser] = useState({
    email: "",
    password: ""
  })

  const onChange = (e) => {
    setLoginUser({
      ...loginUser,
      [e.target.name]: e.target.value
    })
    console.log(loginUser)
  }

  const login = async() => {
    try {
      let data = loginUser
      let send = JSON.stringify(data)
      let sending = await fetch(
        `${url}users/login`,
        {
          method: "POST",
          headers: headers,
          body: send
        }
      )
      let res = await sending.json();
      console.log(res)
      localStorage.setItem('token', res.data)
      setLoginUser({
        email: "",
        password: ""
      })
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div className="mainside-container">
      <div className="main-register-container">
        <h3>Sign in to Task Manager</h3>
        <div className="main-register-container__link">
          <button id="facebook">f</button>
          <button id="googlePlus">G+</button>
          <button id="linkedIn">in</button>
        </div>
        <p>or use your email for registration</p>
        <form>
          <input
            type="email"
            name="email"
            placeholder="Email"
            id="login-email"
            value={loginUser.email}
            onChange={onChange}
          />
          <span className="warn" id="span-login-email">Please input your email correctly</span>
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="login-password"
            value={loginUser.password}
            onChange={onChange}
          />
          <span className="warn" id="span-login-password">Please input your password</span>
        </form>
        <button onClick={login}>SIGN IN</button>
      </div>
    </div>
  );
}

export default RightSideLoginComponent;
