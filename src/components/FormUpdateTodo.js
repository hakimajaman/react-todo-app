import React, { useState, useEffect } from 'react'
import "../assets/sass/FormTodos.scss"

const FormUpdateTodo = (props) => {
  return(
    <div className="form-container" id="showThis">
      <div className="form-container__box">
        <div className="closebox">X</div>
        <img src={require("../assets/images/logo.png")} alt="logo"/>
        <h3>Update This Task</h3>
        <form>
          <input type="text" name="name" placeholder="Title"/>
          <textarea type="text" name="description" placeholder="Your Task"/>
          <input type="date" name="dueDate" placeholder="Due Date"/>
          <button>Add My Task</button>
        </form>
      </div>
    </div>
  )
}

export default FormUpdateTodo
