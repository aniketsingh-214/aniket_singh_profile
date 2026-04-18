import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Loading from "../components/common/loading/Loading";
const Home = lazy(() => import("../pages/Home"));
const Main = lazy(() => import("../layouts/Main"));

const repoName = import.meta.env.VITE_REPO_NAME || "";

export const router = createBrowserRouter(
  [
    {
      path: `/`,
      element: (
        <Suspense fallback={<Loading />}>
          <Main />
        </Suspense>
      ),
      children: [
        // Redirect root to /home
        { index: true, element: <Navigate to="/home" replace /> },
        // Named routes — all render the same single-page Home component
        // Sections are scroll-based; routes allow direct linking & SEO
        { path: "home",      element: <Home /> },
        { path: "about",     element: <Home /> },
        { path: "process",   element: <Home /> },
        { path: "portfolio", element: <Home /> },
        { path: "blog",      element: <Home /> },
        { path: "services",  element: <Home /> },
        { path: "contact",   element: <Home /> },
      ],
    },
  ],
  { basename: repoName ? `/${repoName}` : "/" }
);
