import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import SearchBar from './SearchBar';
import { fetchContent } from '../app/content/contentSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { isSignedIn, token } = useSelector((store) => store.signin);

  useEffect(() => {
    dispatch(fetchContent({
      'Content-Type': 'application/json',
      Authorization: token,
    }));
  }, [dispatch, token]);

  return !isSignedIn
    ? <Navigate to="/login" replace />
    : (
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
