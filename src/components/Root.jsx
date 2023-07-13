import React from 'react';
import { Outlet } from 'react-router';
import Header from './Header';
import SearchBar from './SearchBar';

const Root = () => (
  <main>
    <Header />
    <SearchBar />
    <section id="display-section">
      <Outlet />
    </section>
  </main>
);

export default Root;
