import React from 'react';
import HeaderComponent from '../HeaderComponent';
import LeftSideHomeComponent from '../LeftSideHomeComponent';
import MainSideHomeComponent from '../MainSideHomeComponent';
import FormTodos from '../FormTodos';

function HomePage(props) {
  return (
    <div>
      <FormTodos/>
      <HeaderComponent />
      <LeftSideHomeComponent
        funcGetAllTodos={props.funcGetAllTodos}
        funcGetImportantTodos={props.funcGetImportantTodos}
        funcGetCompleteTodos={props.funcGetCompleteTodos}
      />
      <MainSideHomeComponent
        allTodos={props.allTodos}
      />
    </div>
  );
}

export default HomePage;
