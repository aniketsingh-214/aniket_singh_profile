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
        // Render Home at the root index
        { index: true, element: <Home /> },
        // Redirect /home to / if it exists (fixing the "mistake" route)
        { path: "home", element: <Navigate to="/" replace /> },
        // Named routes — all render the same single-page Home component
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
