import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./route";
import PageLoader from "../components/PageLoader";

function AppRouter() {
  return <RouterProvider router={router} fallbackElement={<PageLoader />} />;
}

export default AppRouter;
