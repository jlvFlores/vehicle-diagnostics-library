import { useEffect } from 'react';
import { Outlet } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../searchbar/SearchBar';
import { fetchContent } from '../../app/content/contentSlice';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
  const dispatch = useDispatch();
  const { token, isLoggedIn } = useSelector((store) => store.login);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContent({
        'Content-Type': 'application/json',
        Authorization: token,
      }));
    }
  }, [dispatch, token, isLoggedIn]);

  return (
    <div className="home-layout">
      <Header />
      <main className="homepage">
        <SearchBar />
        <section id="display-section">
          <Outlet />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
