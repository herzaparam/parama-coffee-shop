import { createBrowserRouter } from "react-router-dom";
import Landing from "../page/Landing";
import MainLayout from "../components/Layout/MainLayout";
import DashboardLayout from "../components/Layout/DashboardLayout";

export let routePath = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
    ],
  },
];

export const router = createBrowserRouter(routePath);
