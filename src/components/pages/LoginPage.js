import React from 'react';
import LeftSideLoginComponent from '../LeftSideLoginComponent'
import RightSideLoginComponent from '../RightSideLoginComponent'

function LoginPage(props) {
  return (
    <div className="register-container">
      <LeftSideLoginComponent/>
      <RightSideLoginComponent/>
    </div>
  );
}

export default LoginPage;
