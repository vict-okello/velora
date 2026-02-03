import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import About from "../pages/About";
import Service from "../pages/Service";
import Pricing from "../pages/Pricing";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import BlogPost from "../pages/BlogPost";
import ServiceDetail from "../pages/ServiceDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Service />,
      },
      {
        path: "/services/:slug",
        element: <ServiceDetail />,
      },
      {
        path: "/price",
        element: <Pricing />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:slug",
        element: <BlogPost />,
      },
    ],
  },
]);

export default router;
