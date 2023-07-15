import React from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const { id } = useParams();

  return (
    <header>
      <h1 className="logo">E.M.A.T.</h1>
      <nav>
        <div>
          <NavLink id="return-link" className={`header-link ${id !== undefined ? 'return-link' : ''}`} to="/">Return</NavLink>
        </div>
        <div>
          <NavLink className="header-link" to="/login">Login</NavLink>
          <NavLink className="header-link" to="/register">Register</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
