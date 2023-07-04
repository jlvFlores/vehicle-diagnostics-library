import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1 className="logo">E.M.A.T.</h1>
      <nav>
        <div>
          <NavLink className="header-link" to="/">Recents</NavLink>
          <NavLink className="header-link" to="/courses">Courses</NavLink>
          <NavLink className="header-link" to="/manuals">Manuals</NavLink>
          <NavLink className="header-link" to="/programs">Programs</NavLink>
        </div>
        <div>
          <NavLink className="header-link" to="/login">Login</NavLink>
          <NavLink className="header-link" to="/register">Register</NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header