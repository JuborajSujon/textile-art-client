import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Root</div>,
    errorElement: <div>ErrorPage</div>,
    children: [
      {
        path: "/",
        element: <div>Home</div>,
      },
      {
        path: "/login",
        element: <div>Login</div>,
      },
      {
        path: "/register",
        element: <div>Register</div>,
      },

      {
        path: "/terms",
        element: <div>Terms</div>,
      },
    ],
  },
]);

export default router;
