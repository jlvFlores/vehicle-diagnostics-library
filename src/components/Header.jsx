import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1 className="logo">Logo</h1>
      <nav>
        <NavLink to="/">Recents</NavLink>
        <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/manuals">Manuals</NavLink>
        <NavLink to="/programs">Programs</NavLink>
      </nav>
    </header>
  )
}

export default Header