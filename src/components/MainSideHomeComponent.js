import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import '../assets/sass/MainSideHome.scss';

const MainSideHomeComponent = props => {
  let url = 'https://miniprojectc.herokuapp.com/api/v1/';
  let headers = {
    'Content-Type': 'application/json',
    accept: 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  };

  const [postTodo, setPostTodo] = useState({
    name: '',
    description: '',
    dueDate: '',
  });

  const onChange = e => {
    setPostTodo({
      ...postTodo,
      [e.target.name]: e.target.value,
    });
  };

  const openForm = () => {
    document.getElementById('showbox').style.display = 'flex';
  };

  const postItFast = async e => {
    e.preventDefault();
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    today = `${dd}-${mm}-${yyyy}`;
    try {
      let data = {
        name: postTodo.name,
        description: 'My Quick Added Task',
        dueDate: today,
      };
      let send = JSON.stringify(data);
      let sending = await fetch(`${url}tasks`, {
        method: 'POST',
        headers: headers,
        body: send,
      });
      await sending.json();
      setPostTodo({
        name: '',
        description: '',
        dueDate: '',
      });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTask = async id => {
    try {
      let data = {
        id: id,
      };
      let deleteData = JSON.stringify(data);
      let deleting = await fetch(`${url}tasks`, {
        method: 'DELETE',
        headers: headers,
        body: deleteData,
      });
      await deleting.json();
    } catch (err) {
      console.log(err);
    }
  };

  const updateCompletion = async id => {
    try {
      let trueCompletion = JSON.stringify({
        id: id,
        completion: true,
      });
      let falseCompletion = JSON.stringify({
        id: id,
        completion: false,
      });
      if (document.getElementById(id).checked === true) {
        let updating = await fetch(`${url}tasks/update/completion`, {
          method: 'PUT',
          headers: headers,
          body: trueCompletion,
        });
        await updating.json();
      } else {
        let updating = await fetch(`${url}tasks/update/completion`, {
          method: 'PUT',
          headers: headers,
          body: falseCompletion,
        });
        await updating.json();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const filterCompletion = (items) => {
    if (items.completion === true) {
      let doc = document.getElementById(items._id)
      doc ? doc.checked=true : console.log()
    } else {
      let doc = document.getElementById(items._id)
      doc ? doc.checked=false : console.log()
    }
  };

  const todos = props.allTodos.map((item, index) => (
    <div key={index}>
      {
        filterCompletion(item)
      }
      <div className="box-todos__list">
        <input
          type="checkbox"
          id={item._id}
          onClick={() => updateCompletion(item._id)}
        />
        <button>{item.name}</button>
        <img
          src={require('../assets/svg/star2.svg')}
          alt="important"
          id="margin-important"
        />
        <img
          src={require('../assets/svg/pencil.png')}
          alt="edit"
          id="margin-edit"
          style={{cursor: 'pointer'}}
        />
        <img
          src={require('../assets/svg/icons8-trash-24.png')}
          alt="remove"
          id="margin-edit"
          onClick={() => deleteTask(item._id)}
          style={{cursor: 'pointer'}}
        />
      </div>
      <div className="box-todos__edit" id="todo">
        <textarea />
        <button>Save</button>
      </div>
    </div>
  ));

  return (
    <div className="mainside-container" id="tab-height">
      <div className="todos-container">
        <div className="todos-controller">
          <div className="todos-controller__quick">
            <form onSubmit={postItFast}>
              <input
                name="name"
                type="text"
                placeholder="Quick Add Your Task"
                onChange={onChange}
                value={postTodo.name}
              />
              <button>POST IT FAST!</button>
            </form>
          </div>
          <button id="but" onClick={openForm}>
            ADD NEW TASK WITH SPECIFIC DETAILS
          </button>
        </div>
        <div className="box-todos">
          <p>Task</p>
          <p>Important</p>
        </div>
        <div id="my-day">
          {todos}
        </div>
      </div>
    </div>
  );
};

export default MainSideHomeComponent;
