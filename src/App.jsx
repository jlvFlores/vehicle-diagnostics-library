import { Navigate, RouterProvider, redirect } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Layout from './components/Layout';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Recent from './components/display/Recent';
import Content from './components/display/Content';
import Login from './components/Login';
import Register from './components/Register';
import AccountConfirmation from './components/AccountConfirmation';

const App = () => {
  const { isLoggedIn } = useSelector((store) => store.login);
  return (
    <RouterProvider router={
      createBrowserRouter([
        {
          element: <Layout />,
          errorElement: <ErrorPage />,
          children: [
            {
              element: <Home />,
              children: [
                { path: '/', element: <Recent /> },
                { path: '/content/:id', element: <Content /> },
              ],
            },
          ],
          loader: () => (!isLoggedIn ? redirect('/login') : null),
        },
        {
          path: '/login',
          element: <Login />,
          loader: () => (isLoggedIn ? redirect('/') : null),
        },
        { path: '/register', element: <Register /> },
        { path: '/confirmation', element: <AccountConfirmation /> },
        { path: '*', element: <Navigate to="/" replace /> },
      ])
    }
    />
  );
};

export default App;
