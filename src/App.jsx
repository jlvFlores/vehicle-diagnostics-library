import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import Root from './components/Root';
import Home from './components/display/Home';
import Courses from './components/display/Courses';
import Manuals from './components/display/Manuals';
import Programs from './components/display/Programs';
import Login from './components/sign_in/Login';
import Register from './components/sign_in/Register';

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/courses/:id', element: <Courses /> },
      { path: '/manuals/:id', element: <Manuals /> },
      { path: '/programs/:id', element: <Programs /> },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
]);

const App = () => (
  <RouterProvider router={router} />
);

export default App;
