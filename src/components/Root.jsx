import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import { Outlet } from 'react-router'

const Root = ()  => {
  return (
    <main>
      <Header />
      <SearchBar />
      <section id="display-section">
        <Outlet />
      </section>
    </main>
  )
}

export default Root