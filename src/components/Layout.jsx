import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => (
  <main className="home">
    <Header />
    <Outlet />
    <Footer />
  </main>
);

export default Layout;
