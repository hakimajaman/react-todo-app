import React, {useState} from 'react';
import '../assets/sass/body-container.scss';
import '../assets/sass/MainSideRegister.scss';

function RightSideRegisterComponent() {

  let url = "https://miniprojectc.herokuapp.com/api/v1/"
  let headers = {
    "Content-Type": "application/json",
    accept: "application/json"
  }

  const [registerUser, setRegisterUser] = useState({
    name: "",
    email: "",
    password: ""
  })

  const onChange = (e) => {
    setRegisterUser({
      ...registerUser,
      [e.target.name]: e.target.value
    })
    console.log(registerUser)
  }

  const register = async() => {
    try {
      let data = registerUser
      let send = JSON.stringify(data)
      let sending = await fetch(
        `${url}users/register`,
        {
          method: "POST",
          headers: headers,
          body: send
        }
      )
      let res = await sending.json();
      console.log(res)
      setRegisterUser({
        name: "",
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
        <h3>Create Account</h3>
        <div className="main-register-container__link">
          <button id="facebook">f</button>
          <button id="googlePlus">G+</button>
          <button id="linkedIn">in</button>
        </div>
        <p>or use your email for registration</p>
        <form>
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            id="name"
            value={registerUser.name}
            onChange={onChange}
          />
          <span className="warn" id="span-name">name must be more than 2 or less than 33</span>
          <input
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            value={registerUser.email}
            onChange={onChange}
          />
          <span className="warn" id="span-email">Please input your email correctly</span>
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            value={registerUser.password}
            onChange={onChange}
          />
          <span className="warn" id="span-password">Password must be more than 7</span>
          <input
            type="password"
            placeholder="Confirm Password"
            id="confirmPassword"
          />
          <span className="warn" id="span-confirm">Please re-type your password correctly</span>
        </form>
        <button onClick={register}>SIGN UP</button>
      </div>
    </div>
  );
}

export default RightSideRegisterComponent;
