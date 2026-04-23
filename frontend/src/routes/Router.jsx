import { lazy, Suspense } from "react";
import { createHashRouter, Navigate } from "react-router-dom";
import Loading from "../components/common/loading/Loading";
const Home = lazy(() => import("../pages/Home"));
const Main = lazy(() => import("../layouts/Main"));

const repoName = import.meta.env.VITE_REPO_NAME || "";

export const router = createHashRouter(
  [
    {
      path: `/`,
      element: (
        <Suspense fallback={<Loading />}>
          <Main />
        </Suspense>
      ),
      children: [
        // Render Home at the root index
        { index: true, element: <Home /> },
        // Named routes — all render the same single-page Home component
        // Sections are scroll-based; routes allow direct linking & SEO
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
