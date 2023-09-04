import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import Root from './components/Root';
import Home from './components/display/Home';
import Content from './components/display/Content';
import Login from './components/sign_in/Login';
import Register from './components/sign_in/Register';

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/content/:id', element: <Content /> },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
]);

const App = () => (
  <RouterProvider router={router} />
);

export default App;
