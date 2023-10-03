import { useEffect } from 'react';
import { Outlet } from 'react-router';
import { useDispatch } from 'react-redux';
import Header from './Header';
import SearchBar from './SearchBar';
import { fetchContent } from '../app/content/contentSlice';

const Home = () => {
  const dispatch = useDispatch();
  const token = sessionStorage.getItem('token');

  useEffect(() => {
    dispatch(fetchContent({
      'Content-Type': 'application/json',
      Authorization: token,
    }));
  }, [dispatch, token]);

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

export default Home;
