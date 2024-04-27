import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Terms from "../pages/Terms";
import ErrorPage from "./../pages/ErrorPage";
import AllCraft from "../pages/AllCraft";
import CraftDetails from "../pages/CraftDetails";
import AddCraftItem from "../pages/AddCraftItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
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
        element: <Terms />,
      },

      {
        path: "/all-art-craft",
        element: <AllCraft />,
      },

      {
        path: "/add-craft",
        element: <AddCraftItem />,
      },

      {
        path: "/my-craft-list",
        element: <div>My Art & Craft List</div>,
      },

      {
        path: "/craftdetails/:id",
        element: <CraftDetails />,
      },
    ],
  },
]);

export default router;
