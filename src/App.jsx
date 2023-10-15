import { Navigate, RouterProvider, redirect } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ErrorPage from './components/ErrorPage';
import Home from './components/layout/Home';
import Recent from './components/display/Recent';
import Content from './components/display/Content';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';
import AccountConfirmation from './components/authentication/AccountConfirmation';

const App = () => {
  const { isLoggedIn } = useSelector((store) => store.login);
  return (
    <RouterProvider router={
      createBrowserRouter([
        {
          element: <Home />,
          errorElement: <ErrorPage />,
          children: [
            { path: '/', element: <Recent /> },
            { path: '/content/:id', element: <Content /> },
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
