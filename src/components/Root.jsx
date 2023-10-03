import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import SearchBar from './SearchBar';
import { fetchContent } from '../app/content/contentSlice';

const Root = () => {
  const dispatch = useDispatch();
  const token = sessionStorage.getItem("token");

  console.log(token);
  if (token === undefined || token === '' || token === null) {
    return <Navigate to="/login" replace />;
  }

  const headers = {
    'Content-Type': 'application/json',
    Authorization: token,
  };

  useEffect(() => {
    dispatch(fetchContent(headers));
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
