import React, {useState, useEffect} from 'react';
import "../../assets/sass/ProfileSetting.scss";

function MainSideProfileComponent(props) {
  return (
    <div className="profile-container">
      <p>Image here</p>
      <div className="profile-container__form">
        <form>
          <label>Name</label>
          <input
            type="text"
            name="name"
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            name="password"
          />
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="confirm password"
            name="confirm"
          />
          <button>Update my profile</button>
        </form>
      </div>
    </div>
  );
}

export default MainSideProfileComponent;
