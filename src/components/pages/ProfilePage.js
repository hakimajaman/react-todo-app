import React, {useState, useEffect} from 'react';
import HeaderComponent from '../HeaderComponent';
import LeftSideHomeComponent from '../LeftSideHomeComponent';

function ProfilePage(props) {
  return (
    <div>
      <HeaderComponent/>
      <LeftSideHomeComponent/>
    </div>
  );
}

export default ProfilePage;
