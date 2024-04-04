import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="w-screen min-h-screen flex justify-center relative">
      <Outlet />
    </div>
  );
}
