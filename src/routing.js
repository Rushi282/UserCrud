import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import Home from "./components/Home";
import User from "./components/User";
import Register from "./components/Register";
import Update from "./components/Update";

const customRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/update",
        element: <Update />,
      },
    ],
  },
]);

export default customRouter;
