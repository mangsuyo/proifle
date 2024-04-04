import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./pages/Root";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Layout from "./components/Layout";
import Instagram from "./pages/Instagram";
import PortfolioDetailPage from "./pages/PortfolioDetailPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <div>Not Found 404 </div>,
    children: [
      { path: "/", element: <Root /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/portfolio/:portfolioId", element: <PortfolioDetailPage /> },
      { path: "/instagram", element: <Instagram /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
