import React from "react";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <p>header</p>
      <Outlet />
      <p>footer</p>
    </>
  );
}

export default MainLayout;
