import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => (
  <main>
    <Header />
    <Outlet />
  </main>
);

export default Layout;
