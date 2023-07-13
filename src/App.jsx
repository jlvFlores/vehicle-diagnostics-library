import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import Root from './components/Root';
import Recent from './components/display/Recent';
import Courses from './components/display/Courses';
import Manuals from './components/display/Manuals';
import Programs from './components/display/Programs';
import Login from './components/sign_in/Login';
import Register from './components/sign_in/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Recent /> },
      { path: '/courses', element: <Courses /> },
      { path: '/courses/:id', element: <Courses /> },
      { path: '/manuals', element: <Manuals /> },
      { path: '/manuals/:id', element: <Manuals /> },
      { path: '/programs', element: <Programs /> },
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
