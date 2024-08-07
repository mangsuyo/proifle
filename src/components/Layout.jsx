import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="px-[10%] py-[10%]">
      <Outlet />
    </div>
  );
}
