import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/components/layout";
import { HomePage } from "@/pages/home";
import { AboutPage } from "@/pages/about";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage />, index: true },
      { path: "/about", element: <AboutPage /> },
    ],
  },
]);
