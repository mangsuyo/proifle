import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>Not Found 404 </div>,
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
