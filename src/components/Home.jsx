import { useEffect } from 'react';
import { Outlet } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from './SearchBar';
import { fetchContent } from '../app/content/contentSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.login);

  useEffect(() => {
    dispatch(fetchContent({
      'Content-Type': 'application/json',
      Authorization: token,
    }));
  }, [dispatch, token]);

  return (
    <>
      <SearchBar />
      <section id="display-section">
        <Outlet />
      </section>
    </>
  );
};

export default Home;
