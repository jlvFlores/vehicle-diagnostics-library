import { Navigate, RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Recent from './components/display/Recent';
import Content from './components/display/Content';
import SignInForm from './components/SignInForm';
import AccountConfirmation from './components/AccountConfirmation';
import WithAuth from './components/withAuth';

const HomeWithAuth = WithAuth(Home);

const router = createBrowserRouter([
  {
    element: <HomeWithAuth />,
    children: [
      { path: '/', element: <Recent /> },
      { path: '/content/:id', element: <Content /> },
    ],
  },
  { path: '/login', element: <SignInForm actionType="login" /> },
  { path: '/register', element: <SignInForm actionType="register" /> },
  { path: '/confirmation', element: <AccountConfirmation /> },
  { path: '*', element: <Navigate to="/" replace /> },
]);

const App = () => (
  <RouterProvider router={router} />
);

export default App;
