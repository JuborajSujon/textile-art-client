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
import UpdateCraftItem from "../pages/UpdateCraftItem";
import MyCraftList from "../pages/MyCraftList";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import SpecificCategoryCarft from "../pages/SpecificCategoryCarft";
import OurTeamMember from "../pages/OurTeamMember";
import FAQ from "../pages/FAQ";
import Contact from "../pages/Contact";

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
        path: "/specific-category/:category",
        element: <SpecificCategoryCarft />,
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
        path: "/team",
        element: <OurTeamMember />,
      },

      {
        path: "/faq",
        element: <FAQ />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/all-art-craft",
        element: <AllCraft />,
      },

      {
        path: "/add-craft",
        element: (
          <PrivateRoute>
            <AddCraftItem />
          </PrivateRoute>
        ),
      },

      {
        path: "/my-craft-list",
        element: (
          <PrivateRoute>
            <MyCraftList />
          </PrivateRoute>
        ),
      },

      {
        path: "/craftdetails/:id",
        element: (
          <PrivateRoute>
            <CraftDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },

      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateCraftItem />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
    ],
  },
]);

export default router;
