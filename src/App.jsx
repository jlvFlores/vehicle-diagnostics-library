import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import Root from './components/Root';
import Home from './components/display/Home';
import Content from './components/display/Content';
import SignInForm from './components/SignInForm';
import AccountConfirmation from './components/AccountConfirmation';

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/content/:id', element: <Content /> },
    ],
  },
  { path: '/login', element: <SignInForm actionType="login" /> },
  { path: '/register', element: <SignInForm actionType="register" /> },
  { path: '/confirmation', element: <AccountConfirmation /> },
]);

const App = () => (
  <RouterProvider router={router} />
);

export default App;
