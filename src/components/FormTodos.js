import React, { useState, useEffect } from 'react'
import "../assets/sass/FormTodos.scss"

const FormTodos = (props) => {

  let url = 'https://miniprojectc.herokuapp.com/api/v1/';
  let headers = {
    'Content-Type': 'application/json',
    accept: 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  };

  const closeForm = () => {
    document.getElementById('showbox').style.display = "none"
  }

  const [duee, setDuee] = useState({
    day: '',
    month: '',
    year: ''
  })

  const [postTodo, setPostTodo] = useState({
    name: '',
    description: '',
    dueDate: `${duee.day}-${duee.month}-${duee.year}`,
  });

  const onChange = e => {
    setPostTodo({
      ...postTodo,
      [e.target.name]: e.target.value,
    });
    console.log(postTodo);
  };

  const onChangeDate = e => {
    setDuee({
      ...duee,
      [e.target.name]: e.target.value
    })
    console.log(duee)
  }

  const addTask = async(e) => {
    e.preventDefault()
    try {
      let data = {
        name: postTodo.name,
        description: postTodo.description,
        dueDate: postTodo.dueDate
      }
      let send = JSON.stringify(data)
      let sending = await fetch(`${url}tasks`, {
        method: "POST",
        headers: headers,
        body: send
      });
      let res = await sending.json();
      console.log(res);
      setPostTodo({
        name: '',
        description: '',
        dueDate: ''
      })
      closeForm()
    } catch (err) {
      console.log(err);
    }
  };

  return(
    <div className="form-container" id="showbox">
      <div className="form-container__box">
        <div className="closebox" onClick={closeForm}>X</div>
        <img src={require("../assets/images/logo.png")} alt="logo"/>
        <h3>Add Your New Task</h3>
        <form>
          <input type="text" name="name" placeholder="Title" onChange={onChange}/>
          <textarea type="text" name="description" placeholder="Your Task" onChange={onChange}/>
          <div className="dueDate">
            <p>Due Date</p>
            <input type="text" name="day" placeholder="dd" onChange={onChangeDate}/>
            <input type="text" name="month" placeholder="mm" onChange={onChangeDate}/>
            <input type="text" name="year" placeholder="yyyy" onChange={onChangeDate}/>
          </div>
          <button onClick={addTask}>Add My Task</button>
        </form>
      </div>
    </div>
  )
}

export default FormTodos
