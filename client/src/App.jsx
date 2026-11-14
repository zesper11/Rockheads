import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Member from "./pages/Member";
import Discography from "./pages/Discography";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/about/member/:id",
      element: <Member />,
    },
    {
      path: "/discography",
      element: <Discography />,
    },
    { path: "*", element: <NotFound /> },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
