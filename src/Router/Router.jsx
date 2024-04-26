import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>ErrorPage</div>,
    children: [
      {
        path: "/",
        element: <div>Home</div>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },

      {
        path: "/terms",
        element: <div>Terms</div>,
      },

      {
        path: "/all-art-craft",
        element: <div>All Art & Craft Items</div>,
      },

      {
        path: "/add-craft",
        element: <div>Add Craft Item</div>,
      },

      {
        path: "/my-craft-list",
        element: <div>My Art & Craft List</div>,
      },
    ],
  },
]);

export default router;
