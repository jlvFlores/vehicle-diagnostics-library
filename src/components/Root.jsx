import { useEffect } from 'react';
import { Outlet } from 'react-router';
import { useDispatch } from 'react-redux';
import Header from './Header';
import SearchBar from './SearchBar';
import { fetchContent } from '../app/content/contentSlice';

const Root = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);

  return (
    <main>
      <Header />
      <SearchBar />
      <section id="display-section">
        <Outlet />
      </section>
    </main>
  );
};

export default Root;
