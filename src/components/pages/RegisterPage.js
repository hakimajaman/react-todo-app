import React from 'react';
import LeftSideRegisterComponent from '../LeftSideRegisterComponent'
import RightSideRegisterComponent from '../RightSideRegisterComponent'

function RegisterPage() {
  return (
    <div className="register-container">
      <LeftSideRegisterComponent/>
      <RightSideRegisterComponent/>
    </div>
  );
}

export default RegisterPage;
