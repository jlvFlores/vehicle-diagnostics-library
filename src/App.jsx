import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Recent from "./components/Recent";
import Courses from "./components/Courses";
import Manuals from "./components/Manuals";
import Programs from "./components/Programs";
import Login from "./components/Login";
import Register from "./components/Register";

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Recent />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/manuals",
        element: <Manuals />,
      },
      {
        path: "/programs",
        element: <Programs />,
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  }
]);

const App = () => (
  <RouterProvider router={router} />
);

export default App;
