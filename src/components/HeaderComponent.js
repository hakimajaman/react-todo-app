import React from 'react';
import "../assets/sass/Header.scss"
import { Link } from 'react-router-dom'

function HeaderComponent() {
  return (
    <div className="header-container">
      <p id="logo-title">Todos</p>
      <Link to="#">Sign Out</Link>
    </div>
  );
}

export default HeaderComponent;
