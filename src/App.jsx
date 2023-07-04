import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Recent from "./components/Recent";
import Courses from "./components/Courses";
import Manuals from "./components/Manuals";
import Programs from "./components/Programs";

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
]);

const App = () => (
  <RouterProvider router={router} />
);

export default App;
