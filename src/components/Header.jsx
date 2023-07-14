import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1 className="logo">E.M.A.T.</h1>
    <nav>
      <div>
        <NavLink className="header-link" to="/">Return</NavLink>
      </div>
      <div>
        <NavLink className="header-link" to="/login">Login</NavLink>
        <NavLink className="header-link" to="/register">Register</NavLink>
      </div>
    </nav>
  </header>
);

export default Header;
