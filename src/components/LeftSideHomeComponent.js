import React, { useState, useEffect } from 'react'
import "../assets/sass/LeftSideHome.scss"
import { Link } from 'react-router-dom'

function LeftSideHomeComponent(props) {

  const [number, setNumber] = useState(1)
  
  const toAll = () => {
    setNumber(1)
  }

  const toImportant = () => {
    setNumber(2)
  }

  const toComplete = () => {
    setNumber(3)
  }

  useEffect(()=>{

    if(number === 1){
      number ? props.funcGetAllTodos() : console.log()
    } else if(number === 2){
      number ? props.funcGetImportantTodos() : console.log()
    } else if(number === 3){
      number ? props.funcGetCompleteTodos() : console.log()
    }
  }, [number, props])

  return (
    <div className="leftside-container" id="tab-height">
      <div className="profile-tab-container">
        <div className="profile-tab-container__picture">
          <div className="picture-container">
            <p>img</p>
          </div>
          <div className="profile-tab-container__name">
            <h3>Rifqi Taufiqul Hakim</h3>
          </div>
        </div>
        <div className="todos-tab-container">
          <button onClick={() => toAll()}><h3>My Day</h3></button>
          <button onClick={() => toImportant()}><h3>Important</h3></button>
          <button onClick={() => toComplete()}><h3>Completed</h3></button>
          <Link to="/setting/profile"><button><h3>Profile</h3></button></Link>
        </div>
      </div>
    </div>
  )
}

export default LeftSideHomeComponent
