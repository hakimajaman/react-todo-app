import React, {useState, useEffect} from 'react';
import './assets/sass/body-container.scss';
import {BrowserRouter, Route, useHistory} from 'react-router-dom';

import RegisterPage from './components/pages/RegisterPage';
import LoginPage from './components/pages/LoginPage';
import HomePage from './components/pages/HomePage';
import ProfilePage from './components/pages/ProfilePage';

const useStateWithLocalStorage = localStorageKey => {
  const [value, setValue] = useState(
    localStorage.getItem(localStorageKey) || '',
  );

  useEffect(() => {
    localStorage.setItem(localStorage, value);
  }, [value]);

  return [value, setValue];
};

function App() {
  let url = 'https://miniprojectc.herokuapp.com/api/v1/';
  let headers = {
    'Content-Type': 'application/json',
    accept: 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  };

  const [todos, setTodos] = useState([]);

  const getAllTodos = async () => {
    try {
      let get = await fetch(`${url}tasks?limit=5&page=1`, {
        headers: headers,
      });
      let res = await get.json();
      setTodos(res.data.docs);
    } catch (err) {
      console.log(err);
    }
  };

  const getImportantTodos = async () => {
    try {
      let get = await fetch(`${url}tasks/filter/importance?importance=true&limit=5&page=1`, {
        headers: headers
      })
      let res = await get.json()
      setTodos(res.data.docs)
    } catch(err) {
      console.log(err);
    }
  }

  const getCompleteTodos = async () => {
    try {
      let get = await fetch(`${url}tasks/filter/completion?completion=true&limit=5&page=1`, {
        headers: headers
      })
      let res = await get.json()
      setTodos(res.data.docs)
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <BrowserRouter>
      <div id="hidden-props"></div>
      <div className="body-page-container">
        <Route path="/home" exact>
          <HomePage
            funcGetAllTodos={getAllTodos}
            funcGetImportantTodos={getImportantTodos}
            funcGetCompleteTodos={getCompleteTodos}
            allTodos={todos}
          />
        </Route>
        <Route path="/register" exact>
          <RegisterPage />
        </Route>
        <Route path="/" exact>
          <LoginPage />
        </Route>
        <Route path="/setting/profile">
          <ProfilePage />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
